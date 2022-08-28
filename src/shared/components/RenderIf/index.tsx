import React, { PropsWithChildren } from "react";

interface Props {
  isTrue: boolean;
}

const RenderIf: React.FC<PropsWithChildren<Props>> = ({ children, isTrue }) => {
  return isTrue ? <>{children}</> : <></>;
};

export default RenderIf;
