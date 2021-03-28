import {Stage, Layer, Rect, Text, Image, Group, Line} from 'react-konva';
import map from "../../images/map.svg"
import heat from "../../images/heat.png"
import {useContext, useEffect, useState} from "react";
import useImage from 'use-image';
import {Button, ButtonGroup, List, ListItem, TextField} from "@material-ui/core";
import S from "./canvasStatMap.module.scss";
import {Exponat} from "../exponat/Exponat";
import {CanvasContext, CanvasSelectContext} from "../../pages/base/BaseContext";
import {addPicture, getAllPictureIn} from "../../api";
import {useHistory} from "react-router-dom";
import {CanvasReviewContext, CanvasReviewContextSelected} from "../../pages/addReview/AddReviewContext";
import {ExponatWiewer} from "../exponat/ExponatWiewer";

export const CanvasStatMap = ({points}) => {
    const [mapImage] = useImage(map)
    const [heatImage] = useImage(heat)
    const [showHeat, setShowHeat] = useState(false)
    const [position, setPosition] = useState({stageScale: 1, stageX: 0, stageY: 0})
    const [exponats,setExponats] = useState([])
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
    const changeHitMap = ()=>{
        setShowHeat(!showHeat)
    }
    const imageHeight = ((window.innerWidth - 160) / mapImage?.width) * mapImage?.height
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
            <Stage width={window.innerWidth} height={600} scaleX={position.stageScale}
                   scaleY={position.stageScale}
                   x={position.stageX}
                   y={position.stageY}
                   onWheel={handleWheel}
            >
                <Layer>
                    <Group x={30} y={30} draggable>
                        {showHeat && <Image
                            x={-130}
                            y={-99}
                            width={(window.innerWidth - 160)+260}
                            height={(imageHeight)+114 || 200}
                            image={heatImage}
                        />}
                        <Image
                            width={window.innerWidth - 160}
                            height={imageHeight || 200}
                            image={mapImage}
                        />
                        {exponats?.map((e,i) => (
                            <ExponatWiewer
                                onSelect={() => {
                                    console.log("e",e)
                                }}
                                key={i}
                                shape={e}
                            />
                        ))}
                    </Group>
                </Layer>
            </Stage>
            <div className={S.buttonContainer}>
                <ButtonGroup color="primary" variant={"contained"} aria-label="outlined primary button group">
                    <Button onClick={changeHitMap}>Тепловая карта</Button>
                </ButtonGroup>
            </div>
        </div>
    )
};