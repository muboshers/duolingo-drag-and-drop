import React, { useId } from "react";
import { Option } from "@/@mock/draggable";
import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

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

  const style = {
    opacity: isDragging ? "0.7" : "1",
  };

  return (
    <div
      className="drag-item"
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
    >
      {option.option}
    </div>
  );
}
