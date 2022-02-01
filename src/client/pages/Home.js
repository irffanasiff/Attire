import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
  Box,
  Image,
  Center,
  Text,
  VStack,
  Stack,
  Flex,
} from '@chakra-ui/react';
import Button from '../components/HOC/Button.HOC';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';
import heroImage from '../../../public/Hero.jpg';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import Location from '../components/Location';
import FAQ from '../components/FAQ';
import Offers from '../components/Offers';

const squareVariants = {
  initial: { scale: 1, transition: { type: 'tween', duration: 0.4 } },
  visible: { scale: 1.24, transition: { duration: 0.4 } },
};

const MotionFlex = motion(Flex);
const names = ['Dry Cleaning', 'Shirt Service', 'Repairs', 'Alterations'];
var i = 1;

function Home() {
  const [newName, setnewName] = useState('Dry Clean');
  const [dynamicHeight, setDynamicHeight] = useState(boxHeight + 'px');
  const navigate = useNavigate();

  const boxHeight = useRef();

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
    const newHeight = boxHeight.current.clientHeight;
    setDynamicHeight(newHeight + 'px');

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
      <Offers />

      <Center>
        <Box>
          <Box
            width={'100%'}
            height={['100vw', '80vw', '80vw', '50vw']}
            bgGradient={
              'linear(to-b, rgba(255, 255, 255, 0),rgba(98, 99, 101, 1))'
            }
            position={'absolute'}
            top={'0'}
          ></Box>
          <Image
            src={heroImage}
            alt='Alternate Text'
            width={'100vw'}
            height={['100vw', '80vw', '80vw', '50vw']}
            objectFit={['cover']}
            objectPosition={'center'}
          />
        </Box>
        <VStack position='absolute' top={['15vh', '15vh', '20vh']} w={'100%'}>
          <Text
            ref={ref}
            color={'attire.1'}
            fontSize={['5xl', '6xl', '7xl', '8xl']}
            fontWeight='bold'
            left={'0'}
            textAlign={'center'}
            letterSpacing={'tight'}
          >
            {newName}
          </Text>
          <Stack direction={['column', 'row']} my={[4, 8]}>
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
          ref={boxHeight}
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
          bg='white'
          mt={`calc(${dynamicHeight}*0.7)`}
          w={'100%'}
          flexDirection={'column'}
          pt={{ base: '800px', sm: '900px', md: '800px', xl: '30px' }}
        >
          <Text
            fontWeight={'500'}
            fontSize={['2xl', '3xl', '5xl']}
            textColor={'attire.2'}
            mt={['1rem', '2rem']}
            mx={'2rem'}
            textAlign={'center'}
          >
            Testimonials
          </Text>
          <Text
            fontWeight={'300'}
            fontSize={['md', 'lg', 'xl']}
            textColor={'attire.2'}
            my={['1rem', '2rem']}
            mx={'2rem'}
            textAlign={'center'}
          >
            Dont take our words for it, here's what others have to say.
          </Text>
          <Testimonials />
          <Center>
            <FAQ />
          </Center>
          <Center>
            <Location />
          </Center>
        </Center>
      </Center>
    </>
  );
}
export default Home;
