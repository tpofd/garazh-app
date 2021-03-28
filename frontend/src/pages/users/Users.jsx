import {Card} from "../../components/card/Card";
import {AnimatePresence} from "framer-motion";
import {CardPeopleIncome} from "../../components/cardPeopleIncome/CardPeopleIncome";
import S from "./User.module.scss"
import {motion} from "framer-motion"
import {CardPeopleIncomeOutcome} from "../../components/cardPeopleIncomeOutcome/CardPeopleIncomeOutcome";
import {CardRequestedPeople} from "../../components/cardRequestedPeople/CardRequestedPeople";
import {CardPeopleTimesIncome} from "../../components/cardPeopleTimesIncome/cardPeopleTimesIncome";
import {CardRequests} from "../../components/cardRequests/cardRequests";
import {CardSexAge} from "../../components/cardSexAge/cardSexAge";
import {CardNationality} from "../../components/cardNationality/cardNationality";
import {Button} from "@material-ui/core";
import {ArrowDownward} from "@material-ui/icons";

export const Users = () => {
    return (
        <motion.div
            initial={{opacity: 0, scale: 0.5}}
            animate={{
                opacity: 1, scale: 1, transition: {
                    delayChildren: 0.3,
                    staggerChildren: 0.3
                }
            }} className={S.wrapper}>
            <CardPeopleIncome key="1"/>
            <CardPeopleIncomeOutcome key="2"/>
            <CardRequestedPeople key="3"/>
            <CardPeopleTimesIncome key="4"/>
            <CardRequests key="5"/>
            <CardSexAge key="6"/>
            <CardNationality key="7"/>
            <Button href={"./presentation28_03.pptx"} download={"./presentation28_03.pptx"} color={"primary"} variant={"contained"}><ArrowDownward/>Скачать презентацию</Button>
        </motion.div>
    )
}