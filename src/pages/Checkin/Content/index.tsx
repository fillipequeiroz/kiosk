import React, {Fragment} from "react";
import {useParams} from "react-router";
import {ReserveSearch} from "./ReserveSearch";
import {ReserveFound} from "./ReserveFound";
import {CustomerInfo} from "./CustomerInfo";
import {AdditionalGuest} from "./AdditionalGuest";
import {Room} from "./Room";
import {Payment} from "./Payment";
import {WaitingPayment} from "./WaitingPayment";
import {Policy} from "./Policy";
import {Confirmed} from "./Confirmed";
import {HotelInfo} from "../../Information/hotel";
import {Faq} from "../../faq";
import {TransportInfo} from "../../Information/transport";
import {CovidInfo} from "../../Information/covid";

export const CheckinContent = () => {
  const params = useParams();

  switch (params.step) {
    case "0":
      return <ReserveSearch/>;
    case "1":
      return <ReserveFound/>;
    case "2":
      return <CustomerInfo/>;
    case "3":
      return <Policy/>;
    case "4":
      return <AdditionalGuest/>;
    case "5":
      return <Room/>;
    case "6":
      return <Payment/>;
    case "7":
      return <Confirmed/>;
    case "8":
      return <WaitingPayment/>;
    case "info":
      return <HotelInfo/>;
    case "transport":
      return <TransportInfo/>;
    case "covid":
      return <CovidInfo/>;
    case "faq":
      return <Faq/>;
    default:
      return <Fragment/>

  }

}
