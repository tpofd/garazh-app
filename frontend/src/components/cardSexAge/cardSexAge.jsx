import S from "./cardSexAge.module.scss"
import {Card} from "../card/Card";
import {Image} from "semantic-ui-react";
import more from "../../images/more.svg"
import gender from "../../images/Gender.svg"

export const CardSexAge = ({children,title,...props}) => (
    <Card title="Пол и возраст" extraTitle={<Image src={more}/>} {...props}>
        <Image src={gender}/>
    </Card>
)