import S from "./cardRequests.module.scss"
import {Card} from "../card/Card";
import {Image} from "semantic-ui-react";
import more from "../../images/more.svg"
import pie from "../../images/Pie.svg"

export const CardRequests = ({children,title,...props}) => (
    <Card title="Отзывы" extraTitle={<Image src={more}/>} {...props}>
        <Image src={pie}/>
    </Card>
)