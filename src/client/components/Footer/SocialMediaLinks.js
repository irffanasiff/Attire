import { ButtonGroup, IconButton } from '@chakra-ui/react';
import * as React from 'react';
import { GrInstagram } from 'react-icons/gr';
import { FiFacebook } from 'react-icons/fi';

export const SocialMediaLinks = (props) => (
  <ButtonGroup variant='ghost' color='gray.600' {...props}>
    <IconButton
      as='a'
      href='#'
      aria-label='Instagram'
      icon={<GrInstagram fontSize='24px' color='white' />}
    />
    <IconButton
      as='a'
      href='#'
      aria-label='Facebook'
      icon={<FiFacebook fontSize='26px' color='white' />}
    />
  </ButtonGroup>
);
