import {Box, Center, Text} from "@chakra-ui/react";
import React from "react";

export const PrimaryButton: React.FC<{ click: React.MouseEventHandler<HTMLDivElement> | undefined, text: string, mt: number | undefined
  , ml: number | undefined}> = (props) => {

  return (
    <Center>
      <Box  h="71px" backgroundColor={"#0D8845"} className="checkin-button" mt={props.mt}
           minW={370}
      ml={props.ml}
           onClick={props.click}>
        <Text textAlign={['center']}  color={"#FFF"} fontWeight={700} fontSize={28}>
          {props.text}
        </Text>
      </Box>
    </Center>

  );

}
