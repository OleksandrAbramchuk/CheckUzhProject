import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import {
    Container,
    TopSection,
    Image,
    InfoBlock,
    Title,
    Location,
    Description,
    BottomSection,
    Rating,
    FavoriteButton,
    MapPlaceholder,
} from './styles';
import Map from '../../components/Map';

import { getFavorites, addToFavorites, removeFromFavorites } from '../../utils/favorites';

const PlacePage = () => {
    const { id } = useParams();
    const [place, setPlace] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isFavorite, setIsFavorite] = useState(false);

    useEffect(() => {
        const fetchPlace = async () => {
            try {
                const response = await fetch(`http://localhost:5000/places/${id}`);
                if (!response.ok) throw new Error('Місце не знайдено');
                const data = await response.json();
                setPlace(data);
            } catch (error) {
                console.error('Помилка при завантаженні місця:', error);
                setPlace(null);
            } finally {
                setLoading(false);
            }
        };

        fetchPlace();
    }, [id]);

    useEffect(() => {
        const checkFavorite = async () => {
            try {
                const favorites = await getFavorites();
                setIsFavorite(favorites.some((fav) => fav.id === Number(id)));
            } catch (error) {
                console.error('Помилка отримання улюблених:', error);
            }
        };

        checkFavorite();
    }, [id]);

    const toggleFavorite = async () => {
        if (!place) return;
        try {
            if (isFavorite) {
                await removeFromFavorites(place.id);
                setIsFavorite(false);
            } else {
                await addToFavorites(place.id);
                setIsFavorite(true);
            }
        } catch (error) {
            console.error('Помилка при зміні уподобаного:', error);
        }
    };

    if (loading) return <p style={{ textAlign: 'center' }}>Завантаження...</p>;
    if (!place) return <p style={{ textAlign: 'center' }}>Місце не знайдено</p>;

    return (
        <Container>
            <TopSection>
                <Image
                    src={place.imageUrl || 'https://via.placeholder.com/600x400?text=Зображення+місця'}
                    alt={place.name}
                />
                <InfoBlock>
                    <Title>{place.name}</Title>
                    <Location>{place.address || 'Категорія не вказана'}</Location>
                    <Description>{place.description || 'Опис відсутній.'}</Description>
                </InfoBlock>
            </TopSection>

            <BottomSection>
                <Rating>Рейтинг: {place.rating ?? '—'}</Rating>
                <FavoriteButton onClick={toggleFavorite}>
                    {isFavorite ? 'Видалити з уподобаних' : 'Додати в уподобане'}
                </FavoriteButton>
                <Map markers={[[place.latitude,place.longitude,place.name]]} height={500}/>
            </BottomSection>
        </Container>
    );
};

export default PlacePage;
