import React, { FC } from "react";

type Props = {
  children: React.ReactElement;
};

export const DefaultLayout: FC<Props> = ({ children }) => {
  return <>{children}</>;
};
