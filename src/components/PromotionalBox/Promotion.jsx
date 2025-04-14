"use client";
import React from "react";
import PromotionalBox from "./PromotionalBox";
import ReferralBox from "./ReferralBox";

const Promotion = () => {
  return (
    <main style={{display:"flex",gap:"10px",overflow:"hidden"}} role="main">
      <div style={{width:"65%"}}>
      <PromotionalBox />
      </div>
      <div style={{width:"35%"}}>
      <ReferralBox />
      </div>
    </main>
  );
};

export default Promotion;
