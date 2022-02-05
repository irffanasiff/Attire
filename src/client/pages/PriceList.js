import {
  Center,
  Flex,
  Text,
  VStack,
  HStack,
  Stack,
  UnorderedList,
  ListItem,
  AccordionButton,
  AccordionItem,
  AccordionIcon,
  Box,
  AccordionPanel,
  Accordion,
  Icon,
  Image,
  Heading,
  List,
  OrderedList,
} from '@chakra-ui/react';
import React from 'react';
import Layout from '../components/HOC/Layout.HOC';
import { ratelistData } from './pricelistData';
import { motion } from 'framer-motion';
import { Offers as offersData } from './Offers';

const motionHStack = motion(HStack);

const PriceList = () => {
  return (
    <>
      <Layout
        img='https://www.rd.com/wp-content/uploads/2021/09/GettyImages-1181334518-MLedit.jpg'
        title='Price List & Offers'
      />
      <Center
        w={'full'}
        padding={'4'}
        backgroundColor={'attire.1'}
        pb={'10rem'}
      >
        <VStack textColor={'black'} alignItems={'center'}>
          <Text
            fontWeight={'600'}
            fontSize={['xl', '2xl', '4xl']}
            w={'full'}
            my={['0', '1rem', '3rem']}
            textAlign={'center'}
          >
            Offers
          </Text>
          <List w={'100%'}>
            {offersData.map((item) => (
              <ListItem
                _hover={{
                  transform: 'scale(1.02)',
                  transition: '0.2s',
                }}
                border={'1px solid black'}
                w={'100%'}
                p={'2rem'}
                mb={'1rem'}
                alignItems={'center'}
                flex={'1'}
                flexDir={'column'}
              >
                <HStack justify={'space-between'}>
                  <Text fontSize={['lg', 'lg', 'xl']} fontWeight={'500'}>
                    {item.title}
                  </Text>
                  <Text textColor={'gray.800'} fontSize={['xl', '2xl']}>
                    {item.price}
                  </Text>
                </HStack>
              </ListItem>
            ))}
          </List>
          <Text
            fontWeight={'600'}
            fontSize={['xl', '2xl', '4xl']}
            w={'full'}
            my={['0', '1rem', '3rem']}
            textAlign={'center'}
            pt={'5rem'}
          >
            Price List
          </Text>
          <Accordion
            allowMultiple
            allowToggle
            w={['90vw', '70vw', '50vw']}
            alignItems={'center'}
          >
            {ratelistData.map((item) => (
              <AccordionItem
                w={['88vw', '70vw', '50vw']}
                my={['1.5rem', '2rem', '2rem']}
                borderWidth={'0'}
                mx={'auto'}
                flex={'1'}
                justifyContent={'space-between'}
              >
                <AccordionButton
                  w={'100%'}
                  borderBottom={['0', '1px solid gray']}
                  py={['0', '1rem']}
                  mx={'auto'}
                  flex={'1'}
                  justifyContent={'space-between'}
                  alignItems={'center'}
                >
                  <HStack>
                    <Center
                      w={['1rem', '1.5rem', '2rem']}
                      h={['1rem', '1.5rem', '2rem']}
                      mr={['0', '1rem', '2rem']}
                    >
                      <Image src={item.icon} />
                    </Center>
                    <Text textAlign='left' fontSize={['sm', 'lg', 'xl']}>
                      {item.title}
                    </Text>
                  </HStack>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel mx={'0'}>
                  {item.items.map((isItemlist) => (
                    <UnorderedList>
                      {isItemlist.categoryItems ? (
                        <Accordion allowMultiple allowToggle>
                          <AccordionItem
                            w={'100%'}
                            mx={'auto'}
                            p='0'
                            flex={'1'}
                            justifyContent={'space-between'}
                            border={'0'}
                          >
                            <AccordionButton
                              w='100%'
                              mx={'auto'}
                              flex={'1'}
                              my={['2', '1rem']}
                              borderLeft='0.3px solid gray'
                              justifyContent={'space-between'}
                              alignItems={'center'}
                            >
                              <Text
                                fontSize={['sm', 'lg']}
                                fontWeight={['light', 'normal']}
                              >
                                {isItemlist.categoryTitle}
                              </Text>
                              <AccordionIcon />
                            </AccordionButton>
                            {isItemlist.categoryItems.map((subList) => (
                              <AccordionPanel
                                padding={'0'}
                                my={['1rem', '1.5rem']}
                                mx={['0', '1rem']}
                              >
                                <HStack
                                  justifyContent={'space-between'}
                                  borderBottom='0.3px solid gray'
                                  pb={['0.5rem', '1rem']}
                                  mx={'1rem'}
                                >
                                  <Heading
                                    fontSize={['xs', 'lg']}
                                    fontWeight={'light'}
                                    isTruncated
                                  >
                                    {subList.name}
                                  </Heading>
                                  <Text
                                    fontSize={['xs', 'lg']}
                                    fontWeight={'light'}
                                    fontStyle={'italic'}
                                  >
                                    {subList.price}
                                  </Text>
                                </HStack>
                              </AccordionPanel>
                            ))}
                          </AccordionItem>
                        </Accordion>
                      ) : (
                        <ListItem listStyleType={'none'} my={['1rem', '2rem']}>
                          <HStack
                            justifyContent={'space-between'}
                            borderBottom='0.3px solid gray'
                            pb={['0.5rem', '1rem']}
                            mx={['0', '2rem']}
                          >
                            <Heading
                              fontSize={['xs', 'lg']}
                              fontWeight={'normal'}
                              isTruncated
                            >
                              {isItemlist.name}
                            </Heading>
                            <Text
                              fontSize={['xs', 'lg']}
                              fontWeight={'light'}
                              fontStyle={'italic'}
                            >
                              {isItemlist.price}
                            </Text>
                          </HStack>
                        </ListItem>
                      )}
                    </UnorderedList>
                  ))}
                </AccordionPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </VStack>
      </Center>
    </>
  );
};

export default PriceList;
