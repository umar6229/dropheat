"use client";
import React from "react";
import styles from "./InputDesign.module.css";
import BackgroundPattern from "./BackgroundPattern";

const ReferralBox = () => {
  const pattern = `<svg width="100%" height="333" viewBox="0 0 427 333" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 600px; height: 600px; position: absolute; left: -93px; top: 84px; opacity: 0.1">
    <g opacity="0.1">
      <path d="M207.209 389.608V549.501M189.295 50L200.46 209.56M219.707 388.69L241.953 547.001M154.717 54.9126L188.045 211.308M232.038 386.027L276.114 539.757M121.221 64.5771L175.962 214.81M243.87 381.695L308.942 527.765M89.3126 78.8161L164.467 219.972M254.951 375.785L339.687 511.361M59.7329 97.3016L153.8 226.632M265.113 368.371L367.929 490.873M33.0716 119.704L144.136 234.794M274.115 359.628L393.011 466.64M9.74115 145.685L135.803 244.12M281.864 349.718L414.508 439.075M-9.75309 174.585L128.724 254.532M288.112 338.809L431.921 408.845M-25.0865 205.979L123.222 265.856M292.778 327.148L444.919 376.532M-35.835 239.206L119.389 277.847M295.861 314.908L453.334 342.639M-41.8315 273.519L117.225 290.258M297.111 302.416L457 307.996M-43 308.412L116.806 302.832M296.61 289.839L455.75 273.1M-39.333 343.056L118.141 315.324M294.444 277.433L449.668 238.792M-30.9178 376.947L121.223 327.481M290.53 265.522L438.838 205.562M-17.7512 409.264L125.975 339.144M284.945 254.196L423.505 174.25M-0.340462 439.49L132.304 350.05M277.947 243.787L404.009 145.353M21.1573 466.888L140.054 359.959M269.449 234.462L380.597 119.455M46.3196 491.122L149.136 368.62M259.782 226.383L353.849 97.0527M74.5636 511.608L159.383 376.031M249.117 219.803L324.188 78.5644M105.393 527.93L170.465 381.861M237.619 214.64L292.36 64.4071M138.219 539.839L182.294 386.192M225.536 211.226L258.781 54.8309M172.382 547.086L194.628 388.775M213.041 209.477L224.206 50" stroke="#E3ECEF" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    </g>
  </svg>`;

  return (
    <section
      className={styles.referralBox}
      role="region"
      aria-label="Referral Program"
    >
      <BackgroundPattern
        className={styles.backgroundPattern}
        pattern={pattern}
      />
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/27b0b8cb5ae64fb51393c7ba3cf5831b01cf03f8"
        alt="Statistics visualization"
        className={styles.statsImage}
      />
      <div className={styles.referralContent}>
        <h2 className={styles.referralTitle}>
          Earn up to 10% on deposits from your friends
      <p className={styles.percentageBadge}>5%</p>
        </h2>
        <p className={styles.referralDescription}>
          Give your friends a 5% bonus added to all their cash deposits
        </p>
      </div>
      <button
        className={styles.referButton}
        aria-label="Refer a friend to earn rewards"
      >
        Refer a friend
      </button>
    </section>
  );
};

export default ReferralBox;
