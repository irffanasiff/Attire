import { Box, SimpleGrid, Stack } from '@chakra-ui/react';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { FooterHeading } from './FooterHeading';

export const LinkGrid = (props) => (
  <SimpleGrid columns={2} {...props} textColor={'white'}>
    <Box w='fit-content' mx={'auto'}>
      <FooterHeading textColor='white' mb='4' w='fit-content'>
        Service
      </FooterHeading>
      <Stack w='fit-content'>
        <Link fontSize={{ base: 'sm', xl: 'xl' }} to='/price-list'>
          Dry Cleaning
        </Link>
        <Link fontSize={{ base: 'sm', xl: 'xl' }} to='/price-list'>
          Shirt Service
        </Link>
        <Link fontSize={{ base: 'sm', xl: 'xl' }} to='/price-list'>
          Wash & Press
        </Link>
        <Link fontSize={{ base: 'sm', xl: 'xl' }} to='/price-list'>
          Ironing{' '}
        </Link>
        <Link fontSize={{ base: 'sm', xl: 'xl' }} to='/price-list'>
          Household cleaning
        </Link>
        <Link fontSize={{ base: 'sm', xl: 'xl' }} to='/price-list'>
          Repairs & Alterations
        </Link>
      </Stack>
    </Box>
    <Box mx={'auto'} w='fit-content'>
      <FooterHeading w='fit-content' textColor='white' mb='4'>
        About
      </FooterHeading>
      <Stack w='fit-content'>
        <Link fontSize={{ base: 'sm', xl: 'xl' }} to='/about'>
          About us
        </Link>
        <Link fontSize={{ base: 'sm', xl: 'xl' }} to='/contact'>
          Contact
        </Link>
        <Link fontSize={{ base: 'sm', xl: 'xl' }} to='/terms'>
          Terms
        </Link>
      </Stack>
    </Box>
  </SimpleGrid>
);
