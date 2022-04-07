import React from 'react';
import expeImg from '../assets/img/experience.png';
import play1 from '../assets/img/play1.jpg';
import play2 from '../assets/img/play2.jpg';
import play3 from '../assets/img/play3.jpg';
import play4 from '../assets/img/play4.jpg';
import play5 from '../assets/img/play5.jpg';
import play6 from '../assets/img/play6.jpg';



function Experience() {

  return (
    <div className="experience__display">
        <div className="experience__one">
            <div className="experience__text">
                <div className="bar"></div>
                <h1>Expérience <br/> pour une <span>team forte</span></h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet voluptatibus dolor error fugiat explicabo necessitatibus, architecto quibusdam pariatur. Perspiciatis iste omnis culpa explicabo vero ullam ex in magni! Nisi, cupiditate!</p>
                <div className="link__global">
                    <a href="#">Cherchez une équipe</a>
                    <a href="#">Intégrez un groupe</a>
                </div>
            </div>

            <div className="experience__img">
                <img src={expeImg} alt="image experience" />
            </div>
        </div>
        <div className="experience__two">
            <div className="experience__text">
                <h3>De vrais joueurs vérifiés chaque jour.</h3>
                <h1>Joueurs actifs</h1>
            </div>
            <div className="experience__profile">
               <div className="expe__img">
                <img src={play1} alt="" />
                <img src={play2} alt="" />
                <img src={play3} alt="" />
                <img src={play4} alt="" />
                <img src={play5} alt="" />
                <img src={play6} alt="" />
               </div>
            </div>
            <a href="#">Voir la communauté des joueurs</a>
        </div>
    </div>
  )
}

export default Experience