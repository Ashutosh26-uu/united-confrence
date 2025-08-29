import React from 'react';
import { StatsCounter } from './InteractiveFeatures';
import './Prayagraj.css';

const Prayagraj = () => {
    const cityStats = [
        { value: 1200, suffix: '+', label: 'Years of History' },
        { value: 6, suffix: 'M+', label: 'Population' },
        { value: 25, suffix: '+', label: 'Tourist Attractions' },
        { value: 3, suffix: '', label: 'Sacred Rivers' }
    ];

    const touristPlaces = [
        {
            name: "Triveni Sangam",
            description: "Sacred confluence of three rivers - Ganga, Yamuna, and Saraswati",
            distance: "15 km from city center"
        },
        {
            name: "Allahabad Fort",
            description: "Historic Mughal fort built by Emperor Akbar in 1583",
            distance: "12 km from city center"
        },
        {
            name: "Anand Bhavan",
            description: "Ancestral home of the Nehru family, now a museum",
            distance: "8 km from city center"
        },
        {
            name: "Khusro Bagh",
            description: "Mughal garden with beautiful tombs and historical significance",
            distance: "10 km from city center"
        },
        {
            name: "All Saints Cathedral",
            description: "Beautiful Gothic architecture church built in 1887",
            distance: "6 km from city center"
        },
        {
            name: "Chandrashekhar Azad Park",
            description: "Historic park where freedom fighter Chandrashekhar Azad sacrificed his life",
            distance: "7 km from city center"
        }
    ];

    return (
        <section id="prayagraj" className="section prayagraj">
            <div className="prayagraj-container">
                <h2>ABOUT PRAYAGRAJ</h2>

                <div className="city-description">
                    <p>
                        <strong>Prayagraj</strong>, formerly known as Allahabad, is one of India's most ancient and sacred cities,
                        located in the state of Uttar Pradesh. Known as the "City of Prime Ministers" and "Sangam City,"
                        Prayagraj holds immense historical, cultural, and spiritual significance. The city is famous for
                        hosting the world's largest religious gathering, the <strong>Kumbh Mela</strong>, which attracts
                        millions of pilgrims from around the globe.
                    </p>

                    <p>
                        Strategically located at the confluence of three sacred rivers - Ganga, Yamuna, and the mythical
                        Saraswati - Prayagraj has been a center of learning and culture for centuries. The city is home to
                        the prestigious <strong>University of Allahabad</strong>, one of India's oldest and most renowned
                        educational institutions, established in 1887. With its rich heritage, magnificent architecture,
                        and spiritual atmosphere, Prayagraj offers a perfect blend of tradition and modernity.
                    </p>

                    <p>
                        The city has produced several notable personalities including three Prime Ministers of India -
                        Jawaharlal Nehru, Indira Gandhi, and Rajiv Gandhi. Today, Prayagraj continues to be an important
                        educational, administrative, and cultural hub, making it an ideal location for academic conferences
                        and scholarly gatherings.
                    </p>
                </div>

                <StatsCounter stats={cityStats} />

                <div className="tourist-section">
                    <h3>NEARBY TOURIST ATTRACTIONS</h3>
                    <div className="tourist-grid">
                        {touristPlaces.map((place, index) => (
                            <div key={index} className="tourist-card">
                                <h4>{place.name}</h4>
                                <p className="description">{place.description}</p>
                                <p className="distance">{place.distance}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="visit-info">
                    <h3>PLAN YOUR VISIT</h3>
                    <div className="visit-details">
                        <div className="visit-item">
                            <h4>Best Time to Visit</h4>
                            <p>October to March (Pleasant weather for sightseeing)</p>
                        </div>
                        <div className="visit-item">
                            <h4>How to Reach</h4>
                            <p>Well connected by air, rail, and road. Prayagraj Airport, Junction Railway Station, and NH-2 provide excellent connectivity.</p>
                        </div>
                        <div className="visit-item">
                            <h4>Local Transport</h4>
                            <p>Auto-rickshaws, taxis, buses, and app-based cabs available for city travel.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Prayagraj;
