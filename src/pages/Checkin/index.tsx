import {Box, Center, Flex} from "@chakra-ui/react";
import React, {Fragment} from "react";
import {TabComponent} from "../../component/Tab";
import {BackButton} from "../../component/Button/BackButton";
import {Outlet, useNavigate} from "react-router-dom";
import {CloseButton} from "../../component/Button/CloseButton";
import {CheckinContext, CheckinContextProvider} from "../../context/checkin";

const CheckinBg = require("../../assets/images/checkin_background.png")


export const Checkin = () => {

  const API_URL = process.env.REACT_APP_API_URL;
  const navigate = useNavigate();



  const TabContent = () => {

    const context = React.useContext(CheckinContext);

    const handleClickBackToHome = () => {

      if (context.getValueFromState('room')) {
        fetch(API_URL + 'rooms/unblock/' + context.getValueFromState('room'))
          .then((res) => {

          });
      }
      navigate('/');
    }

    return (
      <Fragment>
        <BackButton ml="20" mt="10" click={handleClickBackToHome} breakWord={true} isCheckin={true}></BackButton>
        <CloseButton click={handleClickBackToHome}/>
        <Center mb={30}>
          <Flex minW={"50%"} minH={"300px"} mt={10} ml={20} mr={20} id="boxContent" flexDirection="column"
                backgroundColor={"#FFF"} boxShadow={"0px 4px 4px rgba(0, 0, 0, 0.25);"} borderRadius={32}>
            <Outlet/>

          </Flex>

        </Center>
      </Fragment>);
  }


  return (

    <Box bgImg={CheckinBg} backgroundSize={"cover"} w="100vw" minH="100vh">

      <CheckinContextProvider>
        <Fragment>
          <TabComponent tabSelected={"checkin"} useCheckin={true}/>
          <TabContent></TabContent>

        </Fragment>
      </CheckinContextProvider>
    </Box>

  );

}
