import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

import { Container, ImageWrapper, Input, LockIcon, StatueImage, Title, UnlockButton, UnlockMessage } from './styles';
import Map from '../Map';
import { useAuth } from '../../context/AuthContext';

function StatueUnlock({ statueName, imageUrl, correctCoordinates, latitude, longitude, found}) {
    const [isUnlocked, setIsUnlocked] = useState(found);
    const [inputCoordinates, setInputCoordinates] = useState('');
    const { accessToken, loading: authLoading } = useAuth();

    const handleUnlock = () => {
        const cords = inputCoordinates.split(',').map(s => Number(s.trim()))
        if (Math.abs(cords[0] - latitude) < 0.000001 && Math.abs(cords[1] - longitude) < 0.000001) {
            setIsUnlocked(true);
            const fetchFindStatue = async  ()=> {
                try {
                    const res = await fetch('http://localhost:5000/quest/submit',{
                        method: "POST",
                        headers: {
                            'Content-Type': 'application/json',
                            Authorization: `Bearer ${accessToken}`,
                        },
                        body: JSON.stringify({
                            latitude: latitude,
                            longitude: longitude
                        })
                    });
                    if (!res.ok) throw new Error('Помилка при отриманні статуй');
                    console.log(res)


                } catch (err) {
                    //setError(err.message || 'Щось пішло не так...');
                }
            };

            fetchFindStatue();
        } else {
            alert('Невірні координати. Спробуйте ще раз.');
        }
    };

    useEffect(() => {
        setIsUnlocked(found)
        console.log(isUnlocked +'ada')
    }, [found]);
    console.log(found)

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
                        placeholder="Введіть GPS-координати'lat, lon'"
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
    longitude: PropTypes.number.isRequired,
    found: PropTypes.bool.isRequired
};

export default StatueUnlock;
