"use client"; 
import React, { useRef } from "react";
import { IMenuItem } from "@/types";
import SettingsButton from "../SettingsButton/settingsButton";

const MenuItem = ({itemId, Icon, text, isSelected, onSelect}: IMenuItem) => {

    const containerRef = useRef<HTMLDivElement>(null);

    const defaultClasses = `
        flex-grow 
        min-w-[84px]
        h-[32px] 
        py-[4px] 
        px-[10px] 
        rounded-[8px] 
        flex 
        items-center 
        text-sm 
        font-medium 
        cursor-pointer 
        transition-all 
        outline-none 
        bg-[#9DA4B226] 
        text-gray-800 
        border-[0.5px] 
        border-transparent 
        justify-center
    `;

    const selectedStateClasses = `
        bg-white 
        border-[#E1E1E1] 
        justify-between 
        text-[#1C1C1C]
    `;

    const focusStateClasses = `
        hover:bg-[#9DA4B259]
        group-focus-within:bg-white
        group-focus-within:shadow-[0px_1px_3px_0px_rgba(0,0,0,0.04),_0px_1px_1px_0px_rgba(0,0,0,0.02),_0px_0px_0px_1.5px_rgba(47,114,226,0.25)]
        group-focus-within:justify-center
    `;

    return (
        <div
            key={itemId}
            ref={containerRef}
            tabIndex={0}
            className="group"
            onClick={onSelect} // Handle click to set this page as selected
        >
            <div className={`${defaultClasses} ${isSelected ? selectedStateClasses : focusStateClasses}`} >
                <div className="flex items-center gap-2">
                    <Icon
                        className={`
                            p-0
                            ${isSelected ? 'text-[#F59D0E]' : 'text-[#8C93A1]'}
                            group-focus-within:text-[#F59D0E]
                        `} 
                        size="16px" 
                    />
                    <span className="max-w-[80px] truncate block">{text}</span>
                </div>

                {isSelected && <SettingsButton anchorRef={containerRef} />}
            </div>
        </div>
    );
};

export default MenuItem;