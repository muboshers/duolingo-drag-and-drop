import React, { useId } from "react";
import { Option } from "@/@mock/draggable";
import { useDraggable } from "@dnd-kit/core";

interface Props {
  option: Option;
}

export default function Draggable(props: Props) {
  const id = useId();
  const { option } = props;
  const { attributes, listeners, setNodeRef, isDragging } = useDraggable({
    id: id,
    data: { element: { ...option, id } },
  });
  return (
    <div
      className="drag-item"
      ref={setNodeRef}
      style={{ opacity: isDragging ? "0.7" : "1" }}
      {...listeners}
      {...attributes}
    >
      {option.option}
    </div>
  );
}
