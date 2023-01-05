import {Center, Text} from "@chakra-ui/react";
import React, {Fragment} from "react";

export const Faq = () => {

  return (

    <Fragment>
      <Center mt={5}>
        <Text textAlign={['center']} w="100%" fontSize="34" fontWeight={600} color={"#121212"}>
          Any questions? Check our FAQ for help?
        </Text>
      </Center>

    </Fragment>

  );

}
