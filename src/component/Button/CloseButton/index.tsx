import {Box, Center, Circle, Flex, Text} from "@chakra-ui/react";
import React from "react";
import {GrClose} from "react-icons/gr";
import {useNavigate} from "react-router-dom";

export const CloseButton: React.FC<{ click: any }> = (props) => {

  const navigate = useNavigate();

  const handleClickClose = () => {
    navigate('/home/1');
  }
  return (
    <Flex position={"absolute"} right={5} top={10} >
      <Box width={70} cursor="pointer" onClick={handleClickClose}>
        <Center>
          <Box>
            <Center>
              <Circle backgroundColor="#FFF" size="30">
                <GrClose/>
              </Circle>
            </Center>
            <Text textAlign={['left']} w="100%" color="#FFF" fontSize="16" mt="4" fontWeight={700}>
              Close
            </Text>
          </Box>
        </Center>
      </Box>
    </Flex>
  );

}
