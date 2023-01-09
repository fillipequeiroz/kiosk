import {Box, Center, Flex} from "@chakra-ui/react";
import React, {Fragment, useEffect, useRef, useState} from "react";
import {TabComponent} from "../../component/Tab";
import {BackButton} from "../../component/Button/BackButton";
import {Outlet, useNavigate} from "react-router-dom";
import {CloseButton} from "../../component/Button/CloseButton";
import {CheckinContext, CheckinContextProvider} from "../../context/checkin";
import {CgCloseR} from "react-icons/cg";
import Keyboard from "react-simple-keyboard";

const CheckinBg = require("../../assets/images/checkin_background.png")

export const Checkin = () => {

  const navigate = useNavigate();
  const handleClickBackToHome = () => {
    navigate('/');
  }

  // const onChangeAll = (inputs: any): any => {
  //   // setInputs({...inputs});
  //   context.onChangeAll(inputs);
  // };
  // const getInputValue = (inputName: any, id: number) => {
  //   // return inputs && inputs[inputName] || "";
  //   return context.getInputValueFromAdditionalGuests(inputName, id);
  // };



  return (

    <Box bgImg={CheckinBg} backgroundSize={"cover"} w="100vw" minH="100vh">

      <CheckinContextProvider>
        <Fragment>
          <TabComponent tabSelected={"checkin"} useCheckin={true}/>


          <BackButton ml="20" mt="10" click={handleClickBackToHome} breakWord={true} isCheckin={true}></BackButton>
          <CloseButton click={handleClickBackToHome}/>
          <Center mb={30}>
            <Flex minW={"50%"} minH={"300px"} mt={10} ml={20} mr={20} id="boxContent" flexDirection="column"
                  backgroundColor={"#FFF"} boxShadow={"0px 4px 4px rgba(0, 0, 0, 0.25);"} borderRadius={32}>
              <Outlet/>

            </Flex>

          </Center>
        </Fragment>
      </CheckinContextProvider>
    </Box>

  );

}
