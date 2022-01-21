import { Box, Link, SimpleGrid, Stack } from '@chakra-ui/react';
import * as React from 'react';
import { FooterHeading } from './FooterHeading';

export const LinkGrid = (props) => (
  <SimpleGrid columns={2} {...props} textColor={'white'}>
    <Box w='fit-content' mx={'auto'}>
      <FooterHeading textColor='white' mb='4' w='fit-content'>
        Service
      </FooterHeading>
      <Stack w='fit-content'>
        <Link fontSize={{ base: 'sm', xl: 'xl' }}>Pricing</Link>
        <Link fontSize={{ base: 'sm', xl: 'xl' }}>Book Service</Link>
      </Stack>
    </Box>
    <Box mx={'auto'} w='fit-content'>
      <FooterHeading w='fit-content' textColor='white' mb='4'>
        About
      </FooterHeading>
      <Stack w='fit-content'>
        <Link fontSize={{ base: 'sm', xl: 'xl' }}>About us</Link>
        <Link fontSize={{ base: 'sm', xl: 'xl' }}>Contact</Link>
        <Link fontSize={{ base: 'sm', xl: 'xl' }}>Terms</Link>
      </Stack>
    </Box>
  </SimpleGrid>
);
