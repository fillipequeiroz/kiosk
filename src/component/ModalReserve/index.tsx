import React, {FC} from "react";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay
} from "@chakra-ui/modal";
import {Center, Checkbox, Flex, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr} from "@chakra-ui/react";
import {PrimaryButton} from "../Button/PrimaryButton";

export const ModalReserve: FC<{ onOpen: any, isOpen: any, onClose: any, handleClickNextStep: any }> = (props) => {


  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose} size="6xl">
      <ModalOverlay/>
      <ModalContent>
        <ModalHeader>
          <Center>
            <Text textAlign={['center']} w="100%" fontSize="34" fontWeight={600} color={"#121212"}>
              Bookings found
            </Text>
          </Center>
        </ModalHeader>
        <ModalCloseButton/>
        <ModalBody ml={10} mr={10}>
          <Flex border={"1px solid #949494"} borderRadius={"12px"}>
            <TableContainer w={"100%"}>
              <Table variant='simple'>
                <Thead>
                  <Tr>
                    <Th><Checkbox></Checkbox></Th>
                    <Th>Confirmation Code</Th>
                    <Th>First name</Th>
                    <Th>Last name</Th>
                    <Th>Arrival date</Th>
                    <Th>Departure date</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td><Checkbox></Checkbox></Td>
                    <Td>1231412312</Td>
                    <Td>Teste</Td>
                    <Td>da Silva</Td>
                    <Td>06/15/2023</Td>
                    <Td>10/15/2023</Td>
                  </Tr>
                  <Tr>
                    <Td><Checkbox></Checkbox></Td>
                    <Td>1231412312</Td>
                    <Td>Teste</Td>
                    <Td>da Silva</Td>
                    <Td>06/15/2023</Td>
                    <Td>10/15/2023</Td>
                  </Tr>
                  <Tr>
                    <Td><Checkbox></Checkbox></Td>
                    <Td>1231412312</Td>
                    <Td>Teste</Td>
                    <Td>da Silva</Td>
                    <Td>06/15/2023</Td>
                    <Td>10/15/2023</Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>
          </Flex>
        </ModalBody>


        <ModalFooter textAlign="left" justifyContent="center">
          <PrimaryButton text={'Confirm'} click={props.handleClickNextStep} mt={10} ml={0} />
        </ModalFooter>
      </ModalContent>
    </Modal>
  );

}
