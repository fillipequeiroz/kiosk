import {Box, Center, Flex, Text} from "@chakra-ui/react";
import React, {useState} from "react";
import {PrimaryButton} from "../../../../component/Button/PrimaryButton";
import {CheckinContext} from "../../../../context/checkin";
import {BsCheckSquareFill} from "react-icons/bs";
import {GrCheckbox} from "react-icons/gr";

export const Policy = () => {
  const policyItems = [
    'Minimum age of 21 and a valid photo ID are required for check-in',
    'Guests must observe a maximum occupancy of 2 people for rooms with 1 King bed an 4 people for rooms with 2 Queen beds.',
    'Smoking is not permitted throughout the property, except in designated smoking areas. In case of smoking inside the property, ' +
    'the Hotel has the right to charge a cleaning fee of $200 before or after check-out',
    'The hotel is not responsible for any loss or damage to personal valuables.',
    'The cancellation policy varies from time to time reservation an in case of no show or cancellation within the window, ' +
    'a penalty equivalent to 1 night will be charged as a no-show or cancellation fee.',
    'All guests visiting our hotel and facilities are required to wear masks and prctice 6-foot social spacing in accordance with CDC guidelines. ' +
    'The guest stays at the hotel at his own risk and is aware of the potential dangers of injury, illness, infection, contracting COVID 19 or death, ' +
    'regardless of the numerous precautionary measures the hotel has taken. I, by means of this instrument, waive, exonerate and release the hotel,' +
    'its owners, employees and / or executives from any and all complaints and responsibilities.',
  ];

  const context = React.useContext(CheckinContext);

  const style = {color: "#0D8845", size: "60"}

  const [checked, setChecked] = useState(false);

  const contentIterate = () => {
    const listItems = policyItems.map((item) =>
      <li key={item}>
        <Text textAlign={['left']} w="100%" fontSize="20px" fontWeight={400} color={"#1A1A1A"}>
          {item}</Text>
      </li>
    );

    return (<ul>{listItems}</ul>);
  }

  const handleCheckReadPolicy = () => {
    setChecked(!checked);
    return;
  }

  const handleClickNextStep = () => {
    context.fowardStep(context.state.step + 1);
  }


  return (
    <Flex direction={"column"} ml={20}>

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
            Please read the privacy policy carefully
          </Text>
        </Box>
      </Center>

      <Box mt={20}>
        <Text textAlign={['left']} w="100%" fontSize="22" fontWeight={700} color={"#475467"}>
          HOTEL POLICIES
        </Text>
      </Box>

      <Box ml={10} >
        {contentIterate()}
      </Box>



      <Center w={"100%"} mr={10} mt={10}>
        <Box border="1px solid #949494" w="90%"></Box>
      </Center>

      <Flex alignItems={"center"}>
        {checked ? <BsCheckSquareFill style={style} size={40} cursor="pointer" onClick={handleCheckReadPolicy}/> :
          <GrCheckbox style={style} size={40} cursor="pointer" onClick={handleCheckReadPolicy}/>}
        <Text textAlign={['left']} w="100%" fontSize="16px" fontWeight={600} color={"#475467"} ml={5}>
          By cheking the box, I eletronically sign this document and also declare and guarantee that it supplies read
          and agreed to the Hotel Policies
        </Text>
      </Flex>
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
    </Flex>
  );

}
