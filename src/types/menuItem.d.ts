import { LucideIcon } from "lucide-react";

export interface IMenuItem {
  itemId: string;
  Icon: LucideIcon;
  text: string;
  isSelected?: boolean;
  onSelect?: () => void;
}