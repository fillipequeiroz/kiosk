import {Box, Center, Circle, Flex, Text} from "@chakra-ui/react";
import React, {Fragment} from "react";
import {BsArrowLeft} from "react-icons/bs";
import {CheckinContext} from "../../../context/checkin";
import {CheckoutContext} from "../../../context/checkout";

export const BackButton: React.FC<{ ml: string, click: any, mt: string, breakWord: boolean | undefined, isCheckin: boolean }> = (props) => {

  const checkinContext = React.useContext(CheckinContext);
  const checkoutContext = React.useContext(CheckoutContext);

  const handleBackClick = () => {
    let context = props.isCheckin ? checkinContext : checkoutContext;
    let {step} = context.state;
    context.backStep(step - 1)
  }


  const BackButtonFromHome = () => {
    return (
      <Flex cursor="pointer" ml={props.ml} mt={props.mt} onClick={props.click} position="absolute">

        <Circle backgroundColor="#FFF" size="30">
          <BsArrowLeft/>
        </Circle>

        <Text textAlign={['center']} w="100%" color="#FFF" fontSize="16" ml="2" mt="1" fontWeight={700}>
          Back
        </Text>
      </Flex>
    );
  }

  const BackButton = () => {
    return (

      <Flex position={"absolute"} left={5} top={props.mt}>
        <Box width={70} cursor="pointer" onClick={handleBackClick}>
          <Center>
            <Box>
              <Center>
                <Circle backgroundColor="#FFF" size="30">
                  <BsArrowLeft/>
                </Circle>
              </Center>
              <Text textAlign={['center']} w="100%" color="#FFF" fontSize="16" ml="0" mt="4" fontWeight={700}>
                Back
              </Text>
            </Box>
          </Center>
        </Box>
      </Flex>
    );
  }

  return (
    <Fragment>
      {props.breakWord ? <BackButton/> : <BackButtonFromHome/>}
    </Fragment>
  );

}
