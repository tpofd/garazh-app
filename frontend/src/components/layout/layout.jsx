import {motion} from "framer-motion"
import S from "./layout.module.scss"
import {Image} from "semantic-ui-react";
import logo from "../../images/logo.svg"
import {Link, NavLink} from "react-router-dom";
import {Add, List as ListIcon, AddLocation, Today, MapOutlined} from "@material-ui/icons";
import {IconButton, List, ListItem} from "@material-ui/core";

export const Layout = ({children}) => (
    <div className={S.container}>
        <header className={S.header}>
            <a href={"/"} className={S.logoWrapper}>
                <Image src={logo}/>
            </a>
            <div className={S.avatarWrapper}>
                <Image circular src="https://react.semantic-ui.com/images/wireframe/square-image.png"/>
            </div>
            <nav>
                <List>
                    <ListItem>
                        <NavLink to="/">
                            <IconButton color={"primary"}><Add/></IconButton>
                        </NavLink>
                    </ListItem>
                    <ListItem>
                        <NavLink to="/users"><IconButton><ListIcon/></IconButton></NavLink>
                    </ListItem>
                    <ListItem>
                        <NavLink to="/add-review"><IconButton><AddLocation/></IconButton></NavLink>
                    </ListItem>
                    <ListItem>
                        <NavLink to="/tasks"><IconButton><Today/></IconButton></NavLink>
                    </ListItem>
                    <ListItem>
                        <NavLink to="/user-map"><IconButton><MapOutlined/></IconButton></NavLink>
                    </ListItem>
                </List>
            </nav>
        </header>
        <main className={S.main}>
            {children}
        </main>
    </div>
);