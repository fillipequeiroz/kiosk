import React from "react";
import {Flex, Text} from "@chakra-ui/react";

export const PolicyButton: React.FC<{ onOpen: any, label: string, h: number, mt: number}> = (props) => {

  return (
    <Flex w="30%" border="2px solid #0D8845" borderRadius="16px" h={props.h} mt={props.mt} alignItems="center" cursor="pointer"
          onClick={props.onOpen}>
      <Text textAlign={['center']} w="100%" fontSize="18" fontWeight={700} color={"#0D8845"} >
        {props.label}
      </Text>
    </Flex>
  );

}
