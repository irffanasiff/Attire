import { Flex, Box, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MdClear } from 'react-icons/md';
import { Link } from 'react-router-dom';
const MotionFlex = motion(Flex);

const Offers = () => {
  const [showOffers, setShowOffers] = useState(true);
  const onClickHandler = () => {
    console.log(showOffers);
  };

  if (showOffers) {
    return (
      <AnimatePresence>
        <MotionFlex
          key={'x'}
          initial={{ y: -500 }}
          animate={{ y: 18 }}
          exit={{ scale: 0.8 }}
          transition={{ ease: 'easeOut', duration: 1.5, delay: 2 }}
          bg={'attire.1'}
          position={'fixed'}
          zIndex={'200'}
          flexDirection={'row'}
          alignItems={'center'}
          justifyContent={'space-between'}
          w={'92%'}
          h={['5rem', '5rem', '4rem']}
          px={['1rem', '1rem', '2rem']}
          mx={'4vw'}
          shadow={'lg'}
          onTouchMove={() => setShowOffers(false)}
        >
          <Text textColor={'black'} p={'1rem'} mx={'auto'} textAlign={'center'}>
            <Link to='/price-list'>
              Special Offer -
              <Box as='span' fontWeight={'600'}>
                {' '}
                10% off{' '}
              </Box>
              on all Bedsets (Wash & Press)
            </Link>
          </Text>
          <Box as='button' bg={'white'} onClick={() => setShowOffers(false)}>
            <MdClear size={20} />
          </Box>
        </MotionFlex>
      </AnimatePresence>
    );
  }
  return <></>;
};

export default Offers;
