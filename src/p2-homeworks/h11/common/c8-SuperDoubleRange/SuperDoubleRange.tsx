import React, {useState} from "react";
import SuperRange from "../c7-SuperRange/SuperRange";
import s from "./SuperDoubleRange.module.css"

type SuperDoubleRangePropsType = {
    onChangeRange: (value: [number, number]) => void
    value: [number, number]
    min:number
    max:number
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value, min, max,
        //step, disable, ...
    }
) => {
    // сделать самому, можно подключать библиотеки
    let classOne = {
        position:"absolute" as const,
        width:value[1],
        backgroundColor:"red",
    }
    let classTwo = {
        position:"absolute" as const,
        width:(max-value[1]),
        left:value[1],
    }
    const minFunc = () => {
        if (value[1] > value[0]) {
            return (value[1]-1)
        }
    }

    return (
        <div className={s.main} >
            <SuperRange max={value[1]} onChange={(e)=>onChangeRange([(+e.currentTarget.value), value[1]])} style={classOne} value={value[0]} />
            <SuperRange min={minFunc()} onChange={(e)=>onChangeRange([value[0],(+e.currentTarget.value)])} style={classTwo}  value={value[1]}/>
            DoubleRange
        </div>
    );
};

export default SuperDoubleRange;
