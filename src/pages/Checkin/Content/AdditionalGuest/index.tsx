import {Box, Center, Flex, FormControl, FormLabel, GridItem, Input, SimpleGrid, Switch, Text} from "@chakra-ui/react";
import React, {Fragment, useEffect, useState} from "react";
import {PrimaryButton} from "../../../../component/Button/PrimaryButton";
import {CheckinContext} from "../../../../context/checkin";
import {MdPets} from "react-icons/md";
import {IoMdAddCircle, IoMdRemoveCircle} from "react-icons/io";
import {useDisclosure} from "@chakra-ui/hooks";
import {ModalPetPolicy} from "../../../../component/ModalPetPolicy";
import {PolicyButton} from "../../../../component/Button/PolicyButton";
import {toast} from "react-toastify";
import {KeyboardComponent} from "../../../../component/Keyboard";

export const AdditionalGuest = () => {

  const style = {color: "#0D8845", size: "20"}
  const styleRemove = {color: "#D92D20", size: "20"}
  const INPUTS_PAGE = "inputs";

  const context = React.useContext(CheckinContext);

  const {isOpen, onOpen, onClose} = useDisclosure();
  const [visitingPetChecked, setVisitingPetChecked] = useState(context.state.visitingPet)

  useEffect(() => {
    context.state.visitingPet = visitingPetChecked;
  }, [visitingPetChecked, context.state]);

  const handleClickNextStep = () => {
    if (context.state.visitingPet && !context.state.petPolicyChecked) {
      toast.error("Please, check pet consent.")
      return;
    }
    context.closeKeyboard();
    context.fowardStep(context.state.step + 1);
  }

  const onChangeInput = (event: { target: { value: any; }; }, index: number) => {
    console.log('trocar esse onChangeInput');
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
            <Box ml={5} mr={5} id={"additionalguestsid"}>
              <Text textAlign={['left']} w="100%" fontSize="20" fontWeight={600} color={"#121212"}>
                Additional guest
              </Text>
              <Text textAlign={['left']} w="100%" fontSize="20" fontWeight={600} color={"#475467"}>
                Surprises happen! If you need to add new guests that weren't in the initial planning of your trip. Don't
                worry,
                we'll work to find the best possible solution.
              </Text>

              {
                context.state.additionalGuests.map((guest, index) => (
                  <Box mt={5} key={guest.id}>
                    <FormLabel htmlFor={'name' + guest.id} fontWeight={400} color={"#121212"} fontSize="16"
                               fontFamily={"Inter"}
                               width="50%">
                      Guest Name</FormLabel>

                    <Flex>
                      <Input
                        name={"name" + guest.id}
                        id={'name' + guest.id}
                        value={context.getInputValueFromAdditionalGuests("name", guest.id)}
                        defaultValue={context.getInputValueFromAdditionalGuests("name", guest.id)}
                        onChange={(e) => onChangeInput(e, guest.id)}
                        onFocus={() => {
                          context.openKeyboard()
                          context.setInputName("name" + guest.id);
                        }}

                      />
                      {
                        (index < context.state.additionalGuests.length && index > 0) ?
                          <IoMdRemoveCircle style={styleRemove} size={50} cursor="pointer"
                                            onClick={() => context.handleRemoveAdditionalGuest(guest.id)}> </IoMdRemoveCircle>
                          :
                          ''
                      }
                      {
                        context.state.additionalGuests.length - 1 === index ?
                          <IoMdAddCircle style={style} size={50} cursor="pointer"
                                         onClick={context.handleAddNewAdditionalGuest}> </IoMdAddCircle>
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
                    <Switch id='email-alerts'
                            isChecked={visitingPetChecked}
                            onChange={() => setVisitingPetChecked(!visitingPetChecked)}/>
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
              <ModalPetPolicy onOpen={onOpen} isOpen={isOpen}
                              onClose={onClose}
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

      <KeyboardComponent page={INPUTS_PAGE} />

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
