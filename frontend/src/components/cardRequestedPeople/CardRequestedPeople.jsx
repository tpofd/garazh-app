import S from "./CardRequestedPeople.module.scss"
import {Card} from "../card/Card";
import {Image} from "semantic-ui-react";
import more from "../../images/more.svg"
import graph from "../../images/IncomePeopleGraph.svg"

export const CardRequestedPeople = ({children,title,...props}) => (
    <Card title="Опросили" extraTitle={<Image src={more}/>} {...props}>
        <span>69 people</span>
        <span>+ 0,7%</span>
    </Card>
)