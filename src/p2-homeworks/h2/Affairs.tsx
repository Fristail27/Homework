import React from "react";
import Affair from "./Affair";
import s from './Affairs.module.css'
import {AffairType, FilterType} from "./HW2";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type AffairsPropsType = {
    data: Array<AffairType>,
    setFilter: (filterValue : FilterType) => void,
    deleteAffairCallback: (_id: number) => void,
}

function Affairs(props: AffairsPropsType) {
    let mappedAffairs = props.data.map((a: AffairType) => (
        <Affair
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => {props.setFilter("all")};
    const setHigh = () => {props.setFilter("high")};
    const setMiddle = () => {props.setFilter("middle")};
    const setLow = () => {props.setFilter("low")};

    return (
        <div className={s.conteiner}>

            {mappedAffairs}

            <SuperButton onClick={setAll}>All</SuperButton>
            <SuperButton onClick={setHigh}>High</SuperButton>
            <SuperButton onClick={setMiddle}>Middle</SuperButton>
            <SuperButton onClick={setLow}>Low</SuperButton>
        </div>
    );
}

export default Affairs;
