import {
  Center,
  Flex,
  Text,
  VStack,
  HStack,
  Stack,
  UnorderedList,
  ListItem,
} from '@chakra-ui/react';
import React from 'react';
import Layout from '../components/HOC/Layout.HOC';
import { ratelistData } from './pricelistData';
const PriceList = () => {
  console.log(ratelistData);
  return (
    <>
      <Layout
        img='https://images.unsplash.com/photo-1629582626803-26d116398eea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80'
        title='Price List'
      />
      <Center
        w={'full'}
        padding={'4'}
        backgroundColor={'attire.1'}
        zIndex={'7'}
        position={'absolute'}
      >
        <Text fontWeight={'600'} fontSize={['lg', 'xl', '3xl']}>
          List
        </Text>
        <VStack>
          <UnorderedList>
            {ratelistData.map((data) => {
              <ListItem key={data.id}>{data.title}</ListItem>;
            })}
          </UnorderedList>
        </VStack>
      </Center>
    </>
  );
};

export default PriceList;
