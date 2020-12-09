import React, {useState} from "react";
import s from "./Header.module.css";
import {NavLink} from 'react-router-dom';

function Header() {
    let [collapsed, setCollapsed] = useState<boolean>(true);
    const onClickHandler = () => {
        setCollapsed(!collapsed);

    };
    return (
        <div className={s.header}>
            <Title collapsed={collapsed} onClick={onClickHandler} title="Junior's menu"/>
            {!collapsed && <Accordeon/>}
        </div>
    )
};

function Title(props: any) {
    return (
            <div onClick={props.onClick} className={s.title}>{props.title}</div>
    );
}

function Accordeon() {
    return (<div className={s.navlinksAccordeon}>
        <ul>
            <div className={s.item}>
                <NavLink to="/preJunior" activeClassName={s.activeLink}>preJunior</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/Junior" activeClassName={s.activeLink}>Junior</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/Junior+" activeClassName={s.activeLink}>Junior+</NavLink>
            </div>
        </ul>
    </div>)
}

export default Header;
