// src/components/PlaceCard.jsx
import PropTypes from "prop-types";
import React, { useState } from "react";
import styled from "styled-components";

import GreenButton from "./GreenButton";

// Стилі для головного контейнера
const CardContainer = styled.div`
    width: 900px;
    height: 300px;
    padding: 16px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    background: #f0f0f0;
    border: 3px solid #61a474;
    border-radius: 49px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 20px auto; /* Центрування на сторінці */
`;

// Стилі для зображення
const Image = styled.img`
    width: 400px;
    height: 280px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.42);
    border-radius: 12px;
    margin-right: 20px;
`;

// Стилі для текстового контенту
const Content = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
`;

// Стилі для заголовка
const Title = styled.h2`
    font-size: 25px;
    font-weight: bold;
    margin: 0;
    margin-top: 15px;
`;

// Стилі для опису
const Description = styled.p`
    font-size: 18px;
    color: #666;
    margin: 10px 0;
    line-height: 1.4;
    flex-grow: 1;
`;

// Стилі для рейтингу
const RatingContainer = styled.div`
    display: flex;
    align-items: center;
    font-size: 20px;
    color: #444;
`;

// Стилі для кнопки "Деталі" та рейтингу
const BottomContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 40px;
    margin-bottom: 10px;
`;

// Стилі для кнопки-сердечка
const HeartButton = styled.button`
    background: none;
    border: none;
    font-size: 48px; /* Збільшений розмір */
    cursor: pointer;
    color: ${(props) => (props.isLiked ? "red" : "#ccc")};
    margin-right: 10px; /* Відступ між сердечком і кнопкою "Деталі" */
    transition: color 0.3s;

    &:hover {
        color: red;
    }
`;

const PlaceCard = ({ image, title, description, rating }) => {
    const [isLiked, setIsLiked] = useState(false);

    const toggleLike = () => {
        setIsLiked(!isLiked);
    };

    return (
        <CardContainer>
            <Image src={image} alt={title} />
            <Content>
                <Title>{title}</Title>
                <Description>{description}</Description>
                <BottomContainer>
                    <RatingContainer>{rating} ★★★★★</RatingContainer>
                    <div>
                        <HeartButton isLiked={isLiked} onClick={toggleLike}>
                            ♥
                        </HeartButton>
                        <GreenButton>Деталі</GreenButton>
                    </div>
                </BottomContainer>
            </Content>
        </CardContainer>
    );
};

// Валідація пропсів
PlaceCard.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    rating: PropTypes.string,
};

// Значення за замовчуванням для необов'язкових пропсів
PlaceCard.defaultProps = {
    description: "Опис недоступний",
};

export default PlaceCard;
