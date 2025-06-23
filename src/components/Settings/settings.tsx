"use client";
import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import MenuItemOptionsHeader from "../SettingsHeader/settingsHeader";
import SettingsOption from "../SettingsOption/settingsOption";
import Divider from "../Divider/Divider";
import { settingsOptions } from "@/constants";
import { ISettingsProps } from "@/types";

const Settings = ({ anchorEl, onClose }: ISettingsProps) => {
    const [position, setPosition] = useState({ top: 0, left: 0 });
    const menuRef = useRef<HTMLDivElement>(null);
    
    useEffect(() => {
        if (anchorEl && menuRef.current) {
            const anchorRect = anchorEl.getBoundingClientRect();
            const menuHeight = menuRef.current.offsetHeight;

            setPosition({
                top: anchorRect.top - menuHeight - 12, 
                left: anchorRect.left,                 
            });
        }
    }, [anchorEl]);

    // Close menu on outside click
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
        if (
            menuRef.current &&
            !menuRef.current.contains(event.target as Node) &&
            anchorEl &&
            !anchorEl.contains(event.target as Node)
        ) {
            onClose();
        }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
        document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [onClose, anchorEl]);

    if (!anchorEl) return null;

    return createPortal(
        <div
            ref={menuRef}
            className="
                w-[240px]
                rounded-[12px]
                border-[0.5px]
                border-[#E1E1E1]
                bg-white
                shadow-[0px_1px_3px_0px_rgba(0,0,0,0.039),_0px_1px_1px_0px_rgba(0,0,0,0.019)]
                absolute
                z-50
            "
            style={{ top: position.top, left: position.left, position: "absolute" }}
        >
            <MenuItemOptionsHeader text="Settings" />
            <div className="p-2">
                {settingsOptions.map((option, index) => (
                    <React.Fragment key={option.name}>
                        {index === settingsOptions.length - 1 && <Divider />}
                        <SettingsOption
                            icon={option.icon}
                            name={option.name}
                            isDelete={option.name === "Delete"}
                            onClick={() => {}}
                        />
                    </React.Fragment>
                ))}
            </div>
        </div>,
        document.body
    );
};

export default Settings;
