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
            <Tab fontSize={['xs', 'lg']}>Dry Clean</Tab>
            <Tab fontSize={['xs', 'lg']}>Laundary</Tab>
            <Tab fontSize={['xs', 'lg']}>Home Service</Tab>
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
                        Section 2 title
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
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </Text>
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem
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
                        What makes you different than other laundry service
                        providers in the area?
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
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </Text>
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem
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
                        Section 2 title
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
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
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
                        What makes you different than other laundry service
                        providers in the area?
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
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </Text>
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem
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
                        Section 2 title
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
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
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
                        What makes you different than other laundry service
                        providers in the area?
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
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </Text>
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem
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
                        What makes you different than other laundry service
                        providers in the area?
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
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </Text>
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem
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
                        Section 2 title
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
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
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
