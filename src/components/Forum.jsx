import React from 'react';
import forumImg1 from '../assets/img/forum.jpg';
import forumImg2 from '../assets/img/forum2.jpg';


function Forum() {
  return (
    <div className="forum__display">
        <div className="forum__contain">
            <div className="forum__base">
                <img src={forumImg1} alt="" />
                <div className="forum__overlay1">
                    <div className="forum__text1">
                        <h1>Rejoindre une base</h1>
                        <p>Lorem ipsum dolor sit amet consectetur</p>
                        <a href="#">Rejoingnez votre de base</a>
                    </div>
                </div>
            </div>
            <div className="forum__community">
                <img src={forumImg2} alt="" />
                <div className="forum__overlay2">
                    <div className="forum__text2">
                        <h1>Forum de la communauté</h1>
                        <p>Lorem ipsum dolor sit amet consectetur</p>
                        <a href="#">Intégrez les forums</a>
                    </div>
                </div>
            </div>
        </div>
        <div className="forum__band">
            <div className="forum__sub">
                <div className="forum__faq">
                    <h1>Êtes-vous prêt pour commencer ?</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className="forum__link">
                    <a href="#">S'enregistrez</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Forum