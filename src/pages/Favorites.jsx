import React, { useEffect, useState } from 'react';
import styled from "styled-components";

import castleImage from "../assets/castle.png";
import PlaceCard from "../components/ LikedPlaceCard/LikedPlaceCard";
import Map from '../components/Map';


const likedPlaces = [
    {
        id: 1,
        image:{castleImage},// Заміни на коректний шлях
        title: "Ужгородський замок",
        rating: "10/10",
    },
];

// Стилі для сторінки
const PageContainer = styled.div`
    padding: 20px;
    background-color: #f0f0f0;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Title = styled.h1`
    font-size: 2em;
    text-align: center;
    margin-bottom: 20px;
`;

const CardsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
`;

const markers = [
    [48.622016, 22.303276, 'Ужгород'],
    [48.6232, 22.27626, 'Авангард'],
];

const Favorites = () => {

    const [markers, setMarkers] = useState([]);

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
                //setError(err.message || 'Щось пішло не так...');
            }
        };

        fetchStatues().then(r => console.log(markers));
    }, []);
    useEffect(() => {
        console.log('Маркери оновлено:', markers);
    }, [markers]);

    return (
        <PageContainer>
            <Title>Уподобане</Title>
            <Map markers={markers} height={500}/>
            <CardsContainer>
                {likedPlaces.map((place) => (
                    <PlaceCard
                        key={place.id}
                        image={place.image}
                        title={place.title}
                        rating={place.rating}
                    />
                ))}
            </CardsContainer>
        </PageContainer>
    );
};

export default Favorites;
