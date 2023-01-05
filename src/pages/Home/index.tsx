import React from "react";
import {useParams} from "react-router";
import {HomeComponent} from "../../component/Home";

export const Home = () => {

  const params = useParams();
  return (
      <HomeComponent actualStep={params.step} />
  );

}
