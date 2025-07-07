import PropTypes from 'prop-types';
import React from 'react';
import { GoStar } from 'react-icons/go';
import {
    CardContainer,
    DetailsButton,
    DeleteButton,
    Image,
    RatingContainer,
    Title,
    ButtonsRow,
} from './styles';
import { useNavigate } from 'react-router-dom';

const LikedPlaceCard = ({ id, image, title, rating, onDelete }) => {
    const navigate = useNavigate();

    return (
        <CardContainer>
            <Image src={image} alt={title} />
            <Title>{title}</Title>
            <RatingContainer>
                <GoStar style={{ color: '#f1c40f', marginRight: '5px' }} />
                {rating}
            </RatingContainer>
            <ButtonsRow>
                <DetailsButton onClick={() => navigate(`/place/${id}`)}>
                    Детальніше
                </DetailsButton>
                <DeleteButton onClick={() => onDelete(id)}>
                    Видалити
                </DeleteButton>
            </ButtonsRow>
        </CardContainer>
    );
};

LikedPlaceCard.propTypes = {
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    rating: PropTypes.string,
    onDelete: PropTypes.func.isRequired,
};

LikedPlaceCard.defaultProps = {
    rating: '—',
};

export default LikedPlaceCard;
