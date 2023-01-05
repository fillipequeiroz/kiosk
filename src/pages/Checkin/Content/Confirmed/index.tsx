import {Box, Center, Flex, Text} from "@chakra-ui/react";
import React, {Fragment} from "react";
import {PrimaryButton} from "../../../../component/Button/PrimaryButton";
import {CheckinContext} from "../../../../context/checkin";

export const Confirmed = () => {

  const context = React.useContext(CheckinContext);
  const handleClickNextStep = () => {
    context.fowardStep(context.state.step + 1);
  }


  return (
    <Fragment>

      <Center>
        <Box>
          <Text textAlign={['center']} w="100%" fontSize="36" fontWeight={700} color={"#475467"}>
            Checking confirmation
          </Text>
        </Box>
      </Center>
      <Center>
        <Box>
          <Text textAlign={['center']} w="100%" fontSize="28" fontWeight={600} color={"#475467"}>
            Congratulations, your check in has been confirmed successfully
          </Text>
        </Box>
      </Center>
      <Flex>
        <Center w={"100%"} mr={0} mt={30} ml={10}>
          <Box border="2px solid #D0D5DD" w="95%"></Box>
        </Center>
        <Center w={"100%"} mr={10} mt={30}>
          <Box border="2px solid #D0D5DD" w="95%"></Box>
        </Center>
      </Flex>

      <Flex justifyContent="space-evenly">
        <Box ml={10}>
          <Center>
            <Box mt={2}>
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
        </Box>

        <Box ml={10}>
          <Center>
            <Box mt={2}>
              <Text textAlign={['left']} w="100%" fontSize="28" fontWeight={600} color={"#475467"}>
                Your room (s)
              </Text>
            </Box>
          </Center>

          <Center>
            <Box>
              <Text textAlign={['left']} w="100%" fontSize="34" fontWeight={600} color={"#121212"}>
                239 - 242
              </Text>
            </Box>
          </Center>
        </Box>
      </Flex>

      <Flex>
        <Center w={"100%"} mr={0} mt={30} ml={10}>
          <Box border="2px solid #D0D5DD" w="95%"></Box>
        </Center>
        <Center w={"100%"} mr={10} mt={30}>
          <Box border="2px solid #D0D5DD" w="95%"></Box>
        </Center>
      </Flex>

      <Box ml={20} mt={5} mr={20}>
        <Text textAlign={['left']} w="100%" fontSize="22" fontWeight={600} color={"#000000"}>
          Check in: Oct 27 2020 at 4pm | Check out: Oct 30 2020 at 11am
        </Text>
      </Box>


      <Center >
        <Box mt={10}>
          <Text textAlign={['left']} w="100%" fontSize="20" fontWeight={600} color={"#475467"}>
            Please proceed to the front desk to retrieve your keycard
          </Text>
        </Box>
      </Center>
      <Center>
        <PrimaryButton text={'Ok, i will go to the front desk'} click={handleClickNextStep} mt={5} ml={0}/>
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
