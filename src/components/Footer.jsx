import React from 'react'

function Footer() {
  return (
    <div className="footer__display">
        <div className="footer__container">
            <div className="foot__1">
                <h1>Gamex Communauté</h1>
                <p>Gamex Joueurs</p>
                <p>Gamex Groupes</p>
                <p>Gamex Actualités</p>
                <p>Gamex Gramifications</p>
            </div>
            <div className="foot__2">
                <h1>Gamex A propos</h1>
                <p>News</p>
                <p>Equipes</p>
                <p>Partenaires</p>
            </div>
            <div className="foot__3">
                <h1>Rejoins la Communauté</h1>
                <p>Gamex tv</p>
                <p>Gamex live</p>
                <p>Gamex discord</p>
            </div>
        </div>
        <div className="footer__hr">
            <h1>Gamex</h1>
            <p>Design et Développé par <span>Melcode</span>@ 2022</p>
            <p>Tous droits réservés</p>
        </div>
    </div>
  )
}

export default Footer