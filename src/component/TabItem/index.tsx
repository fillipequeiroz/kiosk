import React, {FC, Fragment} from "react";
import {Box, Center, Text} from "@chakra-ui/react";

export const TabItemComponent: FC<{ label: string, icon: any, selected: boolean, click: React.MouseEventHandler<HTMLDivElement> }> = (props) => {

  const TabItem = () => {
    return (
        <Box onClick={props.click}  h="152px" backgroundColor={"#FFF"} borderRadius={24} mt={10} cursor="pointer">
          <Center height={"100%"} width={"100%"}>
            <Box>
              <Center>
                {props.icon}
              </Center>
              <Text textAlign={['left']} w="100%" fontSize="28" mt="4" fontWeight={600}>
                {props.label}
              </Text>
            </Box>
          </Center>
        </Box>
    );
  }

  const SelectedTabItem = () => {
    return (
        <Box onClick={props.click} h="152px" backgroundColor={"#1D2939"} borderRadius={24} mt={10} cursor="pointer" border={1} borderColor={"#FFF"} borderStyle={"solid"}>
          <Center height={"100%"} width={"100%"}>
            <Box>
              <Center>
                {props.icon}
              </Center>
              <Text textAlign={['left']} w="100%" fontSize="28" mt="4" fontWeight={600} color={"#FFF"}>
                {props.label}
              </Text>
            </Box>
          </Center>
        </Box>
    );
  }

  //TODO transformar esses boxs em apenas 1, alternando de qual objeto buscar as propriedades dentro de um objeto

  return (
    <Fragment>
      {props.selected === true ? <SelectedTabItem/> : <TabItem/>}
    </Fragment>
  );

}
