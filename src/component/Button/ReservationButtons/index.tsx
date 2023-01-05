import {Box, Center, Flex, Text} from "@chakra-ui/react";
import React, {FC} from "react";

interface FunctionComponent {
  clickWithReserve: React.MouseEventHandler<HTMLDivElement> | undefined;
  clickToReserve: React.MouseEventHandler<HTMLDivElement> | undefined;
}

export const ReservationButtons: FC<FunctionComponent> = (props) => {

  return (
    <Center overflow="auto">
      <Flex mt="10" mb={20}>
        <Box w="370px" h="71px" backgroundColor="#0D8845" className="checkin-button" ml="0"
             onClick={props.clickWithReserve}>
          <Text textAlign={['center']} className="checkin-label" color="#FFF" fontWeight={700} fontSize={28}>
            Yes, I have a reservation
          </Text>
        </Box>

        <Box w="370px" h="71px" backgroundColor="#D92D20" className="checkin-button" ml="30"
             onClick={props.clickToReserve}>
          <Text textAlign={['center']} className="checkin-label" color="#FFF" fontWeight={700} fontSize={28}>
            No, I want to reserve now
          </Text>
        </Box>
      </Flex>
    </Center>

  );

}
