import PropTypes from 'prop-types';
import React from 'react';
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

const PlaceCard = ({ id, image, title, description, rating, isFavorite, onToggleFavorite }) => {
    const navigate = useNavigate();

    const goToDetails = () => {
        navigate(`/place/${id}`);
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
                        <HeartButton
                            isLiked={isFavorite}
                            onClick={() => onToggleFavorite(id)}
                            aria-label={isFavorite ? 'Видалити з улюблених' : 'Додати в улюблені'}
                        >
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
    rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    isFavorite: PropTypes.bool,
    onToggleFavorite: PropTypes.func,
};

PlaceCard.defaultProps = {
    description: 'Опис недоступний',
    rating: '—',
    isFavorite: false,
};

export default PlaceCard;
