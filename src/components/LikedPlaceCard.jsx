import PropTypes from "prop-types";
import React, { useState } from "react";
import styled from "styled-components";

// Стилі для головного контейнера
const CardContainer = styled.div`
    width: 300px;
    height: 420px; /* Додано висоту для кнопки "Детальніше" */
    padding: 16px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    background: #ffffff;
    border: 2px solid #61a474;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin: 20px;
    text-align: center;
`;

// Стилі для зображення
const Image = styled.img`
    width: 250px;
    height: 160px;
    border-radius: 12px;
    object-fit: cover;
    margin-bottom: 10px;
`;

// Стилі для заголовка
const Title = styled.h2`
    font-size: 1.2em;
    font-weight: bold;
    margin: 0;
    margin-bottom: 8px;
`;

// Стилі для рейтингу
const RatingContainer = styled.div`
    font-size: 1em;
    color: #444;
    margin: 8px 0;
    display: flex;
    align-items: center;
    justify-content: center;
`;

// Стилі для кнопки-сердечка
const HeartButton = styled.button`
    background: none;
    border: none;
    font-size: 1.5em;
    cursor: pointer;
    color: red; /* Постійний червоний колір */
`;

// Стилі для кнопки "Детальніше"
const DetailsButton = styled.button`
    padding: 8px 16px;
    font-size: 1em;
    background-color: #61a474;
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    margin-top: 10px;

    &:hover {
        background-color: #4e8a5c;
    }
`;

const LikedPlaceCard = ({ image, title, rating }) => {
    const [isLiked, setIsLiked] = useState(false);

    const toggleLike = () => {
        setIsLiked(!isLiked);
    };

    const handleDetailsClick = () => {
        // Тут можна додати функціонал для відкриття детальної інформації
        alert(`Детальна інформація про: ${title}`);
    };

    return (
        <CardContainer>
            <Image src={image} alt={title} />
            <Title>{title}</Title>
            <RatingContainer>
                {rating}
                <HeartButton isLiked={isLiked} onClick={toggleLike}>
                    ♥
                </HeartButton>
            </RatingContainer>
            <DetailsButton onClick={handleDetailsClick}>Детальніше</DetailsButton>
        </CardContainer>
    );
};

// Валідація пропсів
LikedPlaceCard.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    rating: PropTypes.string,
};

// Значення за замовчуванням для необов'язкових пропсів
LikedPlaceCard.defaultProps = {
    rating: "10/10",
};

export default LikedPlaceCard;
