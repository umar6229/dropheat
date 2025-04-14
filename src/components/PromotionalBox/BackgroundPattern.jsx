"use client";
import React from "react";

const BackgroundPattern = ({ className, pattern }) => {
  return (
    <div className={className} dangerouslySetInnerHTML={{ __html: pattern }} />
  );
};

export default BackgroundPattern;
