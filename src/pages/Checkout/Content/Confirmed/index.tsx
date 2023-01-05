import {Box, Center, Text} from "@chakra-ui/react";
import React, {Fragment} from "react";
import {PrimaryButton} from "../../../../component/Button/PrimaryButton";
import {CheckoutContext} from "../../../../context/checkout";

export const CheckoutConfirmed = () => {

  const context = React.useContext(CheckoutContext);
  const handleClickNextStep = () => {
    context.forwardStep(context.state.step + 1);
  }


  return (
    <Fragment>
      <Center>
        <Text textAlign={['center']} w="100%" fontSize="36" mt="4" fontWeight={700} color={"#475467"}>
          QDI
        </Text>
      </Center>

      <Center>
        <Text textAlign={['center']} w="100%" fontSize="36" fontWeight={700} color={"#475467"}>
          Online Check-Out
        </Text>
      </Center>

      <Center mt={15}>
        <Text textAlign={['center']} w="100%" fontSize="34" fontWeight={600} color={"#121212"}>
          Thank you
        </Text>
      </Center>

      <Center>
        <Text textAlign={['center']} w="100%" fontSize="25" fontWeight={600} color={"#475467"}>
          for staying with us, see you soon
        </Text>
      </Center>

      <Center>
        <PrimaryButton text={'Finish'} click={handleClickNextStep} mt={55} ml={0}  />
      </Center>

      <Box marginBottom={20}></Box>
    </Fragment>
  );

}
