import {useState} from "react";

const {createContext} = require("react");
export const CanvasReviewContext = createContext();
export const CanvasReviewContextSelected = createContext();

export const AddReviewContext = ({children})=> {
    const [exponats, setExponats] = useState([])
    const [selectedId, selectShapeId] = useState(null);
    return(
    <CanvasReviewContext.Provider value={{exponats,setExponats}}>
        <CanvasReviewContextSelected.Provider value={{selectedId,selectShapeId}}>
            {children}
        </CanvasReviewContextSelected.Provider>
    </CanvasReviewContext.Provider>
)}