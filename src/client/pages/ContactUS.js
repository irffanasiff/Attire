import { Center, Flex } from '@chakra-ui/react';
import React from 'react';
import Layout from '../components/HOC/Layout.HOC';

const ContactUS = () => {
  return (
    <>
      <Layout
        img='https://images.unsplash.com/photo-1603252109360-909baaf261c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
        title='Contact Us'
      />
      <Center
        w={'full'}
        h={'900px'}
        bg={'white'}
        position={'absolute'}
        top={['30vh', '50vh']}
        zIndex={2}
      ></Center>
    </>
  );
};

export default ContactUS;
