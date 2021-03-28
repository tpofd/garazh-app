import {AnimatePresence} from "framer-motion";
import S from "./Tasks.module.scss"
import {motion} from "framer-motion"
import {CardProductRoadmap} from "../../components/cardProductRoadmap/CardProductRoadmap";

export const Tasks = () => {
    return (
        <motion.div initial={{opacity:0,scaleY:0}} animate={{opacity:1,scaleY:1}} className={S.wrapper}>
            <AnimatePresence>
                <CardProductRoadmap/>
            </AnimatePresence>
        </motion.div>
    )
}