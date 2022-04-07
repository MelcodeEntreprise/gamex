import React from 'react';
import homeImg from '../assets/img/home.jpg';

function Home() {
  return (
    <div className="home__display">
        <div className="home__container">
            <img src={homeImg} alt="image home page" />
            <div className="overlay__home">
                <div className="home__heading">
                   <div className="home__text">
                    <h3>Gagnez un pack shadow</h3>
                    <h1>Rencontrez des milliers <br/> de joueurs à travers le monde.</h1>
                    <p className="para__home">L'expérience sera inoubliable, ne manquez pas cette occasion de participer à notre tournoi</p>
                   </div>
                   <div className="home__button">
                       <a href="#" className="button__particip">Rejoignez-nous</a>
                       <a href="#" className="button__more">Nos offres</a>
                   </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home