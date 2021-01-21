import React, {useCallback, useState} from "react";
import SuperRange from "./common/c7-SuperRange/SuperRange";
import SuperDoubleRange from "./common/c8-SuperDoubleRange/SuperDoubleRange";

function HW11() {
    const [value1, setValue1] = useState(0);
    const [value2, setValue2] = useState(100);
    const onChangeRange = useCallback((value:number) => {
        setValue1(value)
    },[])
    const onChangeSuperRange = (value: [number, number]) => {
        if (value[1]>value[0]) {
        setValue1(value[0])
        setValue2(value[1])}
    }
    return (
        <div>
            <hr/>
            homeworks 11

            {/*should work (должно работать)*/}
            <div>
                <p>{value1}</p>
                <SuperRange
                    onChangeRange={onChangeRange}
                    value={value1}
                    min={0}
                    max={100}
                    step={1}
                    // сделать так чтоб value1 изменялось
                />
            </div>

            <div>
                <span>{value1}</span>
                <SuperDoubleRange
                    value={[value1,value2]}
                    onChangeRange={onChangeSuperRange}
                    min={0}
                    max={100}
                    // сделать так чтоб value1 и value2 изменялось
                />
                <span>{value2}</span>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    );
}

export default HW11;
