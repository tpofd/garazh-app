import {CanvasCreate} from "../../components/canvasCreate/canvasCreate";
import S from "./Base.module.scss"
import {Card} from "../../components/card/Card";
import {CanvasContext,CanvasSelectContext} from "./BaseContext";
import {useContext, useEffect, useState} from "react";
import {Button, TextField} from "@material-ui/core";
import {getAllExps} from "../../api";
import {useHistory} from "react-router-dom";
import {motion} from "framer-motion";


export const Base = () => {
    const {exponats, setExponats} = useContext(CanvasContext)
    const {selectedId, selectShapeId} = useContext(CanvasSelectContext)
    const [name,setName] = useState("")
    useEffect(()=>{
        getAllExps().then(data=>{
            console.log("data",data)
        }).catch(err=>{
            console.log("error",err.message)
        })
    },[])
    useEffect(()=>{
        if(selectedId){
            setName(exponats[selectedId-1]?.name)
        }
    },[selectedId])
    const accseptHandler = ()=>{
        const _exponats = [...exponats]
        _exponats[selectedId-1].name = name
        setExponats(_exponats)
    }
    return (
        <>
            <CanvasCreate />
            <motion.div initial={{opacity:0,scaleY:0}} animate={{opacity:1,scaleY:1}} className={S.wrapper}>
                <Card title="Редакировать экспонат">
                    <TextField label="Заголовок экспоната" variant="outlined" value={name} onChange={(e)=>{setName(e.target.value)}} />
                    <Button onClick={accseptHandler} variant={"contained"} color={"primary"}>Применить</Button>
                </Card>
            </motion.div>
        </>
    )
};