import PropTypes from "prop-types";
import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
    margin-top: 10px;
`;

const Star = styled.span`
  font-size: 24px;
  cursor: pointer;
  color: ${({ active }) => (active ? "gold" : "lightgray")};
`;

export default function Rating({ placeId, initialRating }) {
    const [rating, setRating] = useState(initialRating ?? 0);

    const handleRating = (newRating) => {
        setRating(newRating);
        console.log(`New rating for place ${placeId}: ${newRating}`);
    };

    return (
        <Container>
            <p>Рейтинг:</p>
            {[1, 2, 3, 4, 5].map((star) => (
                <Star
                    key={star}
                    active={star <= rating}
                    onClick={() => handleRating(star)}
                >
                    ★
                </Star>
            ))}
        </Container>
    );
}

Rating.propTypes = {
    placeId: PropTypes.string.isRequired,
    initialRating: PropTypes.number,
};
