import S from "./CardPeopleIncomeOutcome.module.scss"
import {Card} from "../card/Card";
import {Image} from "semantic-ui-react";
import more from "../../images/more.svg"

export const CardPeopleIncomeOutcome = ({children,title,...props}) => (
    <Card title="Зашли и вышли" extraTitle={<Image src={more}/>} {...props}>
        <span>69 people</span>
        <span>+ 0,7%</span>
    </Card>
)