import { IMenuItem } from "@/types";
import { v4 as uuidv4 } from 'uuid';
import { Info, CircleCheck, FileText } from "lucide-react";

export const INITIAL_PAGES: IMenuItem[] = [
    { itemId: uuidv4(), Icon: Info, text: "Info" },
    { itemId: uuidv4(), Icon: FileText, text: "Details" },
    { itemId: uuidv4(), Icon: FileText, text: "Other" },
    { itemId: uuidv4(), Icon: CircleCheck, text: "Ending" },
];