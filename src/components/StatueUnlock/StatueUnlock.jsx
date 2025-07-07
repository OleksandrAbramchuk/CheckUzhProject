import PropTypes from 'prop-types';
import React, { useState } from 'react';

import { Container, ImageWrapper, Input, LockIcon, StatueImage, Title, UnlockButton, UnlockMessage } from './styles';
import Map from '../Map';

function StatueUnlock({ statueName, imageUrl, correctCoordinates, latitude, longitude }) {
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
                <div>
                    <Map markers={[[latitude,longitude,statueName]]} height={200}/>
                    <UnlockMessage>✔ Знайдено!</UnlockMessage>
                </div>
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
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired
};

export default StatueUnlock;
