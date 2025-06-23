import { IConnectorProps } from "@/types";
import React from "react";

const Connector: React.FC<IConnectorProps> = ({ hideOnHover = false, className = "" }) => {
  return (
    <div
      className={`
        w-[12px] h-[1.5px]
        border-t border-dashed border-gray-400
        transition-all duration-200
        ${hideOnHover ? "group-hover:hidden" : ""}
        ${className}
      `}
    />
  );
};

export default Connector;