import {
  Center,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from '@chakra-ui/react';
import React from 'react';

const FAQ = () => {
  return (
    <Center flexDirection={'column'}>
      <Center flexDirection={'column'}>
        <Text
          fontWeight={'500'}
          fontSize={['2xl', '3xl', '5xl']}
          textColor={'attire.2'}
          mt={['1rem', '2rem']}
          mx={'2rem'}
          textAlign={'center'}
        >
          Frequently asked questions
        </Text>
        <Text
          fontSize={['md', 'lg', 'xl']}
          textColor={'attire.2'}
          my={['1rem', '2rem']}
          mx={'2rem'}
          textAlign={'center'}
        >
          Have any questions{' '}
        </Text>
      </Center>
      <Center
        textColor={'attire.2'}
        py={['0rem', '2rem']}
        w={['90vw', '80vw', '60vw']}
        minH={['20rem', '30rem', '40rem']}
      >
        <Tabs
          size={'md'}
          colorScheme={'gray.100'}
          w={['90vw', '70vw', '50vw']}
          minH={['10rem', '20rem', '25rem']}
        >
          <TabList w={'fit-content'} mx={'auto'} borderWidth={'0'} py={'2rem'}>
            <Tab fontSize={['xs', 'lg']}>Orders</Tab>
            <Tab fontSize={['xs', 'lg']}>Service</Tab>
          </TabList>
          <TabPanels p={'0'}>
            <TabPanel p={'0'}>
              <Accordion
                mx={'auto'}
                allowMultiple
                w={['90vw', '70vw', '50vw']}
                minH={['10rem', '20rem', '25rem']}
              >
                <AccordionItem
                  borderColor={'transparent'}
                  borderBottom={'1px solid gray'}
                  pb={'0.5rem'}
                  mb={'1rem'}
                >
                  <h2>
                    <AccordionButton h={'4rem'}>
                      <Box
                        flex='1'
                        textAlign='left'
                        fontSize={['sm', 'md', 'lg']}
                      >
                        Is there a shop where I can drop or collect my item(s)
                        at?
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Text
                      fontWeight={'300'}
                      fontSize={['xs', 'sm', 'md']}
                      fontSize={['xs', 'md']}
                    >
                      Yes, we are located on 34 Station Approach, Br2 7ej,
                      Hayes.
                    </Text>
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem
                  borderColor={'transparent'}
                  borderBottom={'1px solid gray'}
                  pb={'0.5rem'}
                  mb={'1rem'}
                >
                  <h2>
                    <AccordionButton h={'4rem'}>
                      <Box
                        flex='1'
                        textAlign='left'
                        fontSize={['sm', 'md', 'lg']}
                      >
                        What happens once I place an order?
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Text
                      fontWeight={'300'}
                      fontSize={['xs', 'sm', 'md']}
                      fontSize={['xs', 'md']}
                    >
                      A: Once we have received your order we will collect the
                      item(s) from the address at the date & time you have
                      selected. After that we clean your item(s) and drop them
                      back off to you.
                    </Text>
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem
                  borderColor={'transparent'}
                  borderBottom={'1px solid gray'}
                  pb={'0.5rem'}
                  mb={'1rem'}
                >
                  <h2>
                    <AccordionButton h={'4rem'}>
                      <Box
                        flex='1'
                        textAlign='left'
                        fontSize={['sm', 'md', 'lg']}
                      >
                        How do I pay?
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Text
                      fontWeight={'300'}
                      fontSize={['xs', 'sm', 'md']}
                      fontSize={['xs', 'md']}
                    >
                      You can pay when we drop off your item(s)
                    </Text>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </TabPanel>
            <TabPanel>
              <Accordion
                allowMultiple
                w={['90vw', '70vw', '50vw']}
                minH={['10rem', '20rem', '25rem']}
              >
                <AccordionItem
                  borderColor={'transparent'}
                  borderBottom={'1px solid gray'}
                  pb={'0.5rem'}
                  mb={'1rem'}
                >
                  <h2>
                    <AccordionButton h={'4rem'}>
                      <Box
                        flex='1'
                        textAlign='left'
                        fontSize={['sm', 'md', 'lg']}
                      >
                        How long do you require for suede, fur & leather
                        cleaning?
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Text
                      fontWeight={'300'}
                      fontSize={['xs', 'sm', 'md']}
                      fontSize={['xs', 'md']}
                    >
                      We require a minimum of 5 working days to clean suede, fur
                      or leather items
                    </Text>
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem
                  borderColor={'transparent'}
                  borderBottom={'1px solid gray'}
                  pb={'0.5rem'}
                  mb={'1rem'}
                >
                  <h2>
                    <AccordionButton h={'4rem'}>
                      <Box
                        flex='1'
                        textAlign='left'
                        fontSize={['sm', 'md', 'lg']}
                      >
                        How do I let you know any requirements I have for my
                        order/ items?
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Text
                      fontWeight={'300'}
                      fontSize={['xs', 'sm', 'md']}
                      fontSize={['xs', 'md']}
                    >
                      You can let us know in the additional information section
                      when placing your order or you can let us know when we
                      collect your order.
                    </Text>
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem
                  borderColor={'transparent'}
                  borderBottom={'1px solid gray'}
                  pb={'0.5rem'}
                  mb={'1rem'}
                >
                  <h2>
                    <AccordionButton h={'4rem'}>
                      <Box
                        flex='1'
                        textAlign='left'
                        fontSize={['sm', 'md', 'lg']}
                      >
                        Do I need to do anything before my order?
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Text
                      fontWeight={'300'}
                      fontSize={['xs', 'sm', 'md']}
                      fontSize={['xs', 'md']}
                    >
                      Yes, remove any collar stiffeners and empty the pockets of
                      the items.
                    </Text>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Center>
    </Center>
  );
};

export default FAQ;
