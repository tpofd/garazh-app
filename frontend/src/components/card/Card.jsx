import S from "./Cards.module.scss"
import {motion} from "framer-motion"
export const Card = ({children,title,extraTitle,index=1,...props}) => (
    <motion.div initial={{y: 20, opacity: 0}} animate={{y: 0, opacity: 1}} {...props} className={S.card}>
        <div className={S.header}>
            {title && <span className={S.title}>{title}</span>}
            {extraTitle && <span className={S.extraTitle}>{extraTitle}</span>}
        </div>
        <div className={S.body}>{children}</div>
    </motion.div>
)