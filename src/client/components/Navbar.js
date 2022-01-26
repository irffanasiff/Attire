import React from 'react';
import {
  Box,
  Flex,
  Text,
  Stack,
  Center,
  useMediaQuery,
} from '@chakra-ui/react';
import Logo from './Logo';
import Button from './HOC/Button.HOC';
import { Link, NavigationType, useNavigate } from 'react-router-dom';

const NavBar = (props) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isSmallScreen] = useMediaQuery('(max-width: 991px)');

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Center
      position={isSmallScreen && isOpen && 'fixed'}
      h={isSmallScreen && isOpen && '100%'}
      zIndex={isSmallScreen && isOpen && '10'}
      w={'100%'}
      overflow={{ base: 'hidden', lg: 'visible' }}
    >
      <Flex
        as='nav'
        align='center'
        justify='space-between'
        wrap='wrap'
        w='100%'
        maxW={'6xl'}
        mb={8}
        p={['4', '8']}
        bg={'transparent'}
        color={'white'}
        bg={isOpen && isSmallScreen ? 'attire.2' : 'transparent'}
        alignSelf={'center'}
        zIndex={100}
        mx={'auto'}
        position={'absolute'}
        top={'0'}
      >
        <Logo />
        <MenuToggle toggle={toggle} isOpen={isOpen} />
        <MenuLinks isOpen={isOpen} toggle={toggle} />
      </Flex>
    </Center>
  );
};

const CloseIcon = () => (
  <svg width='24' viewBox='0 0 18 18' xmlns='http://www.w3.org/20/svg'>
    <title>Close</title>
    <path
      fill='white'
      d='M9.023 7.58599L13.9502 2.63599L15.3642 4.04999L10.4142 8.99999L15.3642 13.95L13.9502 15.364L9.023 10.414L4.05023 15.364L2.63623 13.95L7.58623 8.99999L2.63623 4.04999L4.05023 2.63599L9.023 7.58599Z'
    />
  </svg>
);

const MenuIcon = () => (
  <svg
    width='24px'
    viewBox='0 0 20 20'
    xmlns='http://www.w3.org/20/svg'
    fill='white'
  >
    <title>Menu</title>
    <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
  </svg>
);

const MenuToggle = ({ toggle, isOpen }) => {
  return (
    <Box display={{ base: 'block', lg: 'none' }} onClick={toggle}>
      {isOpen ? <CloseIcon /> : <MenuIcon />}
    </Box>
  );
};

const MenuItem = ({ navigateTo, children, toggle, ...rest }) => {
  return (
    <Link to={navigateTo} onClick={toggle}>
      <Text
        _active={{ borderBottom: '1px solid white' }}
        display='block'
        fontSize={['2xl', '2xl', 'lg']}
        {...rest}
      >
        {children}
      </Text>
    </Link>
  );
};

const MenuLinks = ({ isOpen, ...rest }) => {
  const navigate = useNavigate();

  const whenClickedFunction = () => {
    navigate('/book-collection');
  };

  return (
    <Box
      display={{ base: isOpen ? 'block' : 'none', lg: 'block' }}
      flexBasis={{ base: '100%', lg: 'auto' }}
    >
      <Stack
        spacing={8}
        align='center'
        h={['93vh', '93vh', '93vh', 'auto']}
        justify={['center', 'center', 'center', 'flex-end']}
        direction={['column', 'column', 'column', 'row']}
        pt={[4, 4, 0, 0]}
      >
        <MenuItem navigateTo='/' {...rest}>
          Home
        </MenuItem>
        <MenuItem navigateTo='/price-list' {...rest}>
          Price List{' '}
        </MenuItem>
        <MenuItem navigateTo='/about' {...rest}>
          About{' '}
        </MenuItem>
        <MenuItem navigateTo='/contact' {...rest}>
          Contact{' '}
        </MenuItem>
        <MenuItem navigateTo='/book-collection' {...rest}>
          <Flex border={['2px solid white', '2px solid white', 'none']}>
            <Button
              title='Book Collection'
              varient='primary'
              functionCallwhenClicked={whenClickedFunction}
            >
              Create Account
            </Button>
          </Flex>
        </MenuItem>
        <Center display={{ base: 'flex', lg: 'none' }}>
          <Box w={'200px'} h={'200px'} backgroundColor={'attire.2'}>
            <Center
              alignSelf={'baseline'}
              flexDirection={'column'}
              py={'0.5rem'}
              mt={'8rem'}
              gap={'1rem'}
            >
              <Logo />
              <Link
                to='/terms'
                fontSize='sx'
                onClick={() => setIsOpen == false}
              >
                Terms and Conditions
              </Link>
            </Center>
          </Box>
        </Center>
      </Stack>
    </Box>
  );
};

export default NavBar;
