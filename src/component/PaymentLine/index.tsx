import React, {FC, Fragment} from "react";
import {Box, Center, Flex, Text} from "@chakra-ui/react";


export const PaymentLine: FC<{ label: string,secondLabel: string, value: string, mt: number }> = (props) => {


  return (
    <Fragment>
      <Flex mt={props.mt} justifyContent="space-between" alignItems="center">
        <Flex alignItems="center">
          <Text textAlign={['left']} fontSize="28" fontWeight={600} color={"#1A1A1A"}>
            {props.label}
          </Text>
          <Text textAlign={['left']} fontSize="22" fontWeight={400} color={"#1A1A1A"} ml={3}>
            {props.secondLabel}
          </Text>
        </Flex>
        <Flex>
          <Text textAlign={['right']} fontSize="28" fontWeight={400} color={"#1A1A1A"}>
            {props.value}
          </Text>
        </Flex>
      </Flex>

      <Center w={"100%"} mt={5}>
        <Box border="1px solid #D0D5DD" w="100%"></Box>
      </Center>
    </Fragment>
  );

}
