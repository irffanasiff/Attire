import { Center, Image, VStack, Text } from '@chakra-ui/react';
import React from 'react';
import Button from './HOC/Button.HOC';
import map from '../../../public/map.jpg';
import { Link } from 'react-router-dom';

const Location = () => {
  return (
    <VStack my={'5rem'}>
      <Center flexDirection={'column'} mb={['2rem', '3rem']}>
        <Text
          fontWeight={'500'}
          fontSize={['2xl', '3xl', '5xl']}
          textColor={'attire.2'}
          mt={['1rem', '2rem']}
          mx={'2rem'}
          textAlign={'center'}
        >
          Our Location
        </Text>
      </Center>
      <Center
        flexDir={{ base: 'column-reverse', lg: 'row' }}
        textColor={'attire.2'}
        bg={'white'}
        alignItems={'start'}
        w={{ base: '', lg: '' }}
        border={'2px solid gray'}
        my={'5rem'}
      >
        <VStack
          alignItems='start'
          m={'2rem'}
          gap={'1rem'}
          py={['0rem', '1rem', '4rem']}
        >
          <Text fontSize='xl'>AREAS WE COVER</Text>
          <Text
            fontSize='md'
            maxW={['70vw', '60vw', '40vw', '20vw']}
            fontWeight={'400'}
          >
            We Provide Our Collection & Delivery Service In All of Bromley and
            Some Areas in Croydon and Lewisham. Get in contact for more
            information.
          </Text>
          <Link to='/book-collection'>
            <Button varient='primary' title='Book collection' />
          </Link>
        </VStack>
        <Image src={map} maxW={['90vw', '90vw', '50vw']} h={'auto'} />
      </Center>
    </VStack>
  );
};

export default Location;
