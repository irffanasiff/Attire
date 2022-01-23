import React from 'react';
import {
  Box,
  Heading,
  Stack,
  Image,
  Text,
  Avatar,
  Flex,
  Center,
  VStack,
} from '@chakra-ui/react';
import Slider from 'react-slick';
import { ImQuotesLeft } from 'react-icons/im';
import '../styles/slick.css';

const settings = {
  dots: false,
  autoScroll: true,
  autoplay: true,
  autoplaySpeed: 2000,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  centerMode: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        // autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        //dots: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        centerMode: true,
        //  autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        //initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        // autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
      },
    },
  ],
};

export default function CaptionCarousel() {
  const cards = [
    {
      name: 'Angel Dokidis',
      body: 'Quality of Work – The Best.  When you say you will be there, you are there – thank you. Staff – the Best.  Everything is very clean & neat',
      url: 'https://images.generated.photos/uKjxbHEufqSoLeZXqc9kCzDFhbx_2r555M_Zq3FGmrs/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/OTQ2NTc2LmpwZw.jpg',
    },
    {
      name: 'Adison Aminoff',
      body: 'I received outstanding service and I was so fortunate to pick your laundry in the telephone book.  There is nothing you can do differently to make my experience better.',
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkstvneL1UVFnPpjuthvShjgYbPSrdNXIMcw&usqp=CAU',
    },
    {
      name: 'Justin Calzoni',
      body: ' I took my duvet cover and pillow cases for the drop off service and it was quick and easy to do. Will come here again for my laundry needs.',
      url: 'https://i1.sndcdn.com/avatars-000583246488-dhm5la-t240x240.jpg',
    },
    {
      name: 'Justin Calzoni',
      body: 'This place was amazing! Quality service and very clean. I took my duvet cover and pillow cases for the drop off service and it was quick and easy to do. Will come here again for my laundry needs.',
      url: 'https://i.pinimg.com/originals/de/64/80/de64801f0275c1ab2ea5a9e2bb3ce7bc.jpg',
    },
  ];

  return (
    <Box
      position={'relative'}
      height={['400px', '440px', '600px']}
      width={'99vw'}
      overflow={'hidden'}
      mt={['64px', '64px', '80px']}
    >
      {/* CSS files for react-slick */}
      <link
        rel='stylesheet'
        type='text/css'
        charSet='UTF-8'
        href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css'
      />
      <link
        rel='stylesheet'
        type='text/css'
        href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css'
      />
      <Slider {...settings}>
        {cards.map((item, index) => (
          <Center p={'0.5rem'} bgColor={'attire.1'}>
            <Center
              key={index}
              overflow={'hidden'}
              maxW={['70vw', '40vw', '30vw']}
              bg={'attire.2'}
            >
              <Center
                position={'absolute'}
                zIndex={'0'}
                w={['5rem', '10rem']}
                h={['5rem', '10rem']}
                transform={'translateY(-30px)'}
              >
                <ImQuotesLeft
                  size={'20rem'}
                  color='rgb(255, 255, 255,  0.08)'
                />
              </Center>
              <VStack m={{ base: '1rem', lg: '2rem' }} zIndex={'2'}>
                <Avatar
                  name={item.name}
                  src={item.url}
                  m={['1rem', '2rem']}
                  size={'lg'}
                />
                <Text
                  textColor={'attire.1'}
                  textAlign={'center'}
                  fontSize={{ base: '10px', lg: 'md' }}
                  h={{ base: '5rem', lg: '6.5rem' }}
                >
                  "{item.body}"
                </Text>
                <Heading
                  fontSize={{ base: 'xs', lg: 'lg' }}
                  py={'1rem'}
                  textColor={'attire.1'}
                >
                  {item.name}
                </Heading>
              </VStack>
            </Center>
          </Center>
        ))}
      </Slider>
    </Box>
  );
}
