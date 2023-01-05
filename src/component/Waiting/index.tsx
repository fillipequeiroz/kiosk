import React, {FC} from "react";
import {Box, Center, Flex, Text} from "@chakra-ui/react";
import './index.css';
import {ImSpinner3} from "react-icons/im";

export const Waiting: FC<{ label: string, secondLabel: string }> = (props) => {


  return (
    <Flex alignItems="center" justifyContent="center" flexDirection="column" mt={10}>
      <ImSpinner3 className="rotate" size={50} />
      <Text textAlign={['center']} fontSize="34" fontWeight={600} color={"#121212"} mt={5}>
        {props.label}
      </Text>
      <Text textAlign={['center']} fontSize="20" fontWeight={600} color={"#475467"} mt={5}>
        {props.secondLabel}
      </Text>
      <Center mt={10}>
        <Box>
          <Text textAlign={['left']} w="100%" fontSize="36"  fontWeight={700} color={"#475467"}>
            QDI
          </Text>
        </Box>
      </Center>

      <Center>
        <Box>
          <Text textAlign={['left']} w="100%" fontSize="36" fontWeight={700} color={"#475467"} mb={5}>
            Online Check-In
          </Text>
        </Box>
      </Center>
    </Flex>
  );

}
