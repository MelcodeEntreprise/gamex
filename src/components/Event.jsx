import React from 'react';
import event1 from '../assets/img/event1.jpg';
import event2 from '../assets/img/event2.jpg';
import event3 from '../assets/img/event3.jpg';
import event4 from '../assets/img/event4.jpg';

function Event() {
  return (
    <div className="event__display">
        <div className="event__sub">
            <div className="event__container">
                <h3>N'oubliez pas les scènes de jeu</h3>
                <h1>Bienvenue aux évènements</h1>
            </div>
        </div>

        <div className="event__disposition">
            <div className="event__card">
                <img src={event1} alt="" />
                <div className="event__text">
                    <p>26 Avril 2022 - 17:00 GMT</p>
                    <h3>Saison WAR #1</h3>
                </div>
            </div>
             <div className="event__card">
                <img src={event2} alt="" />
                <div className="event__text">
                    <p>17 Juin 2022 - 17:00 GMT</p>
                    <h3>Interiew Top Joueurs</h3>
                </div>
            </div>
            <div className="event__card">
                <img src={event3} alt="" />
                <div className="event__text">
                    <p>02 Septembre 2022 - 17:00 GMT</p>
                    <h3>Battle Champ</h3>
                </div>
            </div>
            <div className="event__card">
                <img src={event4} alt="" />
                <div className="event__text">
                    <p>17 Octobre 2022 - 17:00 GMT</p>
                    <h3>Salon Mythique</h3>
                </div>
            </div>
        </div>

        <div className="event__end">
            <div className="event__end__text">
                <h3>N'oubliez pas l'entrainement</h3>
                <h1>Participez à une partie <br/>et amusez-vous</h1>
            </div>
            <div className="event__end__link">
                <a href="#">Voir les évènéments futurs</a>
            </div>
        </div>
    </div>
  )
}

export default Event