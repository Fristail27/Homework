import React, {useState} from "react";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import moment from 'moment-with-locales-es6';
moment.locale('ru');

function Clock() {
    const [timerId, setTimerId] = useState<number>(0);
    const [date, setDate] = useState(moment());
    const [show, setShow] = useState<boolean>(false);


    const stop = () => {
        // stop
        clearInterval(timerId)
    }
    const start = () => {
        stop();
        setDate(moment())
        const id: number = window.setInterval(() => {
            setDate(moment())
        }, 1000);
        setTimerId(id);
    }
    const onMouseEnter = () => {
        setShow(true)
        // show
    };
    const onMouseLeave = () => {
        // close
        setShow(false)
    };

    const stringTime = `${date.format("HH:mm:ss")}`; // fix with date
    const stringDate = `${date.format("DD MMMM")}`; // fix with date
    return (
        <div style={{position:"relative", display:"inline-block"}}>
            <div style={{fontSize:38}} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                {stringTime}
            </div>
            {show && (
                <div style={{position:"absolute", width:300, background:"linear-gradient(90deg, rgba(62,62,64,1) 0%, rgba(242,240,240,1) 100%)", left:"100%", top:"-20%", borderRadius: 15, border:"3px solid DimGrey"}}>
                    <p style={{textAlign:"center", fontSize:38, verticalAlign: "middle", color:"rgb(29, 43, 71)"}}>{stringDate}</p>
                </div>
            )}

            <SuperButton onClick={start}>start</SuperButton>
            <SuperButton onClick={stop}>stop</SuperButton>

        </div>
    );
}

export default Clock;
