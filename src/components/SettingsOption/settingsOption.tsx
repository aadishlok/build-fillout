import React from "react";
import { ISettingsOptionType } from "@/types";

const SettingsOption: React.FC<ISettingsOptionType> = ({ icon, name, isDelete = false, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`flex items-center gap-2 py-[6px] rounded-md cursor-pointer transition-colors 
        ${isDelete ? "text-red-600 hover:bg-red-50" : "text-gray-700 hover:bg-gray-100"}`}
    >
      {icon}
      <span className="text-sm">{name}</span>
    </div>
  );
};

export default SettingsOption;