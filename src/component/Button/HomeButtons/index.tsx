import {Box, Center, Flex, Text} from "@chakra-ui/react";
import React from "react";
import {BsCalendarCheck} from "react-icons/bs";

export const HomeButtons: React.FC<{ clickCheckin: React.MouseEventHandler<HTMLDivElement> | undefined,
  clickCheckout: React.MouseEventHandler<HTMLDivElement> | undefined }> = (props) => {

  return (
    <Center overflow="auto">
      <Flex mt="10" mb={20}>
        <Box w="370px" h="71px" backgroundColor="#FFF" className="checkin-button" onClick={props.clickCheckin}>
          <Text textAlign={['center']} fontWeight={700} fontSize={28}>
            Check in
          </Text>
          <BsCalendarCheck size={25} ></BsCalendarCheck>
        </Box>
        <Box w="370px" h="71px" backgroundColor="#FFF" className="checkin-button" ml="20" onClick={props.clickCheckout}>
          <Text textAlign={['center']} fontWeight={700} fontSize={28}>
            Check out
          </Text>
          <BsCalendarCheck size={25} ></BsCalendarCheck>
        </Box>
      </Flex>
    </Center>

  );

}
