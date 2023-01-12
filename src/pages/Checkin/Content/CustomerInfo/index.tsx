import {Box, Center, FormControl, FormLabel, GridItem, Input, SimpleGrid, Text} from "@chakra-ui/react";
import React, {Fragment} from "react";
import {PrimaryButton} from "../../../../component/Button/PrimaryButton";
import {CheckinContext} from "../../../../context/checkin";
import {KeyboardComponent} from "../../../../component/Keyboard";
import {toast} from "react-toastify";

export const CustomerInfo = () => {

  const context = React.useContext(CheckinContext);

  const INPUTS_PAGE = "inputsCustomerInfo";

  const handleClickNextStep = async () => {
    await context.validateAllFields(INPUTS_PAGE);

    if (!context.isCustomerInfoFormValid()) {
      toast.error('Please, fill in the fields below.');
    } else {
      context.fowardStep(context.state.step + 1);
    }
  }

  const onChangeInput = (e: any) => {
    console.log('alterar para funcionar no pai, isso é para escrever pelo teclado normal, não é tão importante')
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
          <SimpleGrid columns={5} columnGap={25} mt={10}>
            <GridItem colSpan={2}>
              <FormControl isInvalid={context.isValidField("phone", INPUTS_PAGE)}>
                <FormLabel htmlFor='phone' fontWeight={400} color={"#121212"} fontSize="16" fontFamily={"Inter"}>Enter
                  your phone number*</FormLabel>
                <Input
                  id='phone'
                  value={context.getInputValue("phone", INPUTS_PAGE)}
                  onChange={(e) => onChangeInput(e)}
                  onFocus={() => {
                    context.openKeyboard()
                    context.setInputName("phone");
                  }}
                />
              </FormControl>
            </GridItem>

            <GridItem colSpan={2}>
              <FormControl isInvalid={context.isValidField("zipcode", INPUTS_PAGE)}>
                <FormLabel htmlFor='zipcode' fontWeight={400} color={"#121212"} fontSize="16" fontFamily={"Inter"}>Zip
                  Code*</FormLabel>
                <Input
                  id='zipcode'
                  value={context.getInputValue("zipcode", INPUTS_PAGE)}
                  onChange={(e) => onChangeInput(e)}
                  onFocus={() => {
                    context.openKeyboard()
                    context.setInputName("zipcode");
                  }}
                />
              </FormControl>
            </GridItem>

            <GridItem>
              <FormControl isInvalid={context.isValidField("country", INPUTS_PAGE)}>

                <FormLabel htmlFor='country' fontWeight={400} color={"#121212"} fontSize="16"
                           fontFamily={"Inter"}>Country*</FormLabel>
                <Input
                  id='country'
                  value={context.getInputValue("country", INPUTS_PAGE)}
                  onChange={(e) => onChangeInput(e)}
                  onFocus={() => {
                    context.openKeyboard()
                    context.setInputName("country");
                  }}
                />
              </FormControl>
            </GridItem>

            <GridItem colSpan={2}>
              <FormControl isInvalid={context.isValidField("email", INPUTS_PAGE)}>

                <FormLabel htmlFor='email' fontWeight={400} color={"#121212"} fontSize="16" fontFamily={"Inter"}>Enter
                  your main Email*</FormLabel>
                <Input
                  id='email'
                  value={context.getInputValue("email", INPUTS_PAGE)}
                  onChange={(e) => onChangeInput(e)}
                  onFocus={() => {
                    context.openKeyboard()
                    context.setInputName("email");
                  }}
                />
              </FormControl>
            </GridItem>

            <GridItem colSpan={3}>
              <FormControl isInvalid={context.isValidField("address", INPUTS_PAGE)}>

                <FormLabel htmlFor='address' fontWeight={400} color={"#121212"} fontSize="16" fontFamily={"Inter"}>Enter
                  your Address*</FormLabel>
                <Input
                  id='address'
                  value={context.getInputValue("address", INPUTS_PAGE)}
                  onChange={(e) => onChangeInput(e)}
                  onFocus={() => {
                    context.openKeyboard()
                    context.setInputName("address");
                  }}
                />
              </FormControl>
            </GridItem>
            <GridItem colSpan={2}></GridItem>
            <GridItem colSpan={2}>
              <FormControl isInvalid={context.isValidField("city", INPUTS_PAGE)}>

                <FormLabel htmlFor='city' fontWeight={400} color={"#121212"} fontSize="16"
                           fontFamily={"Inter"}>City*</FormLabel>
                <Input
                  id='city'
                  value={context.getInputValue("city", INPUTS_PAGE)}
                  onChange={(e) => onChangeInput(e)}
                  onFocus={() => {
                    context.openKeyboard()
                    context.setInputName("city");
                  }}
                />
              </FormControl>
            </GridItem>

            <GridItem>
              <FormControl isInvalid={context.isValidField("state", INPUTS_PAGE)}>

                <FormLabel htmlFor='state' fontWeight={400} color={"#121212"} fontSize="16"
                           fontFamily={"Inter"}>State*</FormLabel>
                <Input
                  id='state'
                  value={context.getInputValue("state", INPUTS_PAGE)}
                  onChange={(e) => onChangeInput(e)}
                  onFocus={() => {
                    context.openKeyboard()
                    context.setInputName("state");
                  }}
                />
              </FormControl>
            </GridItem>
          </SimpleGrid>

        </form>
      </Box>

      <KeyboardComponent page={INPUTS_PAGE}/>

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
