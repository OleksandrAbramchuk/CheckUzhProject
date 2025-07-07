import React, { useEffect, useState } from 'react';
import LikedPlaceCard from '../../components/LikedPlaceCard/LikedPlaceCard';
import { getFavorites, removeFromFavorites } from '../../utils/favorites';

import {
    PageContainer,
    Title,
    CardsContainer,
} from './styles';

const Favorites = () => {
    const [likedPlaces, setLikedPlaces] = useState([]);

    useEffect(() => {
        const fetchFavorites = async () => {
            try {
                const favorites = await getFavorites();
                setLikedPlaces(favorites);
            } catch (error) {
                console.error('Помилка при отриманні улюблених:', error);
            }
        };

        fetchFavorites();
    }, []);

    const handleDelete = async (placeId) => {
        try {
            await removeFromFavorites(placeId);
            setLikedPlaces((prev) => prev.filter((place) => place.id !== placeId));
        } catch (error) {
            console.error('Помилка при видаленні з улюблених:', error);
        }
    };

    if (likedPlaces.length === 0) {
        return (
            <PageContainer>
                <Title>Уподобане</Title>
                <p>У вас немає уподобаних місць.</p>
            </PageContainer>
        );
    }

    return (
        <PageContainer>
            <Title>Уподобане</Title>
            <CardsContainer>
                {likedPlaces.map((place) => (
                    <LikedPlaceCard
                        key={place.id}
                        id={place.id}
                        image={place.imageUrl}
                        title={place.name}
                        rating={place.rating ? String(place.rating) : '—'}
                        onDelete={handleDelete}
                    />
                ))}
            </CardsContainer>
        </PageContainer>
    );
};

export default Favorites;
