import { Center, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import Layout from '../components/HOC/Layout.HOC';

const About = () => {
  return (
    <>
      <Layout
        img='https://images.unsplash.com/photo-1574269910231-bc508bcb68ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1475&q=80'
        title='Terms & Conditions'
      />

      <VStack fontSize={'3xl'}>Hello</VStack>
      <Center w={'full'} padding={'4'} bg={'white'}>
        <VStack
          alignItems={'flex-start'}
          textColor={'attire.2'}
          py={['1rem', '2rem']}
        >
          <Text fontWeight={'600'} fontSize={['md', 'lg', 'xl']}>
            1. Information About us
          </Text>{' '}
          <Text
            textAlign={'start'}
            fontSize={['xs', 'sm', 'md']}
            padding={['1rem', '1rem', '2rem', '3rem']}
            maxW={'60rem'}
          >
            As an upcoming pick up & drop off service in the London area our aim
            is to bring the dry cleaning/ laundry experience to you. From the
            comfort of your home, you will be able to book in a collection at a
            click of a button.
          </Text>
          <Text fontWeight={'600'} fontSize={['md', 'lg', 'xl']}>
            2. Information About The Terms & Condiotions
          </Text>{' '}
          <Text
            textAlign={'start'}
            fontSize={['xs', 'sm', 'md']}
            padding={['1rem', '1rem', '2rem', '3rem']}
            maxW={'60rem'}
          >
            2.1 - By placing an order with us you agree to all the terms and
            conditions
            <br /> 2.2 - Us is reffering to ATTIREDRYCLEANING LTD
          </Text>
          <Text fontWeight={'600'} fontSize={['md', 'lg', 'xl']}>
            3. Payment{' '}
          </Text>{' '}
          <Text
            textAlign={'start'}
            fontSize={['xs', 'sm', 'md']}
            padding={['1rem', '1rem', '2rem', '3rem']}
            maxW={'60rem'}
          >
            3.1 - The customer understands that if an order total is below £20,
            they will be charged a fee to meet the minimum delivery point.
          </Text>
          <Text fontWeight={'600'} fontSize={['md', 'lg', 'xl']}>
            4 . Liability
          </Text>{' '}
          <Text
            textAlign={'start'}
            fontSize={['xs', 'sm', 'md']}
            padding={['1rem', '1rem', '2rem', '3rem']}
            maxW={'60rem'}
          >
            4.1 - He customer is responsible for removing collar stiffeners and
            cuff links from shirts. <br />
            4.2 - He Customer is reponsible for ensuring pockets are empty.
            <br />
            4.3 - The Customer is responsible for ensuring all items given for a
            service wash can be washed and tumble dried.
            <br />
            4.4 - He customers Item's - will be held for no longer than 3
            months; once this period is over the items will be given to charity.{' '}
            <br />
            4.5 - He customer understands that there is a risk in getting thier
            items cleanedand there is a risk of thier items getting damaged, we
            will try our best to make sure this does not occur. We will cover 5
            times the cost of cleaning the item in case of any damage.
          </Text>
          <Text fontWeight={'600'} fontSize={['md', 'lg', 'xl']}>
            5. Complaints
          </Text>{' '}
          <Text
            textAlign={'start'}
            fontSize={['xs', 'sm', 'md']}
            padding={['1rem', '1rem', '2rem', '3rem']}
            maxW={'60rem'}
          >
            5.1 - Complaints must be recieved within 48 hours of delivery.
            Before any claim for compensation can be made the clothes must be
            given a chance to collect the item's - repair the damage and then
            deliver it back. If you have any complaints, please contact us via
            the contact details shown on our Website
          </Text>
          <Text fontWeight={'600'} fontSize={['md', 'lg', 'xl']}>
            6. Prices
          </Text>{' '}
          <Text
            textAlign={'start'}
            fontSize={['xs', 'sm', 'md']}
            padding={['1rem', '1rem', '2rem', '3rem']}
            maxW={'60rem'}
          >
            6.1 - Prices include any applicable VAT or other sales tax unless
            otherwise stated. We reserve the right to change our prices at any
            time.
          </Text>
        </VStack>
      </Center>
    </>
  );
};

export default About;
