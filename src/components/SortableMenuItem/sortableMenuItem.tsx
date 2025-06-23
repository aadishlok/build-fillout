import React from "react";
import MenuItem from "../MenuItem/menuItem";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from '@dnd-kit/utilities';
import { ISortableMenuItem } from "@/types";

const SortableMenuItem = ({ itemId, Icon, text, isSelected, onSelect }: ISortableMenuItem) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging
  } = useSortable({ id: itemId });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <MenuItem itemId={itemId} Icon={Icon} text={text} isSelected={isSelected} onSelect={onSelect} />
    </div>
  );
};

export default SortableMenuItem;