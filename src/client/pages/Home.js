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
import { useNavigate } from 'react-router-dom';
import heroImage from '../../../public/heroImage.png';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import Location from '../components/Location';

const squareVariants = {
  initial: { scale: 1, transition: { type: 'tween', duration: 0.5 } },
  visible: { scale: 1.25, transition: { duration: 0.5 } },
};

const MotionFlex = motion(Flex);
const names = ['Dry Clean', 'Laundary', 'Tailoring', 'Alteration'];
var i = 1;

function Home() {
  const [newName, setnewName] = useState('Dry Clean');
  const navigate = useNavigate();

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
  const whenClickedFunction1 = () => {
    navigate('/book-collection');
  };
  const whenClickedFunction2 = () => {
    navigate('/contact');
  };

  return (
    <>
      <Center>
        <Box>
          <Box
            width={'100vw'}
            height={['100vw', '80vw', '80vw', '50vw']}
            bgGradient={
              'linear(to-b, rgba(255, 255, 255, 0),rgba(98, 99, 101, 1))'
            }
            position={'absolute'}
            top={'0'}
          ></Box>
          <Image
            src='https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
            alt='Alternate Text'
            width={'100vw'}
            height={['100vw', '80vw', '80vw', '50vw']}
            objectFit={['cover']}
            objectPosition={'center'}
          />
        </Box>
        <VStack position='absolute' top={['15vh', '15vh', '20vh']} w={'100%'}>
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
              title='Book Collection'
              varient='primary'
              functionCallwhenClicked={whenClickedFunction1}
            />
            <Button
              title='Contact Us'
              varient='secondary'
              functionCallwhenClicked={whenClickedFunction2}
            />
          </Stack>
        </VStack>
      </Center>
      <Center>
        <MotionFlex
          initial={{ y: '100vh' }}
          animate={{ y: 0 }}
          animate={controls}
          initial='initial'
          variants={squareVariants}
          className='square'
          width={'80vw'}
          height='fit-content'
          bg={'white'}
          position='absolute'
          top={['45vh', '50vh', '50vh', '60vh']}
          zIndex={'1'}
          pb={['2rem', '4rem']}
        >
          <Services />
        </MotionFlex>
        <Center
          //backgroundColor={'green.200'}
          mt={{ base: '2000px', sm: '2200px', lg: '1400px', xl: '900px' }}
          flexDirection={'column'}
        >
          <Text
            fontWeight={'500'}
            fontSize={['xl', '2xl', '3xl']}
            textColor={'white'}
            mt={['1rem', '2rem']}
            mx={'2rem'}
            textAlign={'center'}
          >
            What people are saying about Us.
          </Text>
          <Text
            fontWeight={'300'}
            fontSize={['sm', 'md', 'lg']}
            textColor={'white'}
            my={['1rem', '2rem']}
            mx={'2rem'}
            textAlign={'center'}
          >
            Dont take our words for it, here's what others have to say.
          </Text>
          <Testimonials />
          <Center>
            <Location />
          </Center>
        </Center>
      </Center>
    </>
  );
}
export default Home;
