import {Box, Center, FormControl, FormLabel, GridItem, Input, SimpleGrid, Text} from "@chakra-ui/react";
import React, {Fragment} from "react";
import './index.css';
import {PrimaryButton} from "../../../../component/Button/PrimaryButton";
import {CheckinContext} from "../../../../context/checkin";

export const CustomerInfo = () => {

  const context = React.useContext(CheckinContext);


  const handleClickNextStep = () => {
    context.fowardStep(context.state.step + 1);
  }

  return (

    <Fragment>
      <Box ml={50} mr={50}>
        <Center>
          <Box>
            <Text textAlign={['left']} w="100%" fontSize="34" mt="5" fontWeight={600} color={"#121212"}>
              Check in
            </Text>
          </Box>
        </Center>

        <Center>
          <Box>
            <Text textAlign={['left']} w="100%" fontSize="34" fontWeight={600} color={"#121212"}>
              Please provide the information below
            </Text>
          </Box>
        </Center>

        <form>
          <FormControl mt={10}>
            <SimpleGrid columns={5} columnGap={25}>
              <GridItem colSpan={2}>
                <FormLabel htmlFor='phone' fontWeight={400} color={"#121212"} fontSize="16" fontFamily={"Inter"}>Enter
                  your phone number*</FormLabel>
                <Input
                  id='phone'
                />
              </GridItem>

              <GridItem>
                <FormLabel htmlFor='zipcode' fontWeight={400} color={"#121212"} fontSize="16" fontFamily={"Inter"}>Zip
                  Code*</FormLabel>
                <Input
                  id='zipcode'
                />
              </GridItem>

              <GridItem alignSelf="self-end">
                <Box w="191px" h="59px" backgroundColor={"#0D8845"} className="zipcode-button"  id="zipcodebutton">
                  <Text textAlign={['center']} className="checkin-label" color={"#FFF"} fontSize={18} fontWeight={700}>
                    Check Zip Code
                  </Text>
                </Box>
              </GridItem>

              <GridItem>
                <FormLabel htmlFor='country' fontWeight={400} color={"#121212"} fontSize="16"
                           fontFamily={"Inter"}>Country*</FormLabel>
                <Input
                  id='country'
                />
              </GridItem>

              <GridItem colSpan={2}>
                <FormLabel htmlFor='email' fontWeight={400} color={"#121212"} fontSize="16" fontFamily={"Inter"}>Enter
                  your main Email*</FormLabel>
                <Input
                  id='email'
                />
              </GridItem>

              <GridItem colSpan={3}>
                <FormLabel htmlFor='email' fontWeight={400} color={"#121212"} fontSize="16" fontFamily={"Inter"}>Enter
                  your Address*</FormLabel>
                <Input
                  id='email'
                />
              </GridItem>
              <GridItem colSpan={2}></GridItem>
              <GridItem colSpan={2}>
                <FormLabel htmlFor='city' fontWeight={400} color={"#121212"} fontSize="16"
                           fontFamily={"Inter"}>City*</FormLabel>
                <Input
                  id='city'
                />
              </GridItem>

              <GridItem>
                <FormLabel htmlFor='state' fontWeight={400} color={"#121212"} fontSize="16"
                           fontFamily={"Inter"}>State*</FormLabel>
                <Input
                  id='state'
                />
              </GridItem>
            </SimpleGrid>


          </FormControl>


        </form>
      </Box>

      <Center>
        <PrimaryButton text={'Next'} click={handleClickNextStep} mt={50} ml={5}/>
      </Center>

      <Center>
        <Box>
          <Text w="100%" fontSize="18" fontWeight={700} color={"#121212"} mb={10} mt={10}>
            {context.state.step}/{context.state.totalSteps}
          </Text>
        </Box>
      </Center>
    </Fragment>
  );

}
