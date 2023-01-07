import React, {FC, useState} from "react";
import {Center, Grid, GridItem} from "@chakra-ui/react";
import {BsCalendarCheck, BsFillQuestionCircleFill} from "react-icons/bs";
import {TabItemComponent} from "../TabItem";
import {IoMdInformationCircleOutline} from "react-icons/io";
import * as pages from "./pages";
import {useNavigate} from "react-router-dom";
import {CheckoutContext} from "../../context/checkout";
import {CheckinContext} from "../../context/checkin";

export const TabComponent: FC<{ tabSelected: string, useCheckin: boolean }> = (props) => {
  const styleSelected = {color: "#FFF"}
  const style = {color: "#1D2939"}
  const navigate = useNavigate();

  const checkinContext = React.useContext(CheckinContext);
  const checkoutContext = React.useContext(CheckoutContext);

  const [checkinSelected, setCheckinSelected] = useState(props.tabSelected === pages.CHECKIN_FLOW);
  const [checkoutSelected, setCheckoutSelected] = useState(props.tabSelected === pages.CHECKOUT_FLOW);
  const [infoSelected, setInfoSelected] = useState(props.tabSelected === pages.INFORMATION_FLOW);
  const [faqSelected, setFaqSelected] = useState(props.tabSelected === pages.FAQ_FLOW);

  const handleClickTabItem = (tab: string) => {
    setCheckinSelected(tab === pages.CHECKIN_FLOW);
    setCheckoutSelected(tab === pages.CHECKOUT_FLOW);
    setInfoSelected(tab === pages.INFORMATION_FLOW);
    setFaqSelected(tab === pages.FAQ_FLOW)
    switch (tab){
      case pages.CHECKIN_FLOW:
        navigate('/' +pages.CHECKIN_FLOW + '/' + checkinContext.state.step);
        return;
      case pages.CHECKOUT_FLOW:
        navigate('/' +pages.CHECKOUT_FLOW + '/' + checkoutContext.state.step);
        return;
      case pages.INFORMATION_FLOW:
        navigate(pages.INFORMATION_FLOW );
        return;
      case pages.FAQ_FLOW:
        navigate(pages.FAQ_FLOW );
        return;
    }
  }

  return (
    <Center overflow="auto" >
      <Grid templateColumns='repeat(3, 1fr)' width={"50%"}  gap={5}>
        {props.useCheckin ?
          <GridItem id="grid-item">
            <TabItemComponent label={"Checkin"}
                              icon={<BsCalendarCheck size={40} style={checkinSelected ? styleSelected : style}/>}
                              selected={checkinSelected}
                              click={() => handleClickTabItem(pages.CHECKIN_FLOW)}
            />
          </GridItem>
          :
          <GridItem id="grid-item">
            <TabItemComponent label={"Checkout"}
                              icon={<BsCalendarCheck size={40} style={checkoutSelected ? styleSelected : style}/>}
                              selected={checkoutSelected}
                              click={() => handleClickTabItem(pages.CHECKOUT_FLOW)}
            />
          </GridItem>
        }




        <GridItem>
          <TabItemComponent label={"Information"}
                            icon={<IoMdInformationCircleOutline size={40}
                                                                style={infoSelected ? styleSelected : style}/>}
                            selected={infoSelected}
                            click={() => handleClickTabItem(pages.INFORMATION_FLOW)}
          />
        </GridItem>
        <GridItem>
          <TabItemComponent label={"FAQ"}
                            icon={<BsFillQuestionCircleFill size={40} style={faqSelected ? styleSelected : style}/>}
                            selected={faqSelected}
                            click={() => handleClickTabItem(pages.FAQ_FLOW)}
          />
        </GridItem>
      </Grid>
    </Center>
  );

}
