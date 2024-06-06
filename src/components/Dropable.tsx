import React, { useId } from "react";
import { useDroppable } from "@dnd-kit/core";

interface Props {
  children: React.ReactNode;
  dropableIndex: number;
}

export default function Droppable({ children, dropableIndex }: Props) {
  const id = useId();
  const { isOver, setNodeRef } = useDroppable({
    id: id,
    data: {
      dropableIndex,
    },
  });
  const style = {
    color: isOver ? "green" : undefined,
  };

  return (
    <span ref={setNodeRef} style={style}>
      {children}
    </span>
  );
}
