import { Text } from '@chakra-ui/react';
import * as React from 'react';

export const Copyright = (props) => (
  <Text fontSize='sm' {...props} textColor={'white'} fontWeight={'300'}>
    &copy; {new Date().getFullYear()} Attire, Inc. All rights reserved.
  </Text>
);
