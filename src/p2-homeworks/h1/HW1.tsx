import React from "react";
import Message from "./Message";
import AlternativeMessage from "./AlternativeMessage";

const messageData = {
    avatar: "https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",
    name: "Some Name",
    message: "some text",
    time: "22:00",
};
const AlternativemessageData = {
    avatar: "https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",
    name: "Alex",
    message: "Доброго времени суток) Не сразу нашел этот треугольник) а так конечно верстка слабая у меня пока" ,
    time: "22:06",
};


function HW1() {
    return (
        <div>
            <hr/>
            {/*homeworks 1*/}

            {/*should work (должно работать)*/}

            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />
            <hr/>
            <AlternativeMessage
                avatar={AlternativemessageData.avatar}
                name={AlternativemessageData.name}
                message={AlternativemessageData.message}
                time={AlternativemessageData.time}
            />
            <hr/>
        </div>
    );
}

export default HW1;
