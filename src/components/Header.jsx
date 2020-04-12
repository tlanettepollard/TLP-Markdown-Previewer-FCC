import React from 'react';
import './styles/Header.css';
import Jumbotron from 'react-bootstrap/Jumbotron';

const Header = () => (
    <Jumbotron className='jumbotron'>
        <h1 className='header-title text-center'>
            Markdown Previewer
        </h1>
        <hr/>
    </Jumbotron>
);

export default Header;