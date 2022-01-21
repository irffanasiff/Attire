import {
  Box,
  Center,
  Flex,
  Text,
  VStack,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Checkbox,
  Button,
  Textarea,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../styles/date-picker.css';
import setHours from 'date-fns/setHours';
import setMinutes from 'date-fns/setMinutes';
import Layout from '../components/HOC/Layout.HOC';

const BookCollection = () => {
  const [startDate, setStartDate] = useState(
    setHours(setMinutes(new Date(), 30), 16)
  );
  const {
    handleSubmit,
    register,
    reset,
    setValue,
    control,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = (values) => {
    console.log(values);
  };

  // const handleSubmit = async (event) => {
  //event.preventDefault();
  //   let databody = {
  //     title: title,
  //     img: url,
  //     code: code,
  //     size: size,
  //     category: category,
  //     featured: featured,
  //   };

  //   const res = await fetch('/api/v1/products', {
  //     method: 'POST',
  //     body: JSON.stringify(databody),
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   });
  //   const data = await res.json();
  //   return console.log(data);
  // };

  return (
    <>
      <Layout
        img='https://images.unsplash.com/photo-1597484662003-7cf93e97447c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80'
        title='Book Collection'
      />
      <Center w={'full'} padding={'4'} bg={'white'}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <VStack
            textColor={'attire.2'}
            background={'white'}
            py={['1rem', '2rem']}
            w='100%'
            maxW={'6xl'}
            mx={'auto'}
          >
            <Text fontWeight={'600'} fontSize={['lg', 'xl', '3xl']}>
              Personal Details
            </Text>
            <Flex
              padding={'2rem'}
              alignItems={'center'}
              mx={'auto'}
              justify={'flex-start'}
              gap={['2rem', '2rem', '4rem']}
              flexDirection={['column', 'row']}
              flexWrap={'wrap'}
            >
              <FormControl maxW={'30rem'} isRequired isInvalid={errors.name}>
                <FormLabel
                  htmlFor='name'
                  fontSize={['md', 'xl', '2xl']}
                  fontWeight={'light'}
                >
                  Full Name
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
                isInvalid={errors.phoneNumber}
              >
                <FormLabel
                  htmlFor='number'
                  fontSize={['md', 'xl', '2xl']}
                  fontWeight={'light'}
                >
                  Phone Number
                </FormLabel>
                <Input
                  id='phoneNumber'
                  type='number'
                  borderRadius={'0'}
                  borderColor={'attire.2'}
                  placeholder='000 000 000'
                  fontSize={['md', 'lg']}
                  fontWeight={'light'}
                  {...register('phoneNumber', {
                    required: 'Input numbers only',
                    valueAsNumber: true,
                    minLength: {
                      value: 4,
                      message: 'Minimum length should be 4',
                    },
                  })}
                />
                <FormErrorMessage>
                  {errors.phoneNumber && errors.phoneNumber.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl maxW={'30rem'} isRequired isInvalid={errors.address}>
                <FormLabel
                  htmlFor='address'
                  fontSize={['md', 'xl', '2xl']}
                  fontWeight={'light'}
                >
                  Address
                </FormLabel>
                <Input
                  id='address'
                  type='address'
                  borderRadius={'0'}
                  borderColor={'attire.2'}
                  fontSize={['md', 'lg']}
                  fontWeight={'light'}
                  {...register('address', {
                    required: 'This is required',
                  })}
                />
                <FormErrorMessage>
                  {errors.address && errors.address.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl maxW={'30rem'} isRequired isInvalid={errors.pincode}>
                <FormLabel
                  htmlFor='pincode'
                  fontSize={['md', 'xl', '2xl']}
                  fontWeight={'light'}
                >
                  Pincode
                </FormLabel>
                <Input
                  id='pincode'
                  type='number'
                  borderRadius={'0'}
                  borderColor={'attire.2'}
                  fontSize={['md', 'lg']}
                  fontWeight={'light'}
                  {...register('pincode', {
                    required: 'Input numbers only',
                    valueAsNumber: true,
                    minLength: {
                      value: 4,
                      message: 'Minimum length should be 4',
                    },
                  })}
                />
                <FormErrorMessage>
                  {errors.pincode && errors.pincode.message}
                </FormErrorMessage>
              </FormControl>
            </Flex>
          </VStack>
          <VStack
            textColor={'attire.2'}
            background={'white'}
            py={['1rem', '2rem']}
            w='100%'
            maxW={'6xl'}
            mx={'auto'}
          >
            <Text fontWeight={'600'} fontSize={['lg', 'xl', '3xl']}>
              Collection Details
            </Text>
            <Flex
              padding={'2rem'}
              alignItems={'center'}
              mx={'auto'}
              w={'100%'}
              justify={'flex-start'}
              gap={['2rem', '2rem', '4rem']}
              flexDirection={['column', 'row']}
              flexWrap={'wrap'}
            >
              <FormControl maxW={'30rem'} isRequired>
                <FormLabel
                  htmlFor='pincode'
                  fontSize={['md', 'xl', '2xl']}
                  fontWeight={'light'}
                >
                  Collection
                </FormLabel>
                <Controller
                  control={control}
                  name='collection'
                  render={({ field: { onChange, onBlur, value, ref } }) => (
                    <DatePicker
                      //withPortal
                      placeholderText='Select Date and Time'
                      selected={value}
                      onChange={onChange}
                      dateFormat='MM/dd/yyyy  EE hh:mm a'
                      //locale='pt-BR'
                      showTimeSelect
                      timeFormat='p'
                      timeIntervals={10}
                      includeTimes={[
                        setHours(setMinutes(new Date(), 0), 7),
                        setHours(setMinutes(new Date(), 10), 7),
                        setHours(setMinutes(new Date(), 20), 7),
                        setHours(setMinutes(new Date(), 30), 7),
                        setHours(setMinutes(new Date(), 40), 7),
                        setHours(setMinutes(new Date(), 50), 7),
                        setHours(setMinutes(new Date(), 0), 19),
                        setHours(setMinutes(new Date(), 10), 19),
                        setHours(setMinutes(new Date(), 20), 19),
                        setHours(setMinutes(new Date(), 30), 19),
                        setHours(setMinutes(new Date(), 40), 19),
                        setHours(setMinutes(new Date(), 50), 19),
                      ]}
                      popperModifiers={{
                        preventOverflow: {
                          enabled: true,
                        },
                      }}
                    />
                  )}
                />

                <FormHelperText fontWeight={'light'} color={'green.300'}>
                  Please enter the date you would like your items collected
                </FormHelperText>
              </FormControl>
              <FormControl maxW={'30rem'} isRequired>
                <FormLabel
                  htmlFor='pincode'
                  fontSize={['md', 'xl', '2xl']}
                  fontWeight={'light'}
                >
                  Drop of Time
                </FormLabel>
                <Controller
                  control={control}
                  name='Drop'
                  render={({ field: { onChange, onBlur, value, ref } }) => (
                    <DatePicker
                      //withPortal
                      placeholderText='Select Date and Time'
                      selected={value}
                      onChange={onChange}
                      dateFormat='MM/dd/yyyy  EE hh:mm a'
                      //locale='pt-BR'
                      showTimeSelect
                      timeFormat='p'
                      timeIntervals={10}
                      includeTimes={[
                        setHours(setMinutes(new Date(), 0), 7),
                        setHours(setMinutes(new Date(), 10), 7),
                        setHours(setMinutes(new Date(), 20), 7),
                        setHours(setMinutes(new Date(), 30), 7),
                        setHours(setMinutes(new Date(), 40), 7),
                        setHours(setMinutes(new Date(), 50), 7),
                        setHours(setMinutes(new Date(), 0), 19),
                        setHours(setMinutes(new Date(), 10), 19),
                        setHours(setMinutes(new Date(), 20), 19),
                        setHours(setMinutes(new Date(), 30), 19),
                        setHours(setMinutes(new Date(), 40), 19),
                        setHours(setMinutes(new Date(), 50), 19),
                      ]}
                      popperModifiers={{
                        preventOverflow: {
                          enabled: true,
                        },
                      }}
                    />
                  )}
                />

                <FormHelperText fontWeight={'light'} color={'green.300'}>
                  Chosen drop off time must be at least 24 hours after pickup
                </FormHelperText>
              </FormControl>
              <FormControl maxW={'30rem'}>
                <FormLabel
                  htmlFor='address'
                  fontSize={['md', 'xl', '2xl']}
                  fontWeight={'light'}
                >
                  Additional Information
                </FormLabel>
                <Textarea
                  id='additionalinfo'
                  type='text'
                  borderRadius={'0'}
                  borderColor={'attire.2'}
                  fontSize={['md', 'lg']}
                  fontWeight={'light'}
                  {...register('additionalinfo')}
                />
              </FormControl>
              <FormControl maxW={'30rem'}>
                <FormLabel
                  htmlFor='promocode'
                  fontSize={['md', 'xl', '2xl']}
                  fontWeight={'light'}
                >
                  Promocode
                </FormLabel>
                <Input
                  id='promocode'
                  type='text'
                  borderRadius={'0'}
                  borderColor={'attire.2'}
                  fontSize={['md', 'lg']}
                  fontWeight={'light'}
                  {...register('promocode')}
                />
              </FormControl>
              <Box>
                <Checkbox defaultIsChecked size='lg'>
                  <Text fontSize={['md', 'lg']} fontWeight={'light'} pl={'5px'}>
                    Accept Terms and conditions
                  </Text>
                </Checkbox>
              </Box>
            </Flex>{' '}
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
        </form>
      </Center>
    </>
  );
};

export default BookCollection;
