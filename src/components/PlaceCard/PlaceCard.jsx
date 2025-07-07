import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import GreenButton from '../GreenButton/GreenButton';
import {
    BottomContainer,
    CardContainer,
    Content,
    Description,
    HeartButton,
    Image,
    RatingContainer,
    Title,
} from './styles';

const PlaceCard = ({ id, image, title, description, rating }) => {
    const [isLiked, setIsLiked] = useState(false);
    const navigate = useNavigate();

    const toggleLike = () => {
        setIsLiked(!isLiked);
    };
    const goToDetails = () => {
        navigate(`/place/${id}`);
    }

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
                        <GreenButton onClick={goToDetails}>Деталі</GreenButton>
                    </div>
                </BottomContainer>
            </Content>
        </CardContainer>
    );
};

PlaceCard.propTypes = {
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    rating: PropTypes.string,
};

PlaceCard.defaultProps = {
    description: 'Опис недоступний',
};

export default PlaceCard;
