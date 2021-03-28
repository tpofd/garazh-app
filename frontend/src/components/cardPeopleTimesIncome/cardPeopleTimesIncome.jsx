import S from "./cardPeopleTimesIncome.module.scss"
import {Card} from "../card/Card";
import {Image} from "semantic-ui-react";
import more from "../../images/more.svg"
import graph from "../../images/IncomePeopleGraph.svg";

export const CardPeopleTimesIncome = ({children,title,...props}) => (
    <Card title="Число посещений" extraTitle={<Image src={more}/>} {...props}>
        <Image src={graph} />
    </Card>
)