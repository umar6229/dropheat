"use client";
import React from "react";

const ShadowEffect = ({ className }) => {
  return (
    <div
      className={className}
      dangerouslySetInnerHTML={{
        __html: `<svg width="503" height="124" viewBox="0 0 503 124" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_f_1_1059)">
            <ellipse cx="264.573" cy="104.5" rx="200.754" ry="41.5" fill="#100024"/>
          </g>
          <defs>
            <filter id="filter0_f_1_1059" x="0.81897" y="0" width="527.509" height="209" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="31.5" result="effect1_foregroundBlur_1_1059"/>
            </filter>
          </defs>
        </svg>`,
      }}
    />
  );
};

export default ShadowEffect;
