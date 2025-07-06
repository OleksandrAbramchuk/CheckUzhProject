import PropTypes from 'prop-types';
import React, { useState } from 'react';

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

PlaceCard.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    rating: PropTypes.string,
};

PlaceCard.defaultProps = {
    description: 'Опис недоступний',
};

export default PlaceCard;
