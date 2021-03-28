import {Circle, Group, Rect, Text, Transformer} from "react-konva";
import {useEffect, useRef} from "react";

export const ExponatWiewer = ({shape, onChange, onSelect, isSelected}) => {
    const shapeRef = useRef();

    return (
        <Circle
            x={shape.x}
            y={shape.y}
            width={50}
            height={50}
            strokeWidth={2}
            strokeEnabled={isSelected}
            stroke={"#f00"}
            fill="#D86F6F"
            ref={shapeRef}
            onClick={onSelect}
            onTap={onSelect}
        />
    )
}