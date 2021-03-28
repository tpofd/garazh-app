import {Group, Rect, Text, Transformer} from "react-konva";
import {useEffect, useRef} from "react";

export const Exponat = ({shape, onChange, onSelect, isSelected}) => {
    const shapeRef = useRef();
    const trRef = useRef();

    useEffect(() => {
        if (isSelected) {
            trRef.current.nodes([shapeRef.current]);
            trRef.current.getLayer().batchDraw();
        }
    }, [isSelected]);

    return (
        <>
        <Group
            draggable
            x={shape.x}
            y={shape.y}
            width={shape.width}
            height={shape.height}
            onClick={onSelect}
            onTap={onSelect}
            ref={shapeRef}
            onDragEnd={(e) => {
                onChange({
                    ...shape,
                    x: e.target.x(),
                    y: e.target.y(),
                });
            }}
            onTransformEnd={(e) => {
                // transformer is changing scale of the node
                // and NOT its width or height
                // but in the store we have only width and height
                // to match the data better we will reset scale on transform end
                const node = shapeRef.current;
                const scaleX = node.scaleX();
                const scaleY = node.scaleY();

                // we will reset it back
                node.scaleX(1);
                node.scaleY(1);
                onChange({
                    ...shape,
                    x: node.x(),
                    y: node.y(),
                    // set minimal value
                    width: Math.max(5, node.width() * scaleX),
                    height: Math.max(node.height() * scaleY),
                });
            }}
        >
            <Rect
                x={0}
                y={0}
                width={shape.width}
                height={shape.height}
                fill="#D86F6F"
            />
            <Text
                text={shape.name}
                fontSize={16}
                fill={"#fff"}
                align={"center"}
                verticalAlign={"middle"}
                width={shape.width}
                height={shape.height}
            />
        </Group>
            {isSelected && (
                <Transformer
                    ref={trRef}
                    rotateEnabled={false}
                    boundBoxFunc={(oldBox, newBox) => {
                        if (newBox.width < 5 || newBox.height < 5) {
                            return oldBox;
                        }
                        return newBox;
                    }}
                />
            )}
        </>
    )
}