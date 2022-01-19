import { extendTheme } from '@chakra-ui/react';
//import '@fontsource/poppins';

const theme = extendTheme({
  colors: {
    attire: {
      1: '#ffffff',
      2: '#626365',
      3: '#929292',
      4: '#C7EDE4',
      5: '#000000',
    },
  },
  fonts: {
    body: 'Poppins',
  },
  styles: {
    global: {
      'html, body': {
        background: '#626365',
      },
    },
  },
});

export default theme;
