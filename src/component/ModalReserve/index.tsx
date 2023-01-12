import React, {FC, useEffect} from "react";
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
import {CheckinContext} from "../../context/checkin";

export const ModalBookings: FC<{ onOpen: any, isOpen: any, onClose: any, handleClickNextStep: any }> = (props) => {

  const context = React.useContext(CheckinContext);


  const handleClickOnClose = () => {
    context.state.bookingsSelecteds = [];
    props.onClose();
  }
  const handleClickCheckbox = (bookingSelected: any, checked: boolean) => {

    if (checked) {
      context.state.bookingsSelecteds.push(bookingSelected);
    } else {
      context.state.bookingsSelecteds.splice(context.state.bookingsSelecteds.findIndex((booking: any) => booking.bookingCode = bookingSelected.bookingCode),1);
    }

  }

  return (
    <Modal isOpen={props.isOpen} onClose={handleClickOnClose} size="6xl">
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
                    <Th>
                      {/*<Checkbox></Checkbox>*/}
                    </Th>
                    <Th>Confirmation Code</Th>
                    <Th>Name</Th>
                    <Th>Arrival date</Th>
                    <Th>Departure date</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {
                    context.state.bookings?.map((booking: any, index: number) => {

                      return (<Tr key={booking.bookingCode}>
                        <Td><Checkbox onChange={(e) => handleClickCheckbox(booking, e.target.checked)}></Checkbox></Td>
                        <Td>{booking.bookingCode}</Td>
                        <Td>{booking.guestName}</Td>
                        <Td>{new Date(booking.checkinAt).toLocaleString()}</Td>
                        <Td>{new Date(booking.checkoutAt).toLocaleString()}</Td>
                      </Tr>);
                    })
                  }
                </Tbody>
              </Table>
            </TableContainer>
          </Flex>
        </ModalBody>


        <ModalFooter textAlign="left" justifyContent="center">
          <PrimaryButton text={'Confirm'} click={props.handleClickNextStep} mt={10} ml={0}/>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );

}
