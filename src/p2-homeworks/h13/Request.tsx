import React, {useEffect, useState} from "react";
import SuperCheckbox from "../h4/common/c3-SuperCheckbox/SuperCheckbox";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import { API } from "./RequestAPI";

const Request = () => {
    const [state, setState] = useState<boolean>(false)
    const [text, setText] = useState<any>(null)

    // const [btn, setBtn] = useState<boolean>(false)
    // setBtn вешать на кнопку что бы при нажатии менялся стейт и запускался useEffect
    // useEffect(() => {
    //     const promise = API.requestCheckValue(state)
    //     promise
    //         .then(res=> setText("Успешно!!"))
    //         .catch(er=> setText("Ошибка!!"))
    // }, [btn])
    async function requestHandler () {
        try{
        await API.requestCheckValue(state)
        setText("Успешно!!")
        } catch (err) {setText("Ошибка сервера!!")}
    }



    return (
        <div>
            <SuperCheckbox onChange={()=> {
                setState(!state);
                setText(null)
            }} checked={state}>Check</SuperCheckbox>
            <SuperButton onClick={()=>{setText(null); requestHandler() }}>Check</SuperButton>
            <div>{text}</div>
        </div>
    )
}

export default Request