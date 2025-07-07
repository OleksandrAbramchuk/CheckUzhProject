import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';

import {
    ContentSection,
    ImagePlaceholder,
    Description,
    Pagination,
    PageButton,
    CategoryButtons,
    CategoryButton,
    MapWrapper
} from './styles';

import headerImage from '../../assets/headerImage.png';
import GreenButton from '../../components/GreenButton/GreenButton';
import Map from '../../components/Map';
import PlaceCard from '../../components/PlaceCard/PlaceCard';

import {
    getFavorites,
    addToFavorites,
    removeFromFavorites,
} from '../../utils/favorites';

const CATEGORY_TRANSLATIONS = {
    statue: 'Статуї',
    museum: 'Музеї',
    theatre: 'Театри',
    park: 'Парки',
    historic: 'Історичні пам’ятки',
};

const Home = () => {
    const [places, setPlaces] = useState([]);
    const [page, setPage] = useState(1);
    const [limit] = useState(6);
    const [category, setCategory] = useState('');
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [hasMore, setHasMore] = useState(true);
    const [markers, setMarkers] = useState([]);
    const [favoriteIds, setFavoriteIds] = useState([]);
    const [totalPages, setTotalPages] = useState(1);

    const placesRef = useRef(null);

    const fetchCategories = async () => {
        try {
            const response = await axios.get('http://localhost:5000/places/categories');
            if (Array.isArray(response.data)) {
                const validCategories = response.data.filter((cat) => typeof cat === 'string' && cat.trim() !== '');
                setCategories(validCategories);
            } else {
                console.warn('Неправильний формат категорій');
                setCategories([]);
            }
        } catch (e) {
            console.error('Помилка категорій:', e);
        }
    };

    useEffect(() => {
        const fetchStatues = async () => {
            try {
                const res = await fetch('http://localhost:5000/places/all');
                if (!res.ok) throw new Error('Помилка при отриманні статуй');
                const data = await res.json();
                setMarkers(data.map((place) => [
                    place.latitude,
                    place.longitude,
                    place.name,
                ]));
            } catch (err) {
                console.error('Помилка маркерів:', err);
            }
        };

        fetchStatues();
    }, []);

    useEffect(() => {
        fetchCategories();
    }, [category, page]);

    useEffect(() => {
        const importPlacesOnce = async () => {
            try {
                const imported = localStorage.getItem('placesImported');
                if (!imported) {
                    await axios.post('http://localhost:5000/places/import/osm');
                    localStorage.setItem('placesImported', 'true');
                    console.log('Імпорт виконано');
                }
            } catch (e) {
                console.error('Помилка при імпорті:', e);
            }
        };

        const fetchPlaces = async () => {
            setLoading(true);
            try {
                const response = await axios.get('http://localhost:5000/places', {
                    params: { page, limit, category },
                });
                setPlaces(response.data.items || []);
                setHasMore((response.data.items || []).length === limit);
                setTotalPages(Math.ceil((response.data.total || 0) / limit));
                setError('');
            } catch (e) {
                console.error('Помилка місць:', e);
                setError('Помилка при завантаженні місць.');
            } finally {
                setLoading(false);
            }
        };

        const fetchFavorites = async () => {
            try {
                const favs = await getFavorites();
                setFavoriteIds(favs.map((fav) => fav.id));
            } catch (err) {
                console.error('Помилка отримання улюблених:', err);
            }
        };

        const run = async () => {
            await importPlacesOnce();
            await fetchPlaces();
            await fetchFavorites();
        };

        run();
    }, [page, limit, category]);

    const handleToggleFavorite = async (placeId) => {
        try {
            if (favoriteIds.includes(placeId)) {
                await removeFromFavorites(placeId);
                setFavoriteIds((prev) => prev.filter((id) => id !== placeId));
            } else {
                await addToFavorites(placeId);
                setFavoriteIds((prev) => [...prev, placeId]);
            }
        } catch (err) {
            console.error('Не вдалося змінити улюблене місце:', err);
        }
    };

    const handleRatePlace = async (placeId, rating) => {
        try {
            await axios.post(
                `http://localhost:5000/places/${placeId}/rate`,
                { rating },
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                    },
                }
            );
            console.log(`Поставлено рейтинг ${rating} для місця з id ${placeId}`);
        } catch (err) {
            console.error('Помилка при встановленні рейтингу:', err);
        }
    };

    return (
        <div>
            <ContentSection>
                <ImagePlaceholder>
                    <img
                        src={headerImage}
                        alt="Header"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                </ImagePlaceholder>
                <Description>
                    <h1 style={{ fontSize: '2em', fontWeight: 'bold', marginBottom: '10px' }}>
                        Знайди своє місце для відпочинку
                    </h1>
                    <p style={{ fontSize: '1.2em', color: '#666', marginBottom: '20px' }}>
                        Знаходьте та відвідуйте найкращі місця міста разом з CheckUzh.
                    </p>
                    <GreenButton onClick={() => placesRef.current?.scrollIntoView({ behavior: 'smooth' })}>
                        Переглянути місця
                    </GreenButton>
                </Description>
            </ContentSection>

            <MapWrapper>
                <Map markers={markers} height={500} />
            </MapWrapper>
            <div ref={placesRef} />

            <CategoryButtons>
                <CategoryButton
                    onClick={() => setCategory('')}
                    className={category === '' ? 'active' : ''}
                >
                    Усі
                </CategoryButton>
                {categories.map((cat) => (
                    <CategoryButton
                        key={cat}
                        onClick={() => {
                            setCategory(cat);
                            setPage(1);
                        }}
                        className={category === cat ? 'active' : ''}
                    >
                        {CATEGORY_TRANSLATIONS[cat] || cat}
                    </CategoryButton>
                ))}
            </CategoryButtons>

            {loading && <p style={{ textAlign: 'center' }}>Завантаження...</p>}
            {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
            {!loading && !error && places.length === 0 && <p style={{ textAlign: 'center' }}>Немає результатів.</p>}

            {!loading && !error && places.map((place) => (
                <PlaceCard
                    key={place.id}
                    id={place.id}
                    image={place.imageUrl}
                    title={place.name}
                    description={(place.description || '').slice(0, 120) + '...'}
                    rating={place.rating}
                    isFavorite={favoriteIds.includes(place.id)}
                    onToggleFavorite={handleToggleFavorite}
                    onRate={handleRatePlace}
                />
            ))}

            <Pagination>
                <PageButton onClick={() => setPage(1)} disabled={page === 1}>1</PageButton>
                {Array.from({ length: totalPages }, (_, index) => index + 1).slice(1).map((pg) => (
                    <PageButton
                        key={pg}
                        onClick={() => setPage(pg)}
                        active={pg === page}
                    >
                        {pg}
                    </PageButton>
                ))}
            </Pagination>
        </div>
    );
};

export default Home;