import React from 'react';
import { Box, Image, Center, Text, VStack, Stack } from '@chakra-ui/react';

const Layout = (props) => {
  return (
    <Center>
      <Box>
        <Box
          width={'100vw'}
          height={['30vh', '40vh', '40vh', '40vh']}
          bgGradient={'linear(to-b, rgba(255, 255, 255, 0),rgba(0,0,0))'}
          position={'absolute'}
          top={'0'}
        />
        <Image
          src={props.img}
          alt={props.title}
          width={'100vw'}
          height={['30vh', '40vh', '40vh', '40vh']}
          objectFit={'cover'}
          objectPosition={'center'}
        />
      </Box>
      <VStack position='absolute' top={['13vh', '23vh', '23vh']} w={'100%'}>
        <Text
          color={'attire.1'}
          fontSize={['4xl', '5xl', '6xl', '7xl']}
          fontWeight='bold'
          lineHeight={'10'}
          left={'0'}
          textAlign={'center'}
          letterSpacing={'tight'}
        >
          {props.title}
        </Text>
      </VStack>
    </Center>
  );
};

export default Layout;
