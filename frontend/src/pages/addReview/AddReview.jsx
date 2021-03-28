import S from "./AddReview.module.scss"
import {Card} from "../../components/card/Card";
import {CanvasReviewContext,CanvasReviewContextSelected} from "./AddReviewContext";
import {useContext, useEffect, useState} from "react";
import {Box, Button, ButtonGroup, Grid, IconButton, List, ListItem, TextField} from "@material-ui/core";
import {getAllExps} from "../../api";
import {CanvasCreateReview} from "../../components/canvasCreateReview/canvasCreateReview";
import {Add} from "@material-ui/icons";
import {motion} from "framer-motion"


export const AddReview=()=>{
    const {exponats, setExponats} = useContext(CanvasReviewContext)
    const {selectedId, selectShapeId} = useContext(CanvasReviewContextSelected)
    const [points, setPoints] = useState([])
    const [name,setName] = useState("")
    const index = exponats.findIndex(v=>(v.picture_id === selectedId))
    useEffect(()=>{
        getAllExps().then(data=>{
            console.log("data",data)
        }).catch(err=>{
            console.log("error",err.message)
        })
    },[])
    useEffect(()=>{
        if(selectedId){
            setName(exponats[index]?.event_name)
        }
    },[selectedId])
    const accseptHandler = ()=>{

    }
    const addHandler = ()=>{
        const _points = [...points]
        console.log("_points",_points,selectedId,exponats)
        setPoints([..._points,{
            y: selectedId,
            coords: {x:exponats[index].x,y:exponats[index].y},
            name: exponats[index]?.event_name
        }])
    }
    return (
        <>
            <CanvasCreateReview points={points}/>
            <motion.div initial={{opacity:0,scaleY:0}} animate={{opacity:1,scaleY:1}} className={S.wrapper}>
                <Card title="Вести наблюдение">
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Button onClick={accseptHandler} variant={"contained"} color={"primary"}>Применить</Button>
                            <TextField label="Название экспоната" disabled value={name} />
                            <IconButton onClick={addHandler} color={"primary"} disabled={!selectedId}><Add/></IconButton>
                        </Grid>
                        <Grid item>
                            <List>
                                {points.map(v=>(
                                    <ListItem>
                                        {v.name}
                                    </ListItem>
                                ))}
                            </List>
                        </Grid>
                    </Grid>
                </Card>
            </motion.div>
        </>
    )
};