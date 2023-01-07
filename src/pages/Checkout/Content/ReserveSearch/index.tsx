import {Box, Center, Flex, FormControl, FormLabel, GridItem, Input, SimpleGrid, Text, VStack} from "@chakra-ui/react";
import React, {Fragment} from "react";
import {PrimaryButton} from "../../../../component/Button/PrimaryButton";
import {CheckoutContext} from "../../../../context/checkout";
import {useDisclosure} from "@chakra-ui/hooks";
import {ModalReserve} from "../../../../component/ModalReserve";

export const ReserveCheckoutSearch = () => {

  const context = React.useContext(CheckoutContext);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleClickNextStep = () => {
    context.forwardStep(context.state.step + 1);
  }


  return (

    <Fragment>

      <VStack>
        <Center mt={5}>
          <Text textAlign={['left']} w="100%" fontSize="34" fontWeight={600} color={"#121212"}>
            Please enter the last six digits of your reservation #
          </Text>
        </Center>
      </VStack>

      <Box mt={5} ml={60} mr={60}>
        <form>
          <FormControl>
            <FormLabel htmlFor='code' fontWeight={400} color={"#121212"} fontSize="16" fontFamily={"Inter"}>Enter
              your booking code below</FormLabel>
            <Input
              id='name'
              placeholder='Your reservation'
            />
          </FormControl>
        </form>
      </Box>


      <Box mt={5} ml={60} mr={60}>
        <Flex>
          <Center w={"100%"} mr={10}>
            <Box border="2px solid #D0D5DD" w="100%"></Box>
          </Center>
          <Text textAlign={['left']} fontSize="22" fontWeight={600} color={"#767676"}>
            OR
          </Text>
          <Center w={"100%"} ml={10}>
            <Box border="2px solid #D0D5DD" w="100%"></Box>
          </Center>
        </Flex>
      </Box>

      <Center>
        <Box mt={5}>
          <Text textAlign={['left']} fontSize="28" fontWeight={600} color={"#121212"}>
            Enter your full name
          </Text>
        </Box>
      </Center>

      <Box mt={5} ml={60} mr={60}>
        <form>
          <FormControl>
            <SimpleGrid columns={2} columnGap={25}>
              <GridItem>
                <FormLabel htmlFor='code' fontWeight={400} color={"#121212"} fontSize="16" fontFamily={"Inter"}>Enter
                  your name in the field below</FormLabel>
                <Input
                  id='name'
                  placeholder='Name'
                />
              </GridItem>

              <GridItem>
                <FormLabel htmlFor='code' fontWeight={400} color={"#121212"} fontSize="16" fontFamily={"Inter"}>Enter
                  your last name</FormLabel>
                <Input
                  id='name'
                  placeholder='Last name'
                />
              </GridItem>

            </SimpleGrid>


          </FormControl>


        </form>
      </Box>

      <Center mb={10}>
        <PrimaryButton text={'Confirm'} click={onOpen} mt={10} ml={0}/>
      </Center>

      <ModalReserve onOpen={onOpen} handleClickNextStep={handleClickNextStep} isOpen={isOpen} onClose={onClose}></ModalReserve>
    </Fragment>
  );

}
