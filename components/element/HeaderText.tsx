import React, { ReactNode } from "react";

type HeaderTextProps = {
  children: ReactNode;
};

const HeaderText = ({ children }: HeaderTextProps) => {
  return <div>{children}</div>;
};

export default HeaderText;
