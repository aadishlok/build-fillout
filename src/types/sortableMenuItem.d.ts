import { LucideIcon } from "lucide-react";

export interface ISortableMenuItem {
  itemId: string;
  Icon: LucideIcon;
  text: string;
  isSelected: boolean;
  onSelect: () => void;
};