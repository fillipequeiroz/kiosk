import {Box, Center, Flex, FormControl, FormLabel, GridItem, Input, SimpleGrid, Text, VStack} from "@chakra-ui/react";
import React, {Fragment, useState} from "react";
import {PrimaryButton} from "../../../../component/Button/PrimaryButton";
import {CheckinContext} from "../../../../context/checkin";
import {toast} from "react-toastify";
import {useDisclosure} from "@chakra-ui/hooks";
import {ModalReserve} from "../../../../component/ModalReserve";
import {KeyboardComponent} from "../../../../component/Keyboard";
import {WAITING} from "../index";

export const BookingSearch = () => {
  const [checkinCodeError, setCheckinCodeError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [lastnameError, setLastnameError] = useState(false);
  const context = React.useContext(CheckinContext);

  const API_URL = process.env.REACT_APP_API_URL;
  const {isOpen, onOpen, onClose} = useDisclosure();
  const INPUTS_PAGE = "inputsSearch";

  const onChangeInput = (e: any) => {
    console.log('alterar para funcionar no pai, isso é para escrever pelo teclado normal, não é tão importante')
  }

  const handleClickNextStep = () => {
    if (!validateForm()) {
      return;
    }

    const checkinCode = context.getInputValue('checkinCode', INPUTS_PAGE);
    context.fowardStep(WAITING);
    if (checkinCode) {
      fetch(API_URL + 'reservations/' + checkinCode.toUpperCase())
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          if (res.code && res.code == '404') {
            toast.error('Booking not found.')
            context.backLastStep();
          } else {
            context.updateContextByBooking(res);
            nexPage();
          }

        });
    } else {
      const name = context.getInputValue('name', INPUTS_PAGE);
      const lastname = context.getInputValue('lastname', INPUTS_PAGE);
      fetch(API_URL + 'reservations?firstName=' + name + '&lastName=' + lastname)
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          context.backLastStep();
          if ((res.code && res.code == '404') || !res.data || res.data.length === 0) {
            toast.error('Booking not found.')
          } else {
            if (res.data.length === 1) {
              context.updateContextByBooking(res.data[0]);
              nexPage();
            } else {
              context.updateContextByBooking(res);
              onOpen();
            }

          }
        });
    }
  }

  const validateForm = (): boolean => {
    const checkinCode = context.getInputValue('checkinCode', INPUTS_PAGE);
    const name = context.getInputValue('name', INPUTS_PAGE);
    const lastname = context.getInputValue('lastname', INPUTS_PAGE);

    if (!checkinCode && !name && !lastname) {
      setCheckinCodeError(true);
      setNameError(true);
      setLastnameError(true);
      toast.error('Please inform the checkin code or the name');
      return false;
    }

    if (checkinCode) {
      clearErrorMessage();
      context.closeKeyboard();
      return true;
    }

    if (name && !lastname) {
      setNameError(false);
      setLastnameError(true);
      toast.error('Please inform the lastname');
      return false;
    }
    if (lastname && !name) {
      setNameError(true);
      setLastnameError(false);
      toast.error('Please inform the name');
      return false;
    }
    clearErrorMessage();
    context.closeKeyboard();
    return true;
  }

  const nexPage = () => {
    context.fowardStep(context.state.step + 1);
  }


  const clearErrorMessage = () => {
    setCheckinCodeError(false);
    setNameError(false);
    setLastnameError(false);
  }


  return (

    <Fragment>

      <VStack>
        <Center>
          <Text textAlign={['left']} w="100%" fontSize="34" fontWeight={600} color={"#121212"}>
            Checking
          </Text>
        </Center>
      </VStack>

      <VStack>
        <Center>
          <Text textAlign={['left']} w="100%" fontSize="34" fontWeight={600} color={"#121212"}>
            Please enter the last six digits of your reservation #
          </Text>
        </Center>
      </VStack>

      <Box mt={5} ml={60} mr={60}>
        <form>
          <FormControl isInvalid={checkinCodeError}>
            <FormLabel htmlFor='code' fontWeight={400} color={"#121212"} fontSize="16" fontFamily={"Inter"}>Enter
              your booking code below</FormLabel>
            <Input
              id='checkinCode'
              placeholder='Your reservation'
              value={context.getInputValue("checkinCode", INPUTS_PAGE)}
              onChange={(e) => onChangeInput(e)}
              onFocus={() => {
                context.openKeyboard()
                context.setInputName("checkinCode");
              }}

            />

          </FormControl>
        </form>
      </Box>


      <Box mt={5} ml={60} mr={60}>
        <Flex>
          <Center w={"100%"} mr={10}>
            <Box border="2px solid #D0D5DD" w="100%"></Box>
          </Center>
          <Text textAlign={['left']} fontSize="22" fontWeight={600} color={"#767676"}>
            OR
          </Text>
          <Center w={"100%"} ml={10}>
            <Box border="2px solid #D0D5DD" w="100%"></Box>
          </Center>
        </Flex>
      </Box>

      <Center>
        <Box mt={5}>
          <Text textAlign={['left']} fontSize="28" fontWeight={600} color={"#121212"}>
            Enter your full name
          </Text>
        </Box>
      </Center>

      <Box mt={5} ml={60} mr={60}>
        <form>

          <SimpleGrid columns={2} columnGap={25}>
            <GridItem>
              <FormControl isInvalid={nameError}>
                <FormLabel htmlFor='code' fontWeight={400} color={"#121212"} fontSize="16" fontFamily={"Inter"}>Enter
                  your name in the field below</FormLabel>
                <Input
                  id='name'
                  placeholder='Name'
                  value={context.getInputValue("name", INPUTS_PAGE)}
                  onChange={(e) => onChangeInput(e)}
                  onFocus={() => {
                    context.openKeyboard()
                    context.setInputName("name");
                  }}
                />
              </FormControl>
            </GridItem>

            <GridItem>
              <FormControl isInvalid={lastnameError}>
                <FormLabel htmlFor='lastname' fontWeight={400} color={"#121212"} fontSize="16" fontFamily={"Inter"}>Enter
                  your last name</FormLabel>
                <Input
                  id='lastname'
                  placeholder='Last name'
                  value={context.getInputValue("lastname", INPUTS_PAGE)}
                  onChange={(e) => onChangeInput(e)}
                  onFocus={() => {
                    context.openKeyboard()
                    context.setInputName("lastname");
                  }}
                />
              </FormControl>
            </GridItem>

          </SimpleGrid>


        </form>
      </Box>

      <KeyboardComponent page={INPUTS_PAGE}/>

      <Center mb={10}>
        <PrimaryButton text={'Confirm'} click={handleClickNextStep} mt={10} ml={0}/>
      </Center>

      <ModalReserve onOpen={onOpen} handleClickNextStep={nexPage} isOpen={isOpen}
                    onClose={onClose}></ModalReserve>


    </Fragment>
  );

}
