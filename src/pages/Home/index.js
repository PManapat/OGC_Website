import React from "react";
import HomeBanner from "../../components/HomeBanner";
import HomeBlockOne from "../../components/HomeBlockOne";
import HomeBlockTwo from "../../components/HomeBlockTwo";
import "./style.css";

export default function () {
  return (
    <div>
      <HomeBanner />
      <HomeBlockOne />
      <HomeBlockTwo />
    </div>
  );
}
