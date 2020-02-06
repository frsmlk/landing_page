import React from 'react';
import logo from './logo.png';
import { Form, Label, FormGroup, Input } from 'reactstrap';
import './App.css';
import instagram from './assets/instagram.png';
import gmail from './assets/gmail.png';
import whatsapp from './assets/whatsapp.png';
import GlobalFonts from './fonts/fonts';



function App() {
  return (
    <div className="App" style={{ backgroundColor: '#f5f5ed' }}>
      <header className="App-header" >
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          We have served 5140 meals to 91 charity homes.
        </p>

        <p>
          Our website is under construction.
       </p>



      </header>


      <div class="flex-grid">
        <div class="col">
          <a href='https://www.instagram.com/ao.socialgiving'>
            <img className="img" alt="instagram" src={instagram} />
          </a>
          <p>ao.socialgiving</p>
        </div>
        <div class="col">
          <a href='http://www.wasap.my/+60186660826'>
            <img className="img" alt="whatsapp" src={whatsapp} />
          </a>
          <p>018 666 826</p>
        </div>
        <div class="col"> <a href='https://www.gmail.com'>
          <img className="img" alt="gmail" src={gmail} />
        </a>
          <p>hello@arisoffering.com</p>
        </div>

      </div>

      {/* <Container style={{ backgroundColor: '#f5f5ed' }}>
        <Row className="Icons">
          <Col xs='6' sm='4'>instagram</Col>
          <Col xs='6' sm='4'>whatsaoo</Col>
          <Col xs='6' sm='4'>email</Col>
        </Row>
      </Container> */}


    </div >

  );
}

export default App;
