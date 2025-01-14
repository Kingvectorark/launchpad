import React from "react";
import * as s from "../styles/global";

const Home = () => {
  return (
    <s.Container ai="center">
      <s.Container ai="center">
        <s.SpacerLarge />
        <s.TextDescription fs={"89px"}>CoinGatePad</s.TextDescription>
        <s.TextDescription style={{ textAlign: "center" }}>
          Your all-in-one DEX Launchpad, empowering projects on SCS Chain.
        </s.TextDescription>
        <s.SpacerLarge />
        <s.TextDescription>{/* - Isaak Solovev - */}</s.TextDescription>
      </s.Container>
    </s.Container>
  );
};

export default Home;
