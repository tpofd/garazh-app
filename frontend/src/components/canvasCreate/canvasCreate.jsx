import {Stage, Layer, Rect, Text, Image, Group} from 'react-konva';
import map from "../../images/map.svg"
import {useContext, useEffect, useState} from "react";
import useImage from 'use-image';
import {Button, ButtonGroup} from "@material-ui/core";
import S from "./canvasCreate.module.scss";
import {Exponat} from "../exponat/Exponat";
import {CanvasContext, CanvasSelectContext} from "../../pages/base/BaseContext";
import {addPicture} from "../../api";
import {useHistory} from "react-router-dom";

export const CanvasCreate = () => {
    const [mapImage] = useImage(map)
    const [position, setPosition] = useState({stageScale: 1, stageX: 0, stageY: 0})
    const {exponats,setExponats} = useContext(CanvasContext)
    const {selectedId, selectShapeId} = useContext(CanvasSelectContext)
    const history = useHistory()
    const checkDeselect = (e) => {
        console.log(e?.currentTarget?.clickEndShape?.index)
        if (!e?.currentTarget?.clickEndShape?.index) {
            selectShapeId(null);
        }
    };
    const imageHeight = ((window.innerWidth - 160) / mapImage?.width) * mapImage?.height
    console.log(imageHeight)
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
    const addExponatHandler = () =>{
        setExponats([...exponats,{
            x: 10,
            y: 10,
            width: 100,
            height: 100,
            name: "Экспонат 1",
            id: exponats.length+1
        }])
    }
    const saveHandler=()=>{
        Promise.all(exponats.map(exp=>(
            addPicture({event_id:1,x:exp.x,y:exp.y,name:exp.name})
        ))).then(data=>{
            history.push("/users")
        })
    }
    return (
        <div>
            <Stage width={window.innerWidth} height={600} scaleX={position.stageScale}
                   scaleY={position.stageScale}
                   x={position.stageX}
                   y={position.stageY}
                   onWheel={handleWheel}
                   onClick={checkDeselect}
            >
                <Layer>
                    <Group x={0} y={0} draggable>
                        <Image
                            x={30}
                            y={30}
                            width={window.innerWidth - 160}
                            height={imageHeight || 200}
                            image={mapImage}
                        />
                        {exponats.map((e,i) => (
                            <Exponat
                                key={i}
                                shape={e}
                                isSelected={e.id === selectedId}
                                onSelect={() => {
                                    selectShapeId(e.id);
                                }}
                                onChange={(newAttrs) => {
                                    const rects = [...exponats];
                                    rects[i] = newAttrs;
                                    setExponats(rects);
                                }}
                            />
                        ))}
                    </Group>
                </Layer>
            </Stage>
            <div className={S.buttonContainer}>
                <ButtonGroup color="primary" variant={"contained"} aria-label="outlined primary button group">
                    <Button onClick={addExponatHandler}>Добавить экспонат</Button>
                    <Button onClick={saveHandler}>Сохранить</Button>
                    <Button>Отменить</Button>
                </ButtonGroup>
            </div>
        </div>
    )
};