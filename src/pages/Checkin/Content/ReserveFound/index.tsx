import {Box, Center, Text} from "@chakra-ui/react";
import React, {Fragment} from "react";
import {PrimaryButton} from "../../../../component/Button/PrimaryButton";
import {CheckinContext} from "../../../../context/checkin";

export const ReserveFound = () => {

  const context = React.useContext(CheckinContext);
  const handleClickNextStep = () => {
    context.fowardStep(context.state.step + 1);
  }



  return (
    <Fragment>
      <Center>
        <Box>
          <Text textAlign={['left']} w="100%" fontSize="36" mt="4" fontWeight={700} color={"#475467"}>
            QDI
          </Text>
        </Box>
      </Center>

      <Center>
        <Box>
          <Text textAlign={['left']} w="100%" fontSize="36" fontWeight={700} color={"#475467"}>
            Online Check-In
          </Text>
        </Box>
      </Center>

      <Center>
        <Box>
          <Text textAlign={['left']} w="100%" fontSize="34" mt="5" fontWeight={600} color={"#121212"}>
            Your check in is available
          </Text>
        </Box>
      </Center>

      <Center>
        <Box>
          <Text textAlign={['left']} w="100%" fontSize="28" fontWeight={600} color={"#475467"}>
            Congratulations!!!
          </Text>
        </Box>
      </Center>
      <Center w={"100%"} mr={10} mt={3}>
        <Box border="2px solid #D0D5DD" w="50%"></Box>
      </Center>

      <Center>
        <Box mt={5}>
          <Text textAlign={['left']} w="100%" fontSize="28" fontWeight={600} color={"#475467"}>
            Reservation #
          </Text>
        </Box>
      </Center>

      <Center>
        <Box>
          <Text textAlign={['left']} w="100%" fontSize="34" fontWeight={600} color={"#121212"}>
            1151 - 111111111
          </Text>
        </Box>
      </Center>

      <Center w={"100%"} mr={10} mt={3}>
        <Box border="2px solid #D0D5DD" w="50%"></Box>
      </Center>

      <Box ml={20} mt={5} mr={20}>
        <Text textAlign={['left']} w="100%" fontSize="22" fontWeight={600} color={"#000000"}>
          Check in: Oct 27 2020 at 4pm | Check out: Oct 30 2020 at 11am
        </Text>
      </Box>

      <Center>
        <PrimaryButton text={'Next'} click={handleClickNextStep} mt={5} ml={0}/>
      </Center>

      <Center>
        <Box>
          <Text w="100%" fontSize="18" fontWeight={700} color={"#121212"} mb={5} mt={5}>
            {context.state.step}/{context.state.totalSteps}
          </Text>
        </Box>
      </Center>
    </Fragment>
  );

}
