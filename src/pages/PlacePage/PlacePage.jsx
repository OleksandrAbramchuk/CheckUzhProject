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

const PlacePage = () => {
    const { id } = useParams();
    const [place, setPlace] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPlace = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/places/${id}`);
                setPlace(response.data);
            } catch (error) {
                console.error('Помилка при завантаженні місця:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchPlace();
    }, [id]);

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
                    <Description>{place.text || 'Опис відсутній.'}</Description>
                </InfoBlock>
            </TopSection>

            <BottomSection>
                <Rating>Рейтинг: {place.rating ?? '—'}</Rating>
                <FavoriteButton>Додати в уподобане</FavoriteButton>
                <MapPlaceholder>Мапа з координатами місця (зʼявиться пізніше)</MapPlaceholder>
            </BottomSection>
        </Container>
    );
};

export default PlacePage;
