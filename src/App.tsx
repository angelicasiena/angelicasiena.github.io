import React from 'react';
import { Flex, Text } from '@chakra-ui/react';
import Header from './components/header';
import logo from './siena-logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header show-logo='false'></Header>
      <header className="home-page">
        <img src={logo} className="App-logo" alt="logo" />
        <Flex>
          <Text pr={10} color="#F4EEEE"><h1>Siena</h1></Text>
          <Text color="#51DACF"><h1>Abaya</h1></Text>
        </Flex>
      </header>
    </div>
  );
}

export default App;
