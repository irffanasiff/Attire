import {
  Button,
  Flex,
  Box,
  Center,
  Container,
  Text,
  IconButton,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
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
      <MotionFlex
        initial={{ y: -500 }}
        onClick={{ y: -500 }}
        animate={{ y: 20 }}
        transition={{ ease: 'easeOut', duration: 1.5 }}
        bg={'attire.2'}
        //position={'absolute'}
        //zIndex={'200'}
        flexDirection={'row'}
        alignItems={'center'}
        justifyContent={'space-between'}
        w={'100%'}
        h={'3rem'}
        px={'2rem'}
      >
        <Text textColor={'white'} mx={'auto'}>
          ✨ Check the latest offers{' '}
          <Link to='/price-list' sx={{ textDecoration: 'underline' }}>
            here
          </Link>
        </Text>
        <IconButton icon={<MdClear />} onClick={onClickHandler} />
      </MotionFlex>
    );
  }
  return <></>;
};

export default Offers;
