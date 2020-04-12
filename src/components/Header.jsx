import React from 'react';
import './styles/Header.css';
import Jumbotron from 'react-bootstrap/Jumbotron';

export const Header = () => (
  <Jumbotron fluid className="jumbotron">
    <h1 className="header-title text-center">Markdown Previewer</h1>
    <hr />
  </Jumbotron>
);

