import S from "./cardNationality.module.scss"
import {Card} from "../card/Card";
import {Image} from "semantic-ui-react";
import more from "../../images/more.svg"
import nationality from "../../images/Nationality.svg"

export const CardNationality = ({children,title,...props}) => (
    <Card title="Национальность" extraTitle={<Image src={more}/>} {...props}>
        <Image src={nationality}/>
    </Card>
)