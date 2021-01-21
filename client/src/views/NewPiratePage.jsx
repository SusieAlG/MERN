import React from 'react';
import { Link } from '@reach/router';
import '../components/Body.css';
import PirateForm from '../components/PirateForm';

function NewPiratePage() {
    const newPirate = {
        name: "",
        imageUrl: "",
        treasureChests: "",
        catchPhrase: "",
        crewPosition: "",
        pegLeg: true,
        eyePatch: true,
        hookHand: true
    };

    return (
        <div className="main-container">
            <header className="main-header">
                <h1>ADD PIRATE</h1>
                <button className="header-btn"><Link to="/pirates" >Crew board</Link></button>
            </header>
            <div className="main-body">
                <PirateForm
                    pirate={newPirate}
                    method="post"
                    url="http://localhost:8000/api/pirates"
                />
            </div>
        </div>
    );
}

export default NewPiratePage;