import {
  Box,
  Center,
  Flex,
  HStack,
  Image,
  Stack,
  VStack,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import Button from './HOC/Button.HOC';
import map from '../../../public/map.png';

const Location = () => {
  return (
    <Center
      flexDir={{ base: 'column-reverse', lg: 'row' }}
      textColor={'attire.2'}
      bg={'white'}
      alignItems={'start'}
    >
      <VStack alignItems='start' m={'2rem'} gap={'1rem'}>
        <Text fontSize='xl'>AREAS WE COVER</Text>
        <Text fontSize='md' maxW={['70vw', '60vw', '40', '20vw']}>
          Currently we only service the E1; E2; E3; E8 & E9 Areas
        </Text>
        <Button varient='primary' title='Book collection' />
      </VStack>
      <Image src={map} maxW={['90vw', '90vw', '50vw']} h={'auto'} />
    </Center>
  );
};

export default Location;
