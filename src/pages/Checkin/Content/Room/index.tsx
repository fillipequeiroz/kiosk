import {Box, Center, FormControl, FormLabel, Select, Text} from "@chakra-ui/react";
import React, {Fragment} from "react";
import {PrimaryButton} from "../../../../component/Button/PrimaryButton";
import {CheckinContext} from "../../../../context/checkin";

export const Room = () => {

  const context = React.useContext(CheckinContext);

  const handleClickNextStep = () => {
    context.fowardStep(context.state.step + 1);
  }

  return (

    <Fragment>
      <Box>

        <Center>
          <Text textAlign={['center']} w="100%" fontSize="34" fontWeight={600} color={"#121212"}>
            Please, select a room
          </Text>
        </Center>

        <Center>
          <Box mt={10}>
            <FormControl  alignItems='center'>
              <FormLabel htmlFor='room' fontWeight={400} color={"#121212"} fontSize="16"
                         fontFamily={"Inter"}>Room number</FormLabel>
              <Select placeholder="Select a room"
                      id='room'
                      minW={60}
              >
                <option value='option1'>103</option>
                <option value='option1'>146</option>
                <option value='option1'>215</option>
                <option value='option1'>301</option>
                <option value='option1'>307</option>

              </Select>
            </FormControl>
          </Box>
        </Center>


        <Center>
          <PrimaryButton text={'Next'} click={handleClickNextStep} mt={10} ml={0}/>
        </Center>

        <Center>
          <Box>
            <Text w="100%" fontSize="18" fontWeight={700} color={"#121212"} mb={5} mt={5}>
              {context.state.step}/{context.state.totalSteps}
            </Text>
          </Box>
        </Center>
      </Box>
    </Fragment>
  );

}