import React from "react";
import s from "./AlternativeMessage.module.css";

type messageType = {
    avatar: string,
    name: string,
    message: string,
    time: string,
}

function AlternativeMessage(props: messageType) {
    return (
        <div className={s.message}>
            <div className={s.ava}>
                <img src={props.avatar} alt=""/>
            </div>
            <div className={s.name}>
                <div>
                    <span>{props.name}</span>
                </div>
            </div>
            <div className={s.text}>
                <div>
                    <span>{props.message}</span>
                </div>
                <div className={s.el}></div>
            </div>
            <div className={s.time}>
                <div><span>{props.time}</span></div>
            </div>
        </div>
    );
}

export default AlternativeMessage;
