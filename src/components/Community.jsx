import React from 'react';
import commImg1 from '../assets/img/comm.png';
import commImg2 from '../assets/img/comm2.png';

function Community() {
  return (
    <div className="comm__display">
        <div className="comm__section1">
            <div className="comm__img">
                <img src={commImg1} alt="" />
            </div>
            <div className="comm__text">
                <h3>Pas de pause, appuie sur play</h3>
                <h1><span>Découvrez</span> votre <br /> plein potentiel</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut at voluptatem delectus facere. Iusto, asperiores nobis cupiditate necessitatibus totam nostrum quia reiciendis facere aperiam ad nihil, et accusamus impedit sint.</p>
                <a href="#">Entraînement des skills</a>
            </div>
        </div>

        <div className="comm__section2">

            <div className="comm__text">
                <h3>Gramification</h3>
                <h1><span>Être</span> au top <br /> pour la victoire</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut at voluptatem delectus facere. Iusto, asperiores nobis cupiditate necessitatibus totam nostrum quia reiciendis facere aperiam ad nihil, et accusamus impedit sint.</p>
                <a href="#">Entraînement des skills</a>
            </div>
            <div className="comm__img2">
                <img src={commImg2} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Community