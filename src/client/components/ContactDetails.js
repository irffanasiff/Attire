import { HStack, Icon, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { BsTelephone } from 'react-icons/bs';
import { MdAlternateEmail } from 'react-icons/md';

const ContactDetails = () => {
  return (
    <VStack
      w={['80vw', '60vw']}
      alignItems={'flex-start'}
      align={'start'}
      alignSelf={'center'}
    >
      <HStack>
        <HiOutlineLocationMarker color='white' />
        <Text
          textColor={'white'}
          fontSize={{ base: 'xs', md: 'md' }}
          fontWeight={'400'}
        >
          34 Station Approach, BR2 7EJ, Hayes
        </Text>
      </HStack>
      <HStack>
        <BsTelephone color='white' />
        <Text
          textColor={'white'}
          fontSize={{ base: 'xs', md: 'md' }}
          fontWeight={'400'}
        >
          02084622165
        </Text>
      </HStack>
      <HStack>
        <MdAlternateEmail color='white' />
        <Text
          textColor={'white'}
          fontSize={{ base: 'xs', md: 'md' }}
          fontWeight={'400'}
        >
          Info@attiredryclean.com
        </Text>
      </HStack>
    </VStack>
  );
};

export default ContactDetails;
