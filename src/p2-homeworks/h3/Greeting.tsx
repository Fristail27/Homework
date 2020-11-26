import React, {ChangeEvent, KeyboardEvent} from "react";
import s from "./Greeting.module.css";

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
            <input value={name} onKeyPress={onKeyPressHandler} onChange={setNameCallback}  className={inputClass}/>
            <span>{error}</span>
            <div className={s.btn}><button onClick={addUser}>add</button></div>
            <p>Количество добавленных имен: {totalUsers}</p>
        </div>
    );
}

export default Greeting;
