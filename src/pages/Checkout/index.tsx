import {Box, Center, Flex} from "@chakra-ui/react";
import React, {Fragment} from "react";
import {TabComponent} from "../../component/Tab";
import {BackButton} from "../../component/Button/BackButton";
import {Outlet, useNavigate} from "react-router-dom";
import {CloseButton} from "../../component/Button/CloseButton";
import {CheckoutContextProvider} from "../../context/checkout";

const CheckinBg = require("../../assets/images/checkin_background.png")

export const Checkout = () => {

  const navigate = useNavigate();
  const handleClickBackToHome = () => {
    navigate('/');
  }

  return (

    <Box bgImg={CheckinBg} backgroundSize={"cover"} w="100vw" minH="100vh">
      <CheckoutContextProvider>
        <Fragment>
          <TabComponent tabSelected={"checkout"} useCheckin={false}/>
          <BackButton ml="20" mt="10" click={handleClickBackToHome} breakWord={true} isCheckin={false}></BackButton>
          <CloseButton click={handleClickBackToHome}/>
          <Center>
            <Flex minW={"50%"} minH={"300px"} mt={10} ml={20} mr={20} id="boxContent" flexDirection="column"
                  backgroundColor={"#FFF"} boxShadow={"0px 4px 4px rgba(0, 0, 0, 0.25);"} borderRadius={32}>
              <Outlet/>

            </Flex>
          </Center>
        </Fragment>
      </CheckoutContextProvider>
    </Box>

  );

}
