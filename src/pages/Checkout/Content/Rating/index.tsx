import {Box, Center, Flex, Input, Text} from "@chakra-ui/react";
import React, {Fragment} from "react";
import {CheckoutContext} from "../../../../context/checkout";
import {Rating} from "react-simple-star-rating";
import {BsArrowRight} from "react-icons/bs";

export const RatingHotel = () => {

  const context = React.useContext(CheckoutContext);
  const handleClickNextStep = () => {
    context.forwardStep(context.state.step + 1);
  }

  const handleRating = (rate: number) => {
    context.state.rate = rate;
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

      <Center mt={5}>
        <Text textAlign={['center']} w="100%" fontSize="34" fontWeight={600} color={"#121212"}>
          Confirmation
        </Text>
      </Center>

      <Center>
        <Text textAlign={['center']} w="100%" fontSize="25" fontWeight={600} color={"#475467"}>
          Please, rate your experience before finalizing check out
        </Text>
      </Center>


      <Center w={"100%"} mr={10}>
        <Box>
          <Rating
            onClick={handleRating}
            size={90}
            initialValue={context.state.rate}
          />
        </Box>
      </Center>

      <Center>
        <Flex w="30%" border="2px solid #0D8845" borderRadius="26px" minHeight={12} alignItems="center"
              cursor="pointer" onClick={handleClickNextStep}>
          <Text textAlign={['center']} w="100%" fontSize="18" fontWeight={700} color={"#0D8845"}>
            Confirm
          </Text>
        </Flex>
      </Center>

      <Flex mt={5}>
        <Box w="100%" ml={5}>
          <Text textAlign={['left']} w="100%" fontSize="16" fontWeight={400} color={"#121212"}>
            What did you like most about staying with us
          </Text>
          <Input
            id='name'
            placeholder='What did you like about the hosting?'
            w="90%"
          />
        </Box>

        <Box w="100%">
          <Text textAlign={['left']} w="100%" fontSize="16" fontWeight={400} color={"#121212"}>
            Inform here what you liked least
          </Text>
          <Input w="90%"
                 id='name'
                 placeholder="What didn't you like about the hosting?"
          />
        </Box>
      </Flex>

      <Center mt={5}>
        <Flex cursor="pointer" onClick={handleClickNextStep}>
          <Text textAlign={['left']} fontSize="18" fontWeight={700} color={"#111111"}>
            Skip rating and check out
          </Text>
          <Flex ml={3} alignItems="center">
            <BsArrowRight></BsArrowRight>
          </Flex>
        </Flex>
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
