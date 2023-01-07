import {Box, Center, Flex, FormControl, FormLabel, GridItem, Input, SimpleGrid, Text, VStack} from "@chakra-ui/react";
import React, {Fragment, useEffect, useRef, useState} from "react";
import {PrimaryButton} from "../../../../component/Button/PrimaryButton";
import {CheckinContext} from "../../../../context/checkin";
import {toast} from "react-toastify";
import Keyboard from "react-simple-keyboard";
import {useDisclosure} from "@chakra-ui/hooks";
import {ModalReserve} from "../../../../component/ModalReserve";

export const ReserveSearch = () => {
  const [checkinCodeError, setCheckinCodeError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [lastnameError, setLastnameError] = useState(false);
  const context = React.useContext(CheckinContext);

  const [inputs, setInputs] = useState({
    checkinCode: context.state.checkinCode,
    name: context.state.name,
    lastname: context.state.lastname
  });
  const [layoutName, setLayoutName] = useState("default");
  const [inputName, setInputName] = useState("default");
  const keyboard = useRef();
  const [keyboardVisibility, setKeyboardVisibility] = useState(false);

  const {isOpen, onOpen, onClose} = useDisclosure();

  useEffect(() => {
    const clickHanlder = (e: any) => {
      if (
        !(e.target.nodeName === "INPUT") &&
        !e.target.classList.contains("hg-button") &&
        !e.target.classList.contains("hg-row")
      ) {
        setKeyboardVisibility(false);
      }
    }


    window.addEventListener("click", clickHanlder);
    return window.removeEventListener("click", clickHanlder, true);
  }, []);


  const clearInput = (input: any) => {
    // @ts-ignore
    context.state[input] = '';
    setInputs({checkinCode: context.state.checkinCode, name: context.state.name, lastname: context.state.lastname});
  }

  const onChangeAll = (inputs: any) => {
    console.log('onChangeAll');
    console.log(inputs);
    // @ts-ignore
    context.state[Object.keys(inputs)[0]] = inputs[Object.keys(inputs)[0]];
    setInputs({checkinCode: context.state.checkinCode, name: context.state.name, lastname: context.state.lastname});
  };

  const handleShift = () => {
    const newLayoutName = layoutName === "default" ? "shift" : "default";
    setLayoutName(newLayoutName);
  };

  const onKeyPress = (button: any) => {
    if (button === "{shift}" || button === "{lock}") handleShift();
  };

  const onChangeInput = (event: any) => {

    const inputVal = event.target.value;
    setInputs({
      ...inputs,
      [inputName]: inputVal
    });

    // @ts-ignore
    keyboard?.current?.setInput(inputVal);
  };

  const getInputValue = (inputName: string) => {
    // @ts-ignore
    return inputs[inputName] || "";
  };


  const validateForm = (): boolean => {
    if (!context.state.checkinCode && !context.state.name && !context.state.lastname) {
      setCheckinCodeError(true);
      setNameError(true);
      setLastnameError(true);
      toast.error('Please inform the checkin code or the name');
      return false;
    }

    if (context.state.checkinCode) {
      clearErrorMessage();
      return true;
    }

    if (context.state.name && !context.state.lastname) {
      setNameError(false);
      setLastnameError(true);
      toast.error('Please inform the lastname');
      return false;
    }
    if (context.state.lastname && !context.state.name) {
      setNameError(true);
      setLastnameError(false);
      toast.error('Please inform the name');
      return false;
    }
    clearErrorMessage();
    return true;
  }

  const nexPage = () => {
    context.fowardStep(context.state.step + 1);
  }

  const handleClickNextStep = () => {
    if (!validateForm()) {
      return;
    }

    //TODO aqui deverá verificar do retorno do back
    const hasMoreThanOneReserve = true;
    if (hasMoreThanOneReserve) {
      onOpen();
    } else {
      nexPage();
    }
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
              // onChange={(e) => context.state.checkinCode = e.target.value}
              // defaultValue={context.state.checkinCode}
              value={getInputValue("checkinCode")}
              onChange={onChangeInput}
              onFocus={() => {
                setKeyboardVisibility(true);
                setInputName("checkinCode");
                clearInput("checkinCode");
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
                  value={getInputValue("name")}
                  onChange={onChangeInput}
                  onFocus={() => {
                    setKeyboardVisibility(false);
                    setKeyboardVisibility(true);
                    setInputName("name");
                    clearInput("name");
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
                  value={getInputValue("lastname")}
                  onChange={onChangeInput}
                  onFocus={() => {
                    setKeyboardVisibility(false);
                    setKeyboardVisibility(true);
                    setInputName("lastname");
                    clearInput("lastname");
                  }}
                />
              </FormControl>
            </GridItem>

          </SimpleGrid>


        </form>
      </Box>

      <Center mb={10}>
        <PrimaryButton text={'Confirm'} click={handleClickNextStep} mt={10} ml={0}/>
      </Center>

      <ModalReserve onOpen={onOpen} handleClickNextStep={nexPage} isOpen={isOpen}
                    onClose={onClose}></ModalReserve>

      {keyboardVisibility && (
        <Keyboard
          keyboardRef={(r) => (keyboard.current = r)}
          layoutName={layoutName}
          onChangeAll={onChangeAll}
          onKeyPress={onKeyPress}
          inputName={inputName}

        />
      )}
    </Fragment>
  );

}
