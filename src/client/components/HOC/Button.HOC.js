import { Box } from '@chakra-ui/react';
import React from 'react';

// accepts title and varient
const Button = (props) => {
  const onClickHandler = () => {
    props.functionCallwhenClicked();
  };
  return (
    <Box
      as='button'
      height={['25px', '40px']}
      lineHeight='1.2'
      transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
      border={props.varient == 'primary' ? '0' : '2px'}
      px={['25px', '40px']}
      fontSize={['12px', '18px']}
      fontWeight='normal'
      bg='#f5f6f7'
      backgroundColor={props.varient == 'primary' ? 'attire.2' : 'transparent'}
      color='attire.1'
      _hover={{ bg: '#ebedf0', color: 'attire.2' }}
      _active={{
        bg: '#dddfe2',
        transform: 'scale(0.98)',
        borderColor: 'attire.1',
      }}
      _focus={{
        boxShadow:
          '0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)',
      }}
      onClick={onClickHandler}
    >
      {props.title}
    </Box>
  );
};

export default Button;
