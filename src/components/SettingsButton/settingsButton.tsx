import React, { useState, useRef, useEffect } from "react";
import { EllipsisVertical } from "lucide-react";
import Settings from "../Settings/settings";
import { ISettingsButtonProps } from "@/types";

const SettingsButton: React.FC<ISettingsButtonProps> = ({ anchorRef }) => {
  const [showMenuOptions, setShowMenuOptions] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    function handleDocumentClick(event: MouseEvent) {
      if (
        showMenuOptions &&
        menuButtonRef.current &&
        !menuButtonRef.current.contains(event.target as Node)
      ) {
        setShowMenuOptions(false);
      }
    }
    if (showMenuOptions) {
      document.addEventListener("mousedown", handleDocumentClick);
    }
    return () => {
      document.removeEventListener("mousedown", handleDocumentClick);
    };
  }, [showMenuOptions]);

  return (
    <div className="flex flex-grow justify-end">
      <button
        ref={menuButtonRef}
        className="ml-[6px] flex-shrink-0 w-4 h-4 flex items-center justify-center text-[#5B6370] hover:bg-gray-100 focus:outline-none"
        onClick={(e) => {
          e.stopPropagation();
          setShowMenuOptions((prev) => !prev);
        }}
        aria-label="Open context menu"
      >
        <EllipsisVertical color="#9DA4B2" size="16px" />
      </button>
      {showMenuOptions && anchorRef?.current && (
        <Settings anchorEl={anchorRef?.current} onClose={() => setShowMenuOptions(false)} />
      )}
    </div>
  );
};

export default SettingsButton;
