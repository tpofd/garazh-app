import {useState} from "react";

const {createContext} = require("react");
export const CanvasContext = createContext();
export const CanvasSelectContext = createContext();

export const BaseContext = ({children})=> {
    const [exponats, setExponats] = useState([])
    const [selectedId, selectShapeId] = useState(null);
    return(
    <CanvasContext.Provider value={{exponats,setExponats}}>
        <CanvasSelectContext.Provider value={{selectedId,selectShapeId}}>
            {children}
        </CanvasSelectContext.Provider>
    </CanvasContext.Provider>
)}