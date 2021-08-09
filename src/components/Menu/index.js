import React from 'react';
import mtvSimpleLogo from './mtv-simple-logo.png';
import './styles.scss';

const Menu = () => (
  <nav className="menu">
    <ul className="menu__list">
      <li className="menu__item">Acceuil</li>
      <li className="menu__item">Méthode</li>
      <li className="menu__item">Accompagnements</li>
      <img className="menu__logo" src={mtvSimpleLogo} alt="Logo Manage ta vie" />
      <li className="menu__item">À propos</li>
      <li className="menu__item">Podcast</li>
      <li className="menu__item">Contact</li>
    </ul>
  </nav>
);

export default Menu;
