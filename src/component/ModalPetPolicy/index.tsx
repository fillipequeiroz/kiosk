import React, {FC, useEffect, useState} from "react";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay
} from "@chakra-ui/modal";
import {Box, Center, Text} from "@chakra-ui/react";
import {BsCheckSquareFill} from "react-icons/bs";
import {GrCheckbox} from "react-icons/gr";
import {policiesMock} from "../../mocks/policies";
import _ from "lodash";
import {CheckinContext} from "../../context/checkin";

export const ModalPetPolicy:FC<{ onOpen:any, isOpen:any, onClose: any, agree: string}> = (props) => {

  const style = {color: "#0D8845", size: "60"}
  // let {data} = useFetch('https://jsonplaceholder.typicode.com/posts', null);
  const data = policiesMock;

  const context = React.useContext(CheckinContext);
  const [checked, setChecked] = useState(context.state.petPolicyChecked);
  const [petPolicy] = useState(_.get(_.last(policiesMock), 'description'));

  useEffect(() => {
    context.state.petPolicyChecked = checked;
  }, [checked]);


  const handleCheckReadPolicy = () => {
    setChecked(!checked);
    return ;
  }

  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose} size="6xl" >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>PETS POLICY</ModalHeader>
        <ModalCloseButton />
        <ModalBody ml={10}>
          {petPolicy}
        </ModalBody>

        <Center w={"100%"} mr={10} mt={10}>
          <Box border="2px solid #D0D5DD" ml={10} mr={10} w="100%"></Box>
        </Center>

        <ModalFooter textAlign="left" justifyContent="start">
          {checked ? <BsCheckSquareFill style={style} size={40} cursor="pointer" onClick={handleCheckReadPolicy} /> : <GrCheckbox style={style} size={40} cursor="pointer" onClick={handleCheckReadPolicy} />}



          <Text textAlign={['left']} w="100%" fontSize="16px" fontWeight={600} color={"#475467"} ml={5} >
            {props.agree}

          </Text>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );

}
