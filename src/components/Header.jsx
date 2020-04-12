import React from 'react';
import './styles/Header.css';
import Jumbotron from 'react-bootstrap/Jumbotron';

export const Header = () => (
  <Jumbotron fluid className="jumbotron">
    <h1 className="header-title text-center">
        <img src='../../public/tribalrebelcowlogo.png' alt="Rebel-Cow Logo" />
        Markdown Previewer</h1>
    <hr />
  </Jumbotron>
);

