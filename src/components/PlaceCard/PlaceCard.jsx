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

const PlaceCard = ({ id, image, title, description, rating, isFavorite, onToggleFavorite, onRate }) => {
    const navigate = useNavigate();
    const [hoveredRating, setHoveredRating] = useState(0);
    const [localRating, setLocalRating] = useState(Number(rating) || 0);

    const goToDetails = () => {
        navigate(`/place/${id}`);
    };

    const handleRate = async (newRating) => {
        setLocalRating(newRating);
        try {
            await onRate(id, newRating);
        } catch (e) {
            console.error('Не вдалося поставити рейтинг:', e);
        }
    };

    return (
        <CardContainer>
            <Image src={image} alt={title} />
            <Content>
                <Title>{title}</Title>
                <Description>{description}</Description>
                <BottomContainer>
                    <RatingContainer>
                        {[1, 2, 3, 4, 5].map((star) => (
                            <span
                                key={star}
                                onClick={() => handleRate(star)}
                                onMouseEnter={() => setHoveredRating(star)}
                                onMouseLeave={() => setHoveredRating(0)}
                                style={{
                                    cursor: 'pointer',
                                    color: (hoveredRating || localRating) >= star ? '#ffc107' : '#ccc',
                                    fontSize: '20px',
                                    transition: 'color 0.2s',
                                }}
                            >
                                ★
                            </span>
                        ))}
                    </RatingContainer>
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
    onRate: PropTypes.func.isRequired,
};

PlaceCard.defaultProps = {
    description: 'Опис недоступний',
    rating: '—',
    isFavorite: false,
};

export default PlaceCard;
