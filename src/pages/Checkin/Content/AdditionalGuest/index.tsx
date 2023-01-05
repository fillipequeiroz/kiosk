import {Box, Center, Flex, FormControl, FormLabel, GridItem, Input, SimpleGrid, Switch, Text} from "@chakra-ui/react";
import React, {Fragment, useState} from "react";
import {PrimaryButton} from "../../../../component/Button/PrimaryButton";
import {CheckinContext} from "../../../../context/checkin";
import {MdPets} from "react-icons/md";
import {IoMdAddCircle} from "react-icons/io";
import {useDisclosure} from "@chakra-ui/hooks";
import {ModalPolicy} from "../../../../component/ModalPolicy";
import {PolicyButton} from "../../../../component/Button/PolicyButton";


export const AdditionalGuest = () => {

  const { isOpen, onOpen, onClose } = useDisclosure();

  const context = React.useContext(CheckinContext);
  const style = {color: "#0D8845", size: "20"}

  const handleClickNextStep = () => {
    context.fowardStep(context.state.step + 1);
  }
  const [guests, setGuests] = useState([{id: 1, 'name': ''}])
  const petPolicyItems = [
    'The hotel accepts pets and welcomes 1 animal per room (no more than $ 80) and is free, provided the guest declares the pet at checkin.',
    'Guests must ensure that their pet will not disturb other guests and / or hotel staff in any way. In the event that the pet is considerer dangerous, ' +
    'harmful or disturbing at the discretion of the hotel itself, the hotel may request guests to find other accommodation and, eventually, ' +
    'animal control authorities to remove it.',
    'If the pet causes damage to the property, the property will charge the guest the amount corresponding to the damage.',
    'The pet must always be on a leash or on a carrier',
    'Pets are not allowed in the pool area',
    'Guests are required to clean the pet (inside or outside)',
    'Guests they must never leave the animal unattended in the room or on the hotel premises and must keep the animal under their control at all times.'
  ];

  const handleAddNewAdditionalGuest = () => {
    guests.push({id: guests.length + 1, 'name': ''});
    setGuests([...guests]);
  }

  return (

    <Fragment>
      <Box ml={50} mr={50}>
        <Center>
          <Box>
            <Text textAlign={['left']} w="100%" fontSize="34" mt="5" fontWeight={600} color={"#121212"}>
              Check in
            </Text>
          </Box>
        </Center>

        <Center>
          <Box>
            <Text textAlign={['left']} w="100%" fontSize="34" fontWeight={600} color={"#121212"}>
              Please provide the information below
            </Text>
          </Box>
        </Center>

        <SimpleGrid columns={2} mt={10}>
          <GridItem>
            <Box ml={5} mr={5}>
              <Text textAlign={['left']} w="100%" fontSize="20" fontWeight={600} color={"#121212"}>
                Additional guest
              </Text>
              <Text textAlign={['left']} w="100%" fontSize="20" fontWeight={600} color={"#475467"}>
                Surprises happen! If you need to add new guests that weren't in the initial planning of your trip. Don't
                worry,
                we'll work to find the best possible solution.
              </Text>


              {
                guests.map((guest, index) => (
                  <Box mt={5} key={guest.id}>
                    <FormLabel htmlFor='guestname' fontWeight={400} color={"#121212"} fontSize="16" fontFamily={"Inter"}
                               width="50%">
                      Guest Name</FormLabel>

                        <Flex>
                          <Input
                            id='guestname'
                          />
                          {
                            guests.length - 1 === index ?
                          <IoMdAddCircle style={style} size={50} cursor="pointer"
                                         onClick={handleAddNewAdditionalGuest}> </IoMdAddCircle>
                              :
                              ''
                          }
                        </Flex>

                  </Box>
                ))
              }
            </Box>

          </GridItem>

          <GridItem border="1px solid #949494" borderRadius={16}>
            <Box ml={5} mr={5}>
              <Center>
                <Box>
                  <MdPets size={80}/>
                  <Text textAlign={['center']} w="100%" fontSize="20" fontWeight={600} color={"#121212"}>
                    Pets
                  </Text>
                </Box>
              </Center>

              <Center>
                <Text textAlign={['center']} w="100%" fontSize="20" fontWeight={600} color={"#121212"}>
                  Are you visiting us with Pet?*
                </Text>
              </Center>
              <Center>
                <Flex>
                  <FormControl display='flex' alignItems='center'>
                    <Text textAlign={['center']} w="100%" fontSize="16" fontWeight={700} color={"#1A1A1A"} mr={3}>
                      No
                    </Text>
                    <Switch id='email-alerts'/>
                    <Text textAlign={['center']} w="100%" fontSize="16" fontWeight={700} color={"#1A1A1A"} ml={3}>
                      Yes
                    </Text>
                  </FormControl>
                </Flex>
              </Center>

              <Center>
                <Text textAlign={['center']} w="100%" fontSize="16" fontWeight={400} color={"#475467"} mt={10}>
                  Please read our Pet Policy
                </Text>
              </Center>
              <Center>
                <PolicyButton onOpen={onOpen} label={"Pets Policy"} h={45} mt={0}/>
              </Center>
              <ModalPolicy title="PETS POLICY" content={petPolicyItems} onOpen={onOpen} isOpen={isOpen} onClose={onClose}
                agree={"I read and agree with the terms"}/>
            </Box>
            <Center w={"100%"} mr={10} mt={10}>
              <Box border="1px solid #949494" w="90%"></Box>
            </Center>

            <Center mr={10} ml={10}>
              <Text textAlign={['center']} w="100%" fontSize="16" fontWeight={600} color={"#475467"}>
                (*) Provide false or inaccurate personal information, including the presence of a pet on our property
                represents a serious violation of hotel policies and the hotel may report such a case to law enforcement
                authorities.
              </Text>
            </Center>

          </GridItem>

        </SimpleGrid>
      </Box>

      <Center>
        <PrimaryButton text={'Next'} click={handleClickNextStep} mt={5} ml={0}/>
      </Center>

      <Center>

        <Box>
          <Text w="100%" fontSize="18" fontWeight={700} color={"#121212"} mb={3} mt={3}>
            {context.state.step}/{context.state.totalSteps}
          </Text>
        </Box>
      </Center>



    </Fragment>
  );

}
