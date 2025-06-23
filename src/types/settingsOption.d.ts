import { ReactNode } from "react";

export interface ISettingsOptionType {
  icon: ReactNode;
  name: string;
  isDelete?: boolean;
  onClick?: () => void;
}