import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
    max-width: 1100px;
    margin: 40px auto;
    padding: 20px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: #ffffff;
`;

const TopSection = styled.div`
    display: flex;
    gap: 40px;
    align-items: flex-start;
    flex-wrap: nowrap;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

const Image = styled.img`
    flex: 1 1 50%;
    max-width: 100%;
    height: 400px;
    object-fit: cover;
    border-radius: 16px;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
`;

const InfoBlock = styled.div`
    flex: 1 1 50%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`;

const Title = styled.h1`
    font-size: 36px;
    color: #2c3e50;
    margin-bottom: 10px;
`;

const Location = styled.p`
    font-size: 16px;
    color: #7f8c8d;
    font-style: italic;
    margin-bottom: 20px;
`;

const Description = styled.p`
    font-size: 18px;
    line-height: 1.6;
    color: #34495e;
`;

const BottomSection = styled.div`
    margin-top: 40px;
    display: flex;
    align-items: center;
    gap: 24px;
    flex-wrap: wrap;

    @media (max-width: 480px) {
        flex-direction: column;
        align-items: flex-start;
    }
`;

const Rating = styled.div`
    font-size: 20px;
    color: #f39c12;
    font-weight: bold;
`;

const FavoriteButton = styled.button`
    background-color: #27ae60;
    color: white;
    border: none;
    padding: 12px 28px;
    border-radius: 10px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #219150;
    }
`;

const MapPlaceholder = styled.div`
    flex: 1 1 100%;
    margin-top: 30px;
    width: 100%;
    height: 300px;
    border-radius: 12px;
    background-color: #ecf0f1;
    border: 2px dashed #bdc3c7;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #95a5a6;
    font-size: 18px;
`;

const PlacePage = () => {
    const { id } = useParams();

    const placeData = {
        id,
        title: "",
        image: "",
        description: "",
        rating: "",
        location: "",
    };

    return (
        <Container>
            <TopSection>
                <Image
                    src={
                        placeData.image ||
                        "https://via.placeholder.com/600x400?text=Зображення+місця"
                    }
                    alt={placeData.title || "Назва місця"}
                />
                <InfoBlock>
                    <Title>{placeData.title || "Назва місця"}</Title>
                    <Location>{placeData.location || "Розташування місця"}</Location>
                    <Description>
                        {placeData.description || "Опис місця буде відображений тут."}
                    </Description>
                </InfoBlock>
            </TopSection>

            <BottomSection>
                <Rating>
                    {placeData.rating ? `Рейтинг: ${placeData.rating}` : "Рейтинг: —"}
                </Rating>

                <FavoriteButton>Додати в уподобане</FavoriteButton>

                <MapPlaceholder>Мапа з координатами місця (зʼявиться пізніше)</MapPlaceholder>
            </BottomSection>
        </Container>
    );
};

export default PlacePage;
