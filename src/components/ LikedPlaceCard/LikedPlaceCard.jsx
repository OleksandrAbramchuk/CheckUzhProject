import PropTypes from 'prop-types';
import React, { useState } from 'react';

import { CardContainer, DetailsButton, HeartButton, Image, RatingContainer, Title } from './styles';

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
    rating: '10/10',
};

export default LikedPlaceCard;
