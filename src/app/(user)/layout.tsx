"use client"
// import TestPanel from "@/components/common/test-panel"; //(only dev)
import React, { memo } from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {/* <TestPanel /> */}
      {children}
    </>
  );
};

export default memo(Layout);