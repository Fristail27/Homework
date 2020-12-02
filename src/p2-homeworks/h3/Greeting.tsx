import React, {ChangeEvent, KeyboardEvent} from "react";
import s from "./Greeting.module.css";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import SuperInputText from "../h4/common/c1-SuperInputText/SuperInputText";

type GreetingPropsType = {
    name: string,
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void
    addUser: () => void,
    onKeyPressHandler: (e: KeyboardEvent<HTMLInputElement>) => void,
    error: string,
    totalUsers: number,
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, onKeyPressHandler, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = (name ==="") ? s.error : s.someClass; // need to fix with (?:)

    return (
        <div className={s.container}>
            <SuperInputText value={name} onKeyPress={onKeyPressHandler} onChange={setNameCallback} error={error} className={inputClass}/>
            <div className={s.btn}><SuperButton onClick={addUser}>add</SuperButton></div>
            <p>Количество добавленных имен: {totalUsers}</p>
        </div>
    );
}

export default Greeting;
