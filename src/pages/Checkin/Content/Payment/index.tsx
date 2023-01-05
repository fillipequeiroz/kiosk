import {Box, Center, Flex, Text} from "@chakra-ui/react";
import React, {Fragment} from "react";
import {PrimaryButton} from "../../../../component/Button/PrimaryButton";
import {CheckinContext} from "../../../../context/checkin";
import {PaymentLine} from "../../../../component/PaymentLine";

export const Payment = () => {

  const context = React.useContext(CheckinContext);
  const handleClickNextStep = () => {
    context.fowardStep(context.state.step + 1);
  }


  return (
    <Fragment>
      <Box ml={10} mr={10}>
        <Center>
          <Box>
            <Text textAlign={['left']} w="100%" fontSize="36" mt="4" fontWeight={700} color={"#475467"}>
              Payment information
            </Text>
          </Box>
        </Center>

        <PaymentLine label={"Value of stay"} secondLabel={"(3 nights)"} value={"$ 500.00"} mt={10}/>
        <PaymentLine label={"Taxes"} secondLabel={""} value={"$ 12.55"} mt={5}/>
        <PaymentLine label={"Service Fee"} secondLabel={"(taxes included)"} value={"$ 15.99"} mt={5}/>
        <PaymentLine label={"Security Deposit"} secondLabel={""} value={"$ 50.00"} mt={5}/>
        <Flex justifyContent="end">
          <Text textAlign={['right']} fontSize="36" mt="4" fontWeight={700} color={"#475467"} mr={5}>
            Total:
          </Text>
          <Text textAlign={['right']} fontSize="36" mt="4" fontWeight={700} color={"#0D8845"}>
            $ 550.75
          </Text>
        </Flex>

        <Box w={"60vw"} mt={10}>
          <Text textAlign={['left']} fontSize="20" mt="4" fontWeight={600} color={"#475467"}>
            By clicking on “Please debit my credit card” below, I agree and authorize the payment of the total amount
            described above by through the credit card indicated. I also declare that I am legally responsible for
            authorizing the purchase with this credit card. Too I am aware that the security deposit may be withheld by
            the bank. Authorization within 10 (ten) days after the check-out date.
          </Text>
        </Box>

        <Center>
          <PrimaryButton text={'Pay Now'} click={handleClickNextStep} mt={5} ml={0}/>
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
