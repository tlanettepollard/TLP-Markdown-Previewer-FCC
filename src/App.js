import React from 'react';
import './App.css';
import './index.css';
import Container from 'react-bootstrap/Container'

import  {Header}  from '../src/components/Header';
import {Footer} from '../src/components/Footer';




const App = () => {
  return (
    <div className="App">
      <Container fluid>
        <Header />
        
        <Footer />
      </Container>
    </div>
  );
}

export default App;
