import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import { Flex, ChakraProvider } from '@chakra-ui/react';
import theme from './Theme';
import About from './pages/About';
import ContactUS from './pages/ContactUS';
import PriceList from './pages/PriceList';
import BookCollection from './pages/BookCollection';
import Terms from './pages/Terms';

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
        zIndex={100}
      >
        <Navbar />
      </Flex>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/price-list' element={<PriceList />} />
        <Route path='/contact' element={<ContactUS />} />
        <Route path='/book-collection' element={<BookCollection />} />
        <Route path='/terms' element={<Terms />} />

        {/* <Route path='/home' element={<Navigate replace to='/' />} />
        <Route path='/contact-us' element={<Contact />} /> */}
      </Routes>
      {/* <Footer /> */}
    </ChakraProvider>
  );
}

export default App;
