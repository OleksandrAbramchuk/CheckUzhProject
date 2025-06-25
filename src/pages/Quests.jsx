import React from 'react';

import StatueUnlock from '../components/StatueUnlock';

function Quests() {
    const statues = [
        {
            id: 1,
            name: "Міні-скульптура 'Гаррі Гудіні'",
            imageUrl: 'path/to/houdini.jpg',
            correctCoordinates: '50.4501,30.5234',
        },
        {
            id: 2,
            name: "Міні-скульптура 'Лебедине озеро'",
            imageUrl: 'path/to/swanlake.jpg',
            correctCoordinates: '50.4502,30.5235',
        },
        {
            id: 3,
            name: "Міні-скульптура 'Дідусь Вечернічк'",
            imageUrl: 'path/to/grandfather.jpg',
            correctCoordinates: '50.4503,30.5236',
        },
        {
            id: 4,
            name: "Міні-скульптура 'Баффало Білл'",
            imageUrl: 'path/to/buffalobill.jpg',
            correctCoordinates: '50.4504,30.5237',
        },
        {
            id: 5,
            name: "Міні-скульптура 'Баффало Білл'",
            imageUrl: 'path/to/buffalobill.jpg',
            correctCoordinates: '50.4504,30.5237',
        },
    ];

    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
            <h1>Квест</h1>
            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(4, 1fr)',
                    gap: '20px',
                }}
            >
                {statues.map((statue) => (
                    <StatueUnlock
                        key={statue.id}
                        statueName={statue.name}
                        imageUrl={statue.imageUrl}
                        correctCoordinates={statue.correctCoordinates}
                    />
                ))}
            </div>
        </div>
    );
}

export default Quests;
