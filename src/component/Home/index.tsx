import {Box, Center, Flex, Text} from "@chakra-ui/react";
import React, {FC, Fragment, useEffect, useState} from "react";
import {HomeButtons} from "../Button/HomeButtons";
import {ReservationButtons} from "../Button/ReservationButtons";
import {BackButton} from "../Button/BackButton";
import {useNavigate} from "react-router-dom";

const HomeImage = require("../../assets/images/home_expand.png")

export const HomeComponent: FC<{ actualStep: string | undefined }> = (props) => {

  const [step, setStep] = useState(props.actualStep);
  const [isCheckin, setChecking] = useState(true);
  const [subTitle, setSubTitle] = useState('What would you like to do today?');
  const navigate = useNavigate();

  useEffect(() => {
    if (props.actualStep) {
      setStep(props.actualStep);
    } else {
      setStep('1');
    }
  },[props.actualStep])

  const HomeTop = () => {
    return (
      <Flex w="100vw" h="45vh" bgImg={HomeImage} bgRepeat={"no-repeat"} bgSize={"cover"}>
      </Flex>
    );
  }

  const HomeMiddle = () => {
    return (
      <Box w="100vw" h="10vh" bgColor={"#0B4A6F"}>

        <Flex alignItems="center" h="100%">
          {step === '2' ?
            <BackButton breakWord={false} ml="10" mt="0" click={handleBackCheckin} isCheckin={false}/> : ''}
          <Text textAlign={['center']} w="100%" color="#FFF" fontSize="36">
            QDI Online Check-In
          </Text>
        </Flex>
      </Box>
    );
  }


  const Content: FC<{ children: JSX.Element }> = ({children}) => {
    return (
      <Center>
        <Box backgroundColor="#1D2939" w="100vw" minH="45vh">
          <Text textAlign={['center']} w="100%" className="title" mt="20" fontSize="60" color="#FFF" fontWeight="600">
            Online Check in
          </Text>
          <Text textAlign={['center']} w="100%" fontSize="34" mt="0" color="#FCFCFD" fontWeight="500">
            {subTitle}
          </Text>
          {children}
        </Box>
      </Center>
    );

  }

  const handleBackCheckin = () => {
    setStep('1');
    setSubTitle('What would you like to do today?')
  }

  const handleClickCheckin = () => {
    setStep('2');
    setChecking(true);
    setSubTitle('Do you already have a reservation?')
    // TODO Criar array com o titulo a partir do step, para alterar apenas o step
  }

  const handleClickCheckout = () => {
    setStep('2');
    setChecking(false);
    setSubTitle('Do you already have a reservation?')
    // TODO Criar array com o titulo a partir do step, para alterar apenas o step
  }

  const handleClickWithReserve = () => {
    if (isCheckin) {
      navigate('/checkin/0')
    } else {
      navigate('/checkout/0')
    }
  }

  const handleClickToReserve = () => {
    if (isCheckin) {
      navigate('/checkin/0')
    } else {
      navigate('/checkout/0')
    }
  }

  return (
    <Fragment>
      <HomeTop/>
      <HomeMiddle/>
      <Content>
        {
          step === '1' ?
            <HomeButtons clickCheckin={handleClickCheckin} clickCheckout={handleClickCheckout}/>
            :
            <ReservationButtons clickWithReserve={handleClickWithReserve} clickToReserve={handleClickToReserve}/>
        }
      </Content>
    </Fragment>
  );

}
