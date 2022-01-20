import React, { useCallback, useEffect, useState } from 'react';
import {
  Box,
  Image,
  Center,
  Text,
  VStack,
  Stack,
  Flex,
  HStack,
} from '@chakra-ui/react';
import Button from '../components/HOC/Button.HOC';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const squareVariants = {
  initial: { scale: 1, transition: { type: 'tween', duration: 0.5 } },
  visible: { scale: 1.25, transition: { duration: 0.5 } },
};

const MotionFlex = motion(Flex);
const names = ['Dry Clean', 'Laundary', 'Tailoring', 'Alteration'];
var i = 1;

function Home() {
  const [newName, setnewName] = useState('Dry Clean');

  const controls = useAnimation();
  const { ref, inView, entry } = useInView({
    threshold: 1,
  });

  const shuffle = useCallback(() => {
    const index = i % 4;
    i++;
    setnewName(names[index]);
  }, []);

  //useEffect for text animation
  useEffect(() => {
    const intervalID = setInterval(shuffle, 800);

    return () => clearInterval(intervalID);
  }, [shuffle]);

  //useEffect for transition
  useEffect(() => {
    console.log(inView, entry);
    if (!inView) {
      controls.start('visible');
    }
    if (inView) {
      controls.start('initial');
    }
  }, [entry]);

  //this method will be called in child component when clicked
  const whenClickedFunction = () => {
    window.alert('button pressed');
  };

  return (
    <>
      <Center>
        <Box
          _after={{
            content: `''`,
            position: `absolute`,
            left: `0`,
            top: `0`,
            width: `100%`,
            height: `100%`,
            background: `linear-gradient(rgba(255, 255, 255, 0),rgba(98, 99, 101, 1))`,
          }}
        >
          <Image
            src='https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
            alt='Alternate Text'
            width={'100vw'}
            height={['100vw', '50vw']}
            objectFit={['cover']}
            objectPosition={'center'}
          />
        </Box>
        <VStack position='absolute' top={'25%'} w={'100%'}>
          <Text
            color={'attire.1'}
            fontSize={['5xl', '6xl', '7xl', '8xl']}
            fontWeight='bold'
            left={'0'}
            textAlign={'center'}
            letterSpacing={'tight'}
          >
            {newName}
          </Text>
          <Stack direction={['column', 'row']} my={[4, 8]} ref={ref}>
            <Button
              title='click me'
              varient='primary'
              functionCallwhenClicked={whenClickedFunction}
            />
            <Button title='click me 2' varient='secondary' />
          </Stack>
        </VStack>
      </Center>
      <Center border={'2px solid red'}>
        <MotionFlex
          initial={{ y: '100vh' }}
          animate={{ y: 0 }}
          animate={controls}
          initial='initial'
          variants={squareVariants}
          className='square'
          width={['80vw', '80vw']}
          height={'1000px'}
          bg={'white'}
          position='absolute'
          top={['45vh', '60vh']}
        >
          <Box width={''} />
        </MotionFlex>
      </Center>
    </>
  );
}
export default Home;
