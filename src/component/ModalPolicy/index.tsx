import React, {FC, useState} from "react";
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

export const ModalPolicy:FC<{title : string,content: string[], onOpen:any, isOpen:any, onClose: any, agree: string}> = (props) => {

  const style = {color: "#0D8845", size: "60"}

  const [checked, setChecked] = useState(false);

  const contentIterate = () =>{
    const listItems = props.content.map((item) =>
      <li key={item}>
        <Text textAlign={['left']} w="100%" fontSize="20px" fontWeight={400} color={"#1A1A1A"} >
        {item}</Text>
        </li>
    );

    return (<ul>{listItems}</ul>);
  }

  const handleCheckReadPolicy = () => {
    setChecked(!checked);
    return ;
  }

  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose} size="6xl" >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{props.title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody ml={10}>
          {contentIterate()}
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
