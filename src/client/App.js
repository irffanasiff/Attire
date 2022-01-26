import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Box, ChakraProvider } from '@chakra-ui/react';

import Navbar from './components/Navbar';
import { Footer } from './components/Footer/Footer';
import Home from './pages/Home';
import theme from './Theme';
import About from './pages/About';
import ContactUS from './pages/ContactUS';
import PriceList from './pages/PriceList';
import BookCollection from './pages/BookCollection';
import Terms from './pages/Terms';
import NotFound from './pages/NotFound';
import Offers from './components/Offers';

export const newTheme = {
  ...theme,
  shadows: { ...theme.shadows, outline: '0 !important' },
  colors: { ...theme.colors, primary: '#ffffff' },
};

function App() {
  return (
    <ChakraProvider theme={newTheme}>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Navigate replace to='/' />} />
        <Route path='/about' element={<About />} />
        <Route path='/price-list' element={<PriceList />} />
        <Route path='/contact' element={<ContactUS />} />
        <Route path='/book-collection' element={<BookCollection />} />
        <Route path='/terms' element={<Terms />} />
        <Route component={<NotFound />} />
      </Routes>
      <Footer />
    </ChakraProvider>
  );
}

export default App;
