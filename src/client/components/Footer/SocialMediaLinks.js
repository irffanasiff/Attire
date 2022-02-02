import { ButtonGroup, IconButton } from '@chakra-ui/react';
import * as React from 'react';
import { GrInstagram } from 'react-icons/gr';
import { FiFacebook } from 'react-icons/fi';

export const SocialMediaLinks = (props) => (
  <ButtonGroup variant='ghost' color='gray.600' {...props}>
    <IconButton
      as='a'
      href='https://instagram.com/attire.dryclean'
      aria-label='Instagram'
      _active={{
        bgColor: 'gray',
      }}
      _hover={{
        bgColor: 'gray',
      }}
      icon={<GrInstagram fontSize='24px' color='white' />}
    />
    <IconButton
      as='a'
      href='https://www.facebook.com/profile.php?id=100074268141824'
      aria-label='Facebook'
      _active={{
        bgColor: 'gray',
      }}
      _hover={{
        bgColor: 'gray',
      }}
      icon={<FiFacebook fontSize='26px' color='white' />}
    />
  </ButtonGroup>
);
