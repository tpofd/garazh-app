import S from "./CardPeopleIncome.module.scss"
import {Card} from "../card/Card";
import {Image} from "semantic-ui-react";
import more from "../../images/more.svg"

export const CardPeopleIncome = ({children,title,...props}) => (
    <Card title="Человек пришло" extraTitle={<Image src={more}/>} {...props}>
        <span>271 people</span>
        <span>+ 0,7%</span>
    </Card>
)