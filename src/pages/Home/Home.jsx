import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';

import {
    ContentSection,
    ImagePlaceholder,
    Description,
    Pagination,
    PageButton,
} from './styles';

import headerImage from '../../assets/headerImage.png';
import GreenButton from '../../components/GreenButton/GreenButton';
import Map from '../../components/Map';
import PlaceCard from '../../components/PlaceCard/PlaceCard';

const Home = () => {
    const [places, setPlaces] = useState([]);
    const [page, setPage] = useState(1);
    const [limit] = useState(6);
    const [category, setCategory] = useState('');
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [hasMore, setHasMore] = useState(true);
    const placesRef = useRef(null);

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

        const fetchCategories = async () => {
            try {
                const response = await axios.get('http://localhost:5000/places/categories');
                if (Array.isArray(response.data)) {
                    const validCategories = response.data.filter((cat) => typeof cat === 'string' && cat.trim() !== '');

                    setCategories(validCategories);
                } else {
                    console.warn('Неправильний формат даних з /categories');
                    setCategories([]);
                }
            } catch (e) {
                console.error('Помилка при завантаженні категорій:', e);
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
                setError('');
            } catch (e) {
                console.error('Помилка при завантаженні місць:', e);
                setError('Помилка при завантаженні місць.');
            } finally {
                setLoading(false);
            }
        };

        const run = async () => {
            await importPlacesOnce();
            await fetchCategories();
            await fetchPlaces();
        };

        run();
    }, [page, limit, category]);

    return (
        <div>
            <ContentSection>
                <ImagePlaceholder>
                    <img
                        src={headerImage}
                        alt="Header"
                        style={{ width: '100%', height: '100%', borderRadius: '8px' }}
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
            <Map />
            <div ref={placesRef} />
            <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
                <select
                    value={category}
                    onChange={(e) => {
                        setCategory(e.target.value);
                        setPage(1);
                    }}
                    style={{
                        padding: '10px 15px',
                        borderRadius: '6px',
                        border: '1px solid #ccc',
                        fontSize: '16px',
                        minWidth: '220px',
                        cursor: 'pointer',
                    }}
                >
                    <option value="">Усі категорії</option>
                    {categories.map((cat) => (
                        <option key={cat} value={cat}>
                            {cat.charAt(0).toUpperCase() + cat.slice(1)}
                        </option>
                    ))}
                </select>
            </div>

            {loading && <p style={{ textAlign: 'center' }}>Завантаження...</p>}
            {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}

            {!loading && !error && places.length === 0 && <p style={{ textAlign: 'center' }}>Немає результатів.</p>}

            {!loading &&
                !error &&
                places.map((place) => (
                    <PlaceCard
                        key={place.id}
                        id={place.id}
                        image={place.imageUrl}
                        title={place.name}
                        description={place.text}
                        rating={place.rating}
                    />
                ))}

            <Pagination>
                <PageButton onClick={() => setPage((prev) => Math.max(1, prev - 1))} disabled={page === 1}>
                    Назад
                </PageButton>
                <PageButton onClick={() => setPage((prev) => prev + 1)} disabled={!hasMore}>
                    Вперед
                </PageButton>
            </Pagination>
        </div>
    );
};

export default Home;
