import {Stage, Layer, Rect, Text, Image, Group} from 'react-konva';
import map from "../../images/map.svg"
import {useContext, useEffect, useState} from "react";
import useImage from 'use-image';
import {Button, ButtonGroup, List, ListItem, TextField} from "@material-ui/core";
import S from "./canvasCreateReview.module.scss";
import {Exponat} from "../exponat/Exponat";
import {CanvasContext, CanvasSelectContext} from "../../pages/base/BaseContext";
import {addPicture, getAllPictureIn} from "../../api";
import {useHistory} from "react-router-dom";
import {CanvasReviewContext, CanvasReviewContextSelected} from "../../pages/addReview/AddReviewContext";
import {ExponatWiewer} from "../exponat/ExponatWiewer";

export const CanvasCreateReview = () => {
    const [mapImage] = useImage(map)
    const [position, setPosition] = useState({stageScale: 1, stageX: 0, stageY: 0})
    const {exponats,setExponats} = useContext(CanvasReviewContext)
    const {selectedId, selectShapeId} = useContext(CanvasReviewContextSelected)
    useEffect(()=>{
        getAllPictureIn(1).then(data=>{
            console.log(data)
            setExponats(data.map(d=>({
                ...d,
                id:d?.picture_id,
            })))
        }).catch(()=>{
            console.log("err")
            setExponats([
                {name:"1",x:0,y:0,id:1},
                {name:"2",x:50,y:50,id:2},
                {name:"3",x:300,y:100,id:3},
                {name:"4",x:0,y:200,id:4},
            ])
        })
    },[])
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
                    <Group x={30} y={30} draggable>
                        <Image
                            width={window.innerWidth - 160}
                            height={imageHeight || 200}
                            image={mapImage}
                        />
                        {exponats.map((e,i) => (
                            <ExponatWiewer
                                onSelect={() => {
                                    console.log("e",e)
                                    selectShapeId(e.id);
                                }}
                                isSelected={e.id === selectedId}
                                key={i}
                                shape={e}
                            />
                        ))}
                    </Group>
                </Layer>
            </Stage>
            <div className={S.buttonContainer}>
                <ButtonGroup color="primary" variant={"contained"} aria-label="outlined primary button group">
                    <Button onClick={saveHandler}>Сохранить</Button>
                </ButtonGroup>
            </div>
        </div>
    )
};