import React, { FC, ReactNode } from "react";
import TruckIcon from "./../assets/icons/tow-truck.png";

const NoMachines:FC<Props> = ({ children }) => (
  <div className="flex items-center flex-col bg-gray-100 py-20">
    <img className="w-12" src={TruckIcon} alt="No Machines Found" />
    <p className="text-sm">No Machines Found.</p>
    {children}
  </div>
);

interface Props {
    children: ReactNode;
};

export default NoMachines;
