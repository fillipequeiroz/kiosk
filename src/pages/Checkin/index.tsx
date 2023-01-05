import {Box, Center, Flex} from "@chakra-ui/react";
import React, {Fragment} from "react";
import {TabComponent} from "../../component/Tab";
import {BackButton} from "../../component/Button/BackButton";
import {Outlet, useNavigate} from "react-router-dom";
import {CloseButton} from "../../component/Button/CloseButton";
import {CheckinContextProvider} from "../../context/checkin";
import {ToastContainer} from "react-toastify";

const CheckinBg = require("../../assets/images/checkin_background.png")

export const Checkin = () => {

  const navigate = useNavigate();
  const handleClickBackToHome = () => {
    navigate('/');
  }

  return (

    <Box bgImg={CheckinBg} backgroundSize={"cover"} w="100vw" minH="100vh">

      <CheckinContextProvider>
        <Fragment>
          <TabComponent tabSelected={"checkin"} useCheckin={true}/>


          <BackButton ml="20" mt="10" click={handleClickBackToHome} breakWord={true} isCheckin={true}></BackButton>
          <CloseButton click={handleClickBackToHome}/>
          <Center>
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
