"use client";
import React, { useState } from "react";
import { Plus, FileText } from "lucide-react";
import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  horizontalListSortingStrategy,
} from "@dnd-kit/sortable";
import SortableMenuItem from "../SortableMenuItem/sortableMenuItem";
import { v4 as uuidv4 } from 'uuid';
import { restrictToHorizontalAxis } from "@dnd-kit/modifiers";
import Button from "../Button/button";
import Connector from "../Connector/connector";
import { IMenuItem } from "@/types";
import { INITIAL_PAGES } from "@/constants";

const MenuBar = () => {

    const [selectedPageIndex, setSelectedPageIndex] = useState<number>(0);
    const [pages, setPages] = useState<IMenuItem[]>(INITIAL_PAGES);

    const insertPageAtIndex = (index: number) => {
        const newPage: IMenuItem = { itemId: uuidv4(), Icon: FileText, text: "New Page" };
        setPages(prevPages => {
            const updated = [...prevPages];
            updated.splice(index, 0, newPage);
            return updated;
        });
    };

    const sensors = useSensors(
        useSensor(PointerSensor, {
            activationConstraint: {
                distance: 5,
            },
        })
    );

    const handleDragEnd = (event: DragEndEvent) => {
        const { active, over } = event;
        if (active.id !== over?.id) {
            const oldIndex = pages.findIndex(p => p.itemId === active.id);
            const newIndex = pages.findIndex(p => p.itemId === over?.id);
            setPages(arrayMove(pages, oldIndex, newIndex));
        }
    };
    
    const menuBarClasses = `
        w-full max-w-[1140px] h-[72px] p-5 bg-gray-50
        border-t-[0.5px] border-gray-200 rounded-[8px]
        shadow-[0px_1px_3px_0px_rgba(0,0,0,0.039),_0px_1px_1px_0px_rgba(0,0,0,0.019)]
        flex items-center
    `;
    
    return (
        <div className={menuBarClasses}>
            <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd} modifiers={[restrictToHorizontalAxis]}>
                <SortableContext items={pages.map(p => p.itemId)} strategy={horizontalListSortingStrategy}>
                    {pages.map((page, index) => (
                        <React.Fragment key={page.text}>
                            <SortableMenuItem
                                key={page.itemId}
                                itemId={page.itemId}
                                Icon={page.Icon}
                                text={page.text}
                                isSelected={index === selectedPageIndex}
                                onSelect={() => setSelectedPageIndex(index)}
                            />
                            <div className="relative group flex items-center transition-all duration-200">
                                <Connector hideOnHover />
                                <div className="hidden group-hover:flex items-center transition-all duration-200">
                                    <Connector />
                                    <Button
                                        Icon={Plus}
                                        ariaLabel="Insert Page"
                                        hideText
                                        iconColor="#000000"
                                        iconSize={8}
                                        iconClass="p-0"
                                        onClick={() => insertPageAtIndex(index + 1)}
                                    />
                                    <Connector />
                                </div>
                            </div>
                        </React.Fragment>
                    ))}
                </SortableContext>
            </DndContext>
            <Button Icon={Plus} text="Add page" onClick={() => insertPageAtIndex(pages.length)} />
        </div>
    );
};

export default MenuBar;