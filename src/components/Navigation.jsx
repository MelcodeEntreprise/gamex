import React, { useState } from 'react';
import { FaSignInAlt, FaSignOutAlt} from 'react-icons/fa';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

function Navigation() {

    const [toggleMenu, setToggleMenu] = useState(false);

    const Menu = () => (
        <ul className="nav__menu">
            <li><a href="#gram">Evènements</a></li>
            <li><a href="#gram">Tournoi</a></li>
            <li><a href="#gram">Blog</a></li>
            <li><a href="#gram">Contact</a></li>
        </ul>
    )



  return (
    <div className="navigation__display">
        <div className="navigation__container">
            <div className="nav">
                <a href="#logo" className="nav__logo">Gamex</a>

                <Menu />
                <div className="nav__button">
                    <a href="#register" className="button__custom"> <FaSignOutAlt /> S'enregistrer</a>
                </div>

                <div className="toggle__menu">
                    {toggleMenu 
                        ? <RiCloseLine color="#de2e4b" size={27} onClick={() => setToggleMenu(false)} />
                        : <RiMenu3Line color="#de2e4b" size={27} onClick={() => setToggleMenu(true)} />
                    }
                    {toggleMenu && (
                        <div className="toggle__menu__container scale-up-center">
                            <div className="toggle__menu__list">
                                <Menu />
                                <div className="nav__button">
                                    <a className="button__custom"> <FaSignOutAlt /> S'enregistrer</a>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navigation