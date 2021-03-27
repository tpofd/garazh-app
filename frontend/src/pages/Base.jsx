import {Stage, Layer, Rect, Text, Image, Group} from 'react-konva';
import map1 from "../media/images/map1.svg"
import {useEffect, useState} from "react";

export const Base = () => {
    const [mapImage, setMapImage] = useState()
    const [position, setPosition] = useState({stageScale: 1, stageX: 0, stageY: 0})
    const loadImage = (src) => {
        const image = new window.Image();
        image.src = src;
        image.addEventListener('load', () => {
            setMapImage(image)
        });
    }
    useEffect(() => {
        loadImage(map1)
    }, [])
    const handleWheel = e => {
        e.evt.preventDefault();

        const scaleBy = 1.02;
        const stage = e.target.getStage();
        const oldScale = stage.scaleX();
        const mousePointTo = {
            x: stage.getPointerPosition().x / oldScale - stage.x() / oldScale,
            y: stage.getPointerPosition().y / oldScale - stage.y() / oldScale
        };

        const newScale = e.evt.deltaY < 0 ? oldScale * scaleBy : oldScale / scaleBy;


        setPosition({
            stageScale: newScale,
            stageX: -(mousePointTo.x - stage.getPointerPosition().x / newScale) * newScale,
            stageY: -(mousePointTo.y - stage.getPointerPosition().y / newScale) * newScale
        });
    };
    return (
        <div>
            <Stage width={window.innerWidth} height={window.innerHeight} scaleX={position.stageScale}
                   scaleY={position.stageScale}
                   x={position.stageX}
                   y={position.stageY}
                   onWheel={handleWheel}
            >
                <Layer>
                    <Group x={0} y={0} draggable>
                        <Image
                            x={0}
                            y={0}
                            width={806}
                            height={268}
                            image={mapImage}
                        />
                        <Group
                            draggable x={100} y={100} onClick={() => {
                        }}
                        >
                            <Rect
                                x={0}
                                y={0}
                                width={200}
                                height={20}
                                fill="red"
                            />
                            <Text text="Some text on canvas" fontSize={15}/>
                        </Group>
                    </Group>
                </Layer>
            </Stage>
        </div>
    )
};