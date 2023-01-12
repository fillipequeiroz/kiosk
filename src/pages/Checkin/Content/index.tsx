import React, {Fragment} from "react";
import {useParams} from "react-router";
import {BookingSearch} from "./BookingSearch";
import {BookingFound} from "./BookingFound";
import {CustomerInfo} from "./CustomerInfo";
import {AdditionalGuest} from "./AdditionalGuest";
import {Room} from "./Room";
import {Payment} from "./Payment";
import {Policy} from "./Policy";
import {Confirmed} from "./Confirmed";
import {HotelInfo} from "../../Information/hotel";
import {Faq} from "../../faq";
import {TransportInfo} from "../../Information/transport";
import {CovidInfo} from "../../Information/covid";
import {WaitingPage} from "./Waiting";

export const PREPARE_RESERVATION = "8";
export const WAITING = 9;

export const CheckinContent = () => {

  const params = useParams();

  switch (params.step) {
    case "0":
      return <Fragment><BookingSearch/> </Fragment>;
    case "1":
      return <BookingFound/>;
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
    case PREPARE_RESERVATION:
      return <WaitingPage label={"Preparing your reservation"} secondLabel={"Please wait a while to finish."}/>;
    case String(WAITING):
      return <WaitingPage label={"Processing"} secondLabel={"Please wait a while to finish."}/>;
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
