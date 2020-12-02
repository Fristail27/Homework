import React from "react";
import {AffairType} from "./HW2";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import s from "./Affairs.module.css"

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType,
    deleteAffairCallback: (_id: number) => void,
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => props.deleteAffairCallback(props.affair._id);
    return (
        <div className={s.affair} key={props.affair._id}>
            <div className={s.someClass}>{props.affair.name + "  " + props.affair.priority + "   "}</div>
            <SuperButton onClick={deleteCallback}>Delete</SuperButton>
        </div>
    );
}

export default Affair;
