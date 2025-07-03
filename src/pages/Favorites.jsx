import React from "react";
import styled from "styled-components";

import castleImage from "../assets/castle.png";
import PlaceCard from "../components/LikedPlaceCard";


const likedPlaces = [
    {
        id: 1,
        image:{castleImage},
        title: "Ужгородський замок",
        rating: "10/10",
    },
];

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

const Favorites = () => {
    return (
        <PageContainer>
            <Title>Уподобане</Title>
            <CardsContainer>
                {likedPlaces.map((place) => (
                    <PlaceCard
                        key={place.id}
                        id={place.id}
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
