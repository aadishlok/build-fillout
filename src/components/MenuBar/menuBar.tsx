"use client";
import React, { useState } from "react";
import { Plus, FileText } from "lucide-react";
import {
  DndContext,
  closestCenter,
  PointerSensor,
  TouchSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  rectSortingStrategy,
} from "@dnd-kit/sortable";
import SortableMenuItem from "../SortableMenuItem/sortableMenuItem";
import { v4 as uuidv4 } from 'uuid';
import Button from "../Button/button";
import Connector from "../Connector/connector";
import { IMenuItem } from "@/types";
import { INITIAL_PAGES } from "@/constants";

const MenuBar = () => {

    const [selectedItemId, setSelectedItemId] = useState<string | null>(INITIAL_PAGES[0]?.itemId);
    const [pages, setPages] = useState<IMenuItem[]>(INITIAL_PAGES);

    const insertPageAtIndex = (index: number) => {
        const newPageCount = pages.filter(page => page.text.startsWith("New Page")).length + 1;
        const newPage: IMenuItem = { itemId: uuidv4(), Icon: FileText, text: "New Page " + newPageCount };
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
        }),
        useSensor(TouchSensor, {
            activationConstraint: {
                delay: 150,
                tolerance: 5,
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
        w-full max-w-[1140px] min-h-[72px] h-auto p-5 bg-gray-50
        border-t-[0.5px] border-gray-200 rounded-[8px]
        shadow-[0px_1px_3px_0px_rgba(0,0,0,0.039),_0px_1px_1px_0px_rgba(0,0,0,0.019)]
        flex flex-wrap items-center gap-y-3
    `;
    
    return (
        <div className={menuBarClasses}>
            <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
                <SortableContext items={pages.map(p => p.itemId)} strategy={rectSortingStrategy}>
                    {pages.map((page, index) => (
                        <React.Fragment key={page.text}>
                            <SortableMenuItem
                                key={page.itemId}
                                itemId={page.itemId}
                                Icon={page.Icon}
                                text={page.text}
                                isSelected={page?.itemId === selectedItemId}
                                onSelect={() => setSelectedItemId(page?.itemId)}
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