import { Clipboard, Copy, PencilLine, Trash2 } from "lucide-react";
import FlagFilled from "@/assets/icons/FlagFilled";
import { ISettingsOptionItem } from "@/types";

export const settingsOptions: ISettingsOptionItem[] = [
  {
    name: "Set as first page",
    icon: <FlagFilled />,
  },
  {
    name: "Rename",
    icon: <PencilLine color="#9DA4B2" size="16px" />,
  },
  {
    name: "Copy",
    icon: <Clipboard color="#9DA4B2" size="16px" />,
  },
  {
    name: "Duplicate",
    icon: (
      <Copy
        style={{ transform: "scaleX(-1)", transformOrigin: "center" }}
        color="#9DA4B2"
        size="16px"
      />
    ),
  },
  {
    name: "Delete",
    icon: <Trash2 color="#EF494F" size="16px" />,
  },
];
