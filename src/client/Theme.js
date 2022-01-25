import { extendTheme } from '@chakra-ui/react';
//import '@fontsource/poppins';

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};
const theme = extendTheme({
  config,
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
        // fontFamily: 'sans',
        background: '#626365',
        color: '#626365',
      },
    },
  },
});

export default theme;
