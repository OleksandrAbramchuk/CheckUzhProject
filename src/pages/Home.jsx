import React, { useEffect, useState } from 'react';
import styled from "styled-components";

import castleImage from "../assets/castle.png";
import headerImage from "../assets/headerImage.png";
import anotherPlaceImage from "../assets/scansen.png";
import GreenButton from '../components/GreenButton/GreenButton';
import PlaceCard from "../components/PlaceCard/PlaceCard";
import SearchBar from "../components/SearchBar/SearchBar";
import Map from '../components/Map';


const HeaderContent = styled.div`
    position: relative;
    text-align: center;
    color: white;
    z-index: 1;
`;


const Subtitle = styled.p`
    font-size: 1.2em;
    margin-bottom: 30px;
`;

const ContentSection = styled.div`
    display: flex;
    align-items: center;
    background-color: rgba(240, 240, 240, 0);
    border-radius: 8px;
    margin-bottom: 20px;
`;
const GreenBlock = styled.div`
    width: 100%;
    height: 300px;
    background-color: #61a474;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 1.5em;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

const ImagePlaceholder = styled.div`
    position: relative;
    left: 0;
    width: 450px;
    height: 650px;
    box-shadow: 1px 15px 8px rgba(0, 0, 0, 0.37);
    background: linear-gradient(181deg, rgba(97, 164, 116, 0.22) 58%, rgb(97, 164, 116) 100%);
`;

const Description = styled.div`
    flex: 1;
    margin-left: 20px;
`;

const Home = () => {

    const [markers, setMarkers] = useState([]);

    useEffect(() => {
        const fetchStatues = async () => {
            try {
                const res = await fetch('http://localhost:5000/places/all');
                if (!res.ok) throw new Error('Помилка при отриманні статуй');
                const data = await res.json();


                setMarkers(data.map((place) => [
                    place.latitude,
                    place.longitude,
                    place.name,
                ]));
            } catch (err) {
                //setError(err.message || 'Щось пішло не так...');
            }
        };

        fetchStatues().then(r => console.log(markers));
    }, []);
    useEffect(() => {
        console.log('Маркери оновлено:', markers);
    }, [markers]);
    return (
        <div>
            <ContentSection>
                <ImagePlaceholder>
                    <img
                        src={headerImage}
                        alt="Header"
                        style={{ width: "100%", height: "100%", borderRadius: "8px" }}
                    />
                </ImagePlaceholder>
                <Description>
                    <h1 style={{ fontSize: "2em", fontWeight: "bold", marginBottom: "10px" }}>
                        Знайди своє місце для відпочинку
                    </h1>
                    <p style={{ fontSize: "1.2em", color: "#666", marginBottom: "20px" }}>
                        Знаходьте та відвідуйте найкращі місця міста разом з CheckUzh.
                        Сайт стане вашим гідом під час відпочинку.
                    </p>
                    <GreenButton>
                        Переглянути місця
                    </GreenButton>
                </Description>
            </ContentSection>

            <GreenBlock>
                <HeaderContent>
                    <Subtitle>Яке місце шукаємо?</Subtitle>
                    <SearchBar placeholder="Пошук" />
                </HeaderContent>
            </GreenBlock>
            <Map markers={markers} height={500}/>
            <PlaceCard
                image={castleImage}
                title="Ужгородський замок"
                description="У́жгородський за́мок — фортифікаційна споруда в Ужгороді
                (Закарпатська область, Україна). Розташований поруч із центром міста,
                на вулиці Капітульній. Нині використовується як краєзнавчий музей."
                rating="10/10"
            />
            <PlaceCard
                image={anotherPlaceImage}
                title="Скансенс"
                description="Закарпатський музей народної архітектури та побуту
                 — музей просто неба в місті Ужгород (Україна), складається з архітектурних
                  пам'яток старовинного закарпатського села і зразків найдавніших і найбільш
                  розповсюджених видів народного прикладного мистецтва."
                rating="9/10"
            />
            <PlaceCard
                image={anotherPlaceImage}
                title="Скансенс"
                description="Закарпатський музей народної архітектури та побуту
                 — музей просто неба в місті Ужгород (Україна), складається з архітектурних
                  пам'яток старовинного закарпатського села і зразків найдавніших і найбільш
                  розповсюджених видів народного прикладного мистецтва."
                rating="9/10"
            />
            <PlaceCard
                image={anotherPlaceImage}
                title="Скансенс"
                description="Закарпатський музей народної архітектури та побуту
                 — музей просто неба в місті Ужгород (Україна), складається з архітектурних
                  пам'яток старовинного закарпатського села і зразків найдавніших і найбільш
                  розповсюджених видів народного прикладного мистецтва."
                rating="9/10"
            />
        </div>
    );
};

export default Home;
