import PropTypes from 'prop-types';
import React, { useState } from 'react';

import { Container, ImageWrapper, Input, LockIcon, StatueImage, Title, UnlockButton, UnlockMessage } from './styles';

function StatueUnlock({ statueName, imageUrl, correctCoordinates }) {
    const [isUnlocked, setIsUnlocked] = useState(false);
    const [inputCoordinates, setInputCoordinates] = useState('');

    const handleUnlock = () => {
        if (inputCoordinates === correctCoordinates) {
            setIsUnlocked(true);
        } else {
            alert('Невірні координати. Спробуйте ще раз.');
        }
    };

    return (
        <Container>
            <ImageWrapper>
                <StatueImage src={imageUrl} alt={statueName} isUnlocked={isUnlocked} />
                {!isUnlocked && <LockIcon>🔒</LockIcon>}
            </ImageWrapper>
            <Title>{statueName}</Title>
            {isUnlocked ? (
                <UnlockMessage>✔ Знайдено!</UnlockMessage>
            ) : (
                <>
                    <Input
                        type="text"
                        placeholder="Введіть GPS-координати"
                        value={inputCoordinates}
                        onChange={(event) => setInputCoordinates(event.target.value)}
                    />
                    <UnlockButton onClick={handleUnlock}>Розблокувати</UnlockButton>
                </>
            )}
        </Container>
    );
}

StatueUnlock.propTypes = {
    statueName: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    correctCoordinates: PropTypes.string.isRequired,
};

export default StatueUnlock;
