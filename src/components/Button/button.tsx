import { IButtonProps } from "@/types";
import React from "react";

const Button: React.FC<IButtonProps> = ({
  text,
  Icon,
  onClick,
  className = "",
  iconClass = "",
  iconColor = "#1A1A1A",
  iconSize = 16,
  ariaLabel,
  hideText = false,
  type = "button",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      aria-label={ariaLabel}
      className={`
        ${hideText ? "w-4 h-4" : "w-[106.5px] h-[32px] px-[10px] py-[4px] gap-[6px]"}
        flex items-center justify-center
        bg-white border border-[#E1E1E1]
        ${hideText ? "rounded-full" : "rounded-[8px]"}
        shadow-[0px_1px_3px_0px_rgba(0,0,0,0.04),_0px_1px_1px_0px_rgba(0,0,0,0.02)]
        text-[#1A1A1A] text-sm font-medium
        transition-colors hover:bg-gray-50
        ${className}
      `}
    >
      {Icon && <Icon color={iconColor} size={iconSize} className={iconClass} />}
      {!hideText && text && <span>{text}</span>}
    </button>
  );
};

export default Button;
