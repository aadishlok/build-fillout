import { ISettingsHeader } from "@/types";
import React from "react";

const SettingsHeader: React.FC<ISettingsHeader> = ({ text }) => {

    return (
        <div className="
            w-full
            h-[40px]
            px-[12px]
            py-[12px]
            flex
            items-center
            gap-[4px]
            text-[16px]
            font-bl-melody
            text-[#1C1C1C]
            bg-[#FAFBFC]
            border-b-[0.5px]
            border-[#E1E1E1]
            rounded-tl-[12px]
            rounded-tr-[12px]
            align-middle
        ">
            {text}
        </div>
    );
};

export default SettingsHeader;