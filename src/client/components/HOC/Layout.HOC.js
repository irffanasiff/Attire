import React from 'react';
import { Box, Image, Center, Text, VStack, Stack } from '@chakra-ui/react';

const Layout = (props) => {
  return (
    <Center>
      <Box
        _after={{
          content: `''`,
          position: `absolute`,
          left: `0`,
          top: `0`,
          width: `100%`,
          height: `100%`,
          background: `linear-gradient(rgba(255, 255, 255, 0),rgba(98, 99, 101, 0.2))`,
        }}
      >
        <Image
          src={props.img}
          alt={props.title}
          width={'100vw'}
          height={['30vh', '50vh']}
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
