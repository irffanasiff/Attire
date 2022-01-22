import {
  Center,
  Flex,
  Text,
  VStack,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Button,
  Textarea,
  Select,
  useDisclosure,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Modal,
  ModalHeader,
  ModalCloseButton,
  Heading,
  Container,
} from '@chakra-ui/react';
import React from 'react';

import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';

import Layout from '../components/HOC/Layout.HOC';
import ContactDetails from '../components/ContactDetails';

const BookCollection = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const {
    handleSubmit,
    register,
    reset,
    setValue,
    control,
    formState: { errors, isSubmitting },
  } = useForm();

  const sendEmail = (formData) => {
    emailjs
      .send(
        'service_z3pbp0h',
        'template_2nel7sv',
        formData,
        'user_bRurspjYqg9CqaFExCU8l'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    onOpen();
    reset();
  };

  return (
    <>
      <Layout
        img='https://images.unsplash.com/photo-1603252109360-909baaf261c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
        title='Contact Us'
      />

      <Text
        bg={'white'}
        py={'2rem'}
        fontWeight={'600'}
        fontSize={['lg', 'xl', '3xl']}
        textAlign={'center'}
      >
        Get In Touch
      </Text>
      <Center bg={'white'}>
        <Center
          flexDirection={{ base: 'column', md: 'row' }}
          w={'full'}
          maxW={'8xl'}
          mx={'auto'}
          padding={'4'}
          bg={'attire.1'}
          pb={'5rem'}
          alignItems={['center', 'center', 'start']}
          justifyContent={'space-evenly'}
        >
          <form onSubmit={handleSubmit(sendEmail)}>
            <VStack
              textColor={'attire.2'}
              background={'white'}
              pb={['1rem', '2rem']}
              w='100%'
              maxW={'6xl'}
              mx={'auto'}
            >
              <Flex
                p={'2rem'}
                alignItems={'center'}
                mx={'auto'}
                justify={'flex-start'}
                gap={['2rem', '2rem', '4rem']}
                flexDirection={'column'}
              >
                <FormControl maxW={'30rem'} isInvalid={errors.name}>
                  <FormLabel
                    htmlFor='name'
                    fontSize={['md', 'xl', '2xl']}
                    fontWeight={'light'}
                  >
                    Name
                  </FormLabel>
                  <Input
                    id='fullName'
                    type='name'
                    borderRadius={'0'}
                    borderColor={'attire.2'}
                    placeholder='Marcus Donin'
                    fontSize={['md', 'lg']}
                    fontWeight={'light'}
                    {...register('name', {
                      required: 'This is required',
                      minLength: {
                        value: 4,
                        message: 'Minimum length should be 4',
                      },
                    })}
                  />
                  <FormErrorMessage>
                    {errors.name && errors.name.message}
                  </FormErrorMessage>
                </FormControl>
                <FormControl maxW={'30rem'} isRequired isInvalid={errors.email}>
                  <FormLabel
                    htmlFor='email'
                    fontSize={['md', 'xl', '2xl']}
                    fontWeight={'light'}
                  >
                    Email
                  </FormLabel>
                  <Input
                    id='email'
                    type='email'
                    borderRadius={'0'}
                    borderColor={'attire.2'}
                    placeholder='marcusdonin@xyz.com'
                    fontSize={['md', 'lg']}
                    fontWeight={'light'}
                    {...register('email', {
                      required: 'This is required',
                    })}
                  />
                  <FormErrorMessage>
                    {errors.email && errors.email.message}
                  </FormErrorMessage>
                </FormControl>
                <FormControl
                  maxW={'30rem'}
                  isRequired
                  isInvalid={errors.message}
                >
                  <FormLabel
                    htmlFor='message'
                    fontSize={['md', 'xl', '2xl']}
                    fontWeight={'light'}
                  >
                    Message
                  </FormLabel>
                  <Textarea
                    id='message'
                    type='number'
                    borderRadius={'0'}
                    borderColor={'attire.2'}
                    placeholder='Message'
                    fontSize={['md', 'lg']}
                    fontWeight={'light'}
                    {...register('message', {
                      minLength: {
                        value: 10,
                        message: 'Minimum length should be 10',
                      },
                    })}
                  />
                  <FormErrorMessage>
                    {errors.message && errors.message.message}
                  </FormErrorMessage>
                </FormControl>
              </Flex>
            </VStack>
            <Center
              paddingLeft={'2rem'}
              alignSelf={'start'}
              justifyContent={'flex-start'}
            >
              <Button
                isLoading={isSubmitting}
                type='submit'
                borderRadius={'0'}
                fontSize={['xl', '2xl']}
                fontWeight={'light'}
                backgroundColor={'attire.3'}
                color={'white'}
                py={['1rem', '1.5rem']}
                px={['2rem', '3rem']}
              >
                Submit
              </Button>
            </Center>
            <Modal
              onClose={onClose}
              isOpen={isOpen}
              isCentered
              borderRadius={'0'}
            >
              <ModalOverlay />
              <ModalContent mx={'1rem'}>
                <ModalHeader>
                  <Text
                    fontSize={'4xl'}
                    w={'fit-content'}
                    mx={'auto'}
                    mt={'1rem'}
                  >
                    👏
                  </Text>
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody m={['1rem', '2rem']}>
                  <Heading
                    mx='auto'
                    textAlign={'center'}
                    fontSize={'2xl'}
                    mb={'1.5rem'}
                  >
                    Thanks for your order
                  </Heading>
                  <Text textAlign={'center'} mx={'auto'}>
                    Your order have been place our person will reach out to you
                    soon.
                  </Text>
                </ModalBody>
              </ModalContent>
            </Modal>
          </form>
          <Center
            mt={'2rem'}
            bgColor={'gray.100'}
            p={'2rem'}
            flexDirection={'column'}
            alignItems={'start'}
            justifyContent={'space-between'}
          >
            <Text mb={'1rem'} fontSize={['xl', '2xl']}>
              Contact Details
            </Text>
            <ContactDetails fontcolor='attire.2' />
          </Center>
        </Center>
      </Center>
    </>
  );
};

export default BookCollection;
