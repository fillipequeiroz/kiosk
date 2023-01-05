import {
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  FormLabel,
  GridItem,
  Input,
  SimpleGrid,
  Text,
  VStack, Wrap, WrapItem
} from "@chakra-ui/react";
import React, {Fragment, useEffect, useRef, useState} from "react";
import {PrimaryButton} from "../../../../component/Button/PrimaryButton";
import {CheckinContext} from "../../../../context/checkin";
import {toast, ToastContainer} from "react-toastify";
import Keyboard from "react-simple-keyboard";

export const ReserveSearch = () => {
  const [checkinCodeError, setCheckinCodeError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [lastnameError, setLastnameError] = useState(false);
  const context = React.useContext(CheckinContext);

  const [inputs, setInputs] = useState({checkinCode: context.state.checkinCode, name: context.state.name, lastname: context.state.lastname});
  const [layoutName, setLayoutName] = useState("default");
  const [inputName, setInputName] = useState("default");
  const keyboard = useRef();
  const [keyboardVisibility, setKeyboardVisibility] = useState(false);


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

    console.log('useEffect');
    console.log(inputs);

    window.addEventListener("click", clickHanlder);
    return window.removeEventListener("click", clickHanlder, true);
  }, []);


  const clearInput = (input: any) => {
    // @ts-ignore
    context.state[input] = '';
    setInputs({checkinCode: context.state.checkinCode, name: context.state.name, lastname: context.state.lastname});
  }

  const onChangeAll = (inputs: any) => {
    console.log('onChangeAll: ')
    // @ts-ignore
    context.state[Object.keys(inputs)[0]] = inputs[Object.keys(inputs)[0]];
    console.log(context.state);
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
    console.log('onChangeInput:');

    const inputVal = event.target.value;
    console.log(inputVal);
    setInputs({
      ...inputs,
      [inputName]: inputVal
    });

    // @ts-ignore
    keyboard?.current?.setInput(inputVal);
  };

  const getInputValue = (inputName: string) => {
    console.log('getInputValue: ')
    console.log(inputs)
    // @ts-ignore
    return inputs[inputName] || "";
  };


  const handleClickNextStep = () => {



    if (!context.state.checkinCode && !context.state.name && !context.state.lastname) {
      setCheckinCodeError(true);
      setNameError(true);
      setLastnameError(true);
      toast.error('Please inform the checkin code or the name');
      return;
    }

    if (context.state.checkinCode) {
      clearErrorMessage();
      context.fowardStep(context.state.step + 1);
      return;
    }

    if (context.state.name && !context.state.lastname) {
      setNameError(false);
      setLastnameError(true);
      toast.error('Please inform the lastname');
      return;
    }
    if (context.state.lastname && !context.state.name) {
      setNameError(true);
      setLastnameError(false);
      toast.error('Please inform the name');
      return;
    }
    clearErrorMessage();
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
                    setKeyboardVisibility(true);
                    setInputName("name");
                    clearInput("name");
                  }}
                />
              </FormControl>
            </GridItem>

            <GridItem>
              <FormControl isInvalid={lastnameError}>
                <FormLabel htmlFor='code' fontWeight={400} color={"#121212"} fontSize="16" fontFamily={"Inter"}>Enter
                  your last name</FormLabel>
                <Input
                  id='lastname'
                  placeholder='Last name'
                  value={getInputValue("lastname")}
                  onChange={onChangeInput}
                  onFocus={() => {
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
