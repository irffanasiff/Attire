import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import { Flex, ChakraProvider } from '@chakra-ui/react';
import theme from './Theme';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Flex
        as='header'
        position={'absolute'}
        width={'100vw'}
        top={'0'}
        alignItems={'center'}
        justifyContent={'center'}
        zIndex={'1'}
      >
        <Navbar />
      </Flex>
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='/home' element={<Navigate replace to='/' />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact-us' element={<Contact />} /> */}
      </Routes>
      {/* <Footer /> */}
    </ChakraProvider>
  );
}

export default App;
