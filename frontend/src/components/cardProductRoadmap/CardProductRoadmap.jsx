import S from "./CardProductRoadmap.module.scss"
import {Card} from "../card/Card";
import {Image} from "semantic-ui-react";
import more from "../../images/more.svg"
import productRoadmap from "../../images/ProductRoudmap.svg"

export const CardProductRoadmap = ({children,title,...props}) => (
    <Card title="Product roadmap" extraTitle={<Image src={more}/>} {...props}>
        <Image src={productRoadmap} />
    </Card>
)