import React, {Fragment} from "react";
import {useParams} from "react-router";
import {ReserveCheckoutSearch} from "./ReserveSearch";
import {ReserveCheckoutFound} from "./ReserveFound";
import {RatingHotel} from "./Rating";
import {CheckoutConfirmed} from "./Confirmed";
import {HotelInfo} from "../../Information/hotel";
import {Faq} from "../../faq";
import {TransportInfo} from "../../Information/transport";
import {CovidInfo} from "../../Information/covid";

export const CheckoutContent = () => {
  const params = useParams();

  switch (params.step) {
    case "0":
      return <ReserveCheckoutSearch/>;
    case "1":
      return <ReserveCheckoutFound/>;
    case "2":
      return <RatingHotel/>;
    case "3":
      return <CheckoutConfirmed/>;
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
