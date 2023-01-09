import {Box, Center, Flex, Text} from "@chakra-ui/react";
import React, {useEffect, useState} from "react";
import {PrimaryButton} from "../../../../component/Button/PrimaryButton";
import {CheckinContext} from "../../../../context/checkin";
import {BsCheckSquareFill} from "react-icons/bs";
import {GrCheckbox} from "react-icons/gr";
import _ from "lodash";
import useFetch from "../../../../hooks/useFetch";
import {policiesMock} from "../../../../mocks/policies";
import {toast} from "react-toastify";

export const Policy = () => {
  let {data} = useFetch('https://jsonplaceholder.typicode.com/posts', null);
  data = policiesMock;
  const [hotelPolicy] = useState(_.get(_.first(policiesMock), 'description'));


  const context = React.useContext(CheckinContext);

  const style = {color: "#0D8845", size: "60"}

  const [checked, setChecked] = useState(context.state.policyChecked);


  useEffect(() => {
    context.state.policyChecked = checked;
  }, [checked]);


  const handleCheckReadPolicy = () => {
    setChecked(!checked);
    return;
  }

  const handleClickNextStep = () => {
    if (!checked) {
      toast.error('Please check consent.');
      return;
    }

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

      <Box mt={5}>
        <Text textAlign={['left']} w="100%" fontSize="22" fontWeight={700} color={"#475467"}>
          HOTEL POLICIES
        </Text>
      </Box>

      <Box ml={10} mr={20}>
        {hotelPolicy}
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
