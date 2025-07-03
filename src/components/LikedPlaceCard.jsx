import PropTypes from "prop-types";
import React, { useState } from "react";
import styled from "styled-components";

const CardContainer = styled.div`
    width: 300px;
    height: 420px; 
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

const Image = styled.img`
    width: 250px;
    height: 160px;
    border-radius: 12px;
    object-fit: cover;
    margin-bottom: 10px;
`;

const Title = styled.h2`
    font-size: 1.2em;
    font-weight: bold;
    margin: 0;
    margin-bottom: 8px;
`;

const RatingContainer = styled.div`
    font-size: 1em;
    color: #444;
    margin: 8px 0;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const HeartButton = styled.button`
    background: none;
    border: none;
    font-size: 1.5em;
    cursor: pointer;
    color: red; /* Постійний червоний колір */
`;

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

LikedPlaceCard.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    rating: PropTypes.string,
};

LikedPlaceCard.defaultProps = {
    rating: "10/10",
};

export default LikedPlaceCard;
