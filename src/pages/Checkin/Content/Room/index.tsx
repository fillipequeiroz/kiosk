import {Box, Center, FormControl, FormLabel, Select, Text} from "@chakra-ui/react";
import React, {Fragment, useEffect, useState} from "react";
import {PrimaryButton} from "../../../../component/Button/PrimaryButton";
import {CheckinContext} from "../../../../context/checkin";
import {toast} from "react-toastify";

export const Room = () => {

  const context = React.useContext(CheckinContext);
  const API_URL = process.env.REACT_APP_API_URL;

  const [rooms, setRooms] = useState([]);
  const [room, setRoom] = useState('');

  const handleClickNextStep = () => {
    context.state.room = room;
    if (!room) {
      toast.error("Please, select a room.")
      return;
    }

    console.log('bloqueando room: ' + room);
    fetch(API_URL + 'rooms/block/' + room + '?reservationId=' + context.getValueFromState('bookingId'))
      .then((res) => res.json());

    context.fowardStep(context.state.step + 1);
  }

  useEffect(() => {
    if (context.getValueFromState('room')) {
      fetch(API_URL + 'rooms/unblock/' + context.getValueFromState('room'))
        .then((res) => {
          fetch(API_URL + 'rooms/available')
            .then((res) => res.json())
            .then((res) => {
              setRooms(res.data);
              setRoom(context.state.room);
            });
        });
    } else {
      fetch(API_URL + 'rooms/available')
        .then((res) => res.json())
        .then((res) => {
          setRooms(res.data);
          setRoom(context.state.room);
        });

    }

  }, [API_URL, context]);


  return (

    <Fragment>
      <Box>
        <Center>
          <Text textAlign={['center']} w="100%" fontSize="34" fontWeight={600} color={"#121212"}>
            Please, select a room
          </Text>
        </Center>

        <Center>
          <Box mt={10}>
            <FormControl alignItems='center'>
              <FormLabel htmlFor='room' fontWeight={400} color={"#121212"} fontSize="16"
                         fontFamily={"Inter"}>Room number</FormLabel>
              <Select placeholder="Select a room"
                      id='room'
                      minW={60}
                      value={room}
                      onChange={(e) => setRoom(e.target.value)}
              >
                {
                  rooms.map((room: any, index: number) =>
                    <option key={room._id} value={room._id}>{room.roomNumber}</option>
                  )
                };

              </Select>
            </FormControl>
          </Box>
        </Center>


        <Center>
          <PrimaryButton text={'Next'} click={handleClickNextStep} mt={10} ml={0}/>
        </Center>

        <Center>
          <Box>
            <Text w="100%" fontSize="18" fontWeight={700} color={"#121212"} mb={5} mt={5}>
              {context.state.step}/{context.state.totalSteps}
            </Text>
          </Box>
        </Center>
      </Box>
    </Fragment>
  );

}
