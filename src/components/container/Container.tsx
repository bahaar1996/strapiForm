import React from "react";
type IContainer = {
  children: React.ReactNode;
};
const Container = ({ children }: IContainer) => {
  return <div className="container p-10">{children}</div>;
};

export default Container;
