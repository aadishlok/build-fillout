export interface IButtonProps {
  text?: string;
  Icon?: React.ElementType;
  onClick?: () => void;
  className?: string;
  iconClass?: string;
  iconColor?: string;
  iconSize?: number | string;
  ariaLabel?: string;
  hideText?: boolean;
  type?: "button" | "submit" | "reset";
}