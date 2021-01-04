import React, {useState} from "react";
import {homeWorkReducer, UserType} from "./bll/homeWorkReducer";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

const initialPeople = [
    {_id: 0, name: "Кот", age: 3},
    {_id: 1, name: "Александр", age: 66},
    {_id: 2, name: "Коля", age: 16},
    {_id: 3, name: "Виктор", age: 44},
    {_id: 4, name: "Дмитрий", age: 40},
    {_id: 5, name: "Ирина", age: 55},
]

function HW8() {
    const [people, setPeople] = useState(initialPeople);

    const finalPeople = people.map(p => (
        <div key={p._id}>
            {p.name + " " + p.age}
        </div>
    ))

    const sortUp = () => setPeople(homeWorkReducer(people, {type: "sort", payload: "up"}) as UserType[])
    const sortDown = () => setPeople(homeWorkReducer(people, {type: "sort", payload: "down"}) as UserType[])
    const filterAgeCheck = () => setPeople(homeWorkReducer(people, {type: "check", payload: 18}) as UserType[])

    return (
        <div>
            <hr/>
            <h3>homeworks 8</h3>

            {/*should work (должно работать)*/}

            {finalPeople}
            <SuperButton onClick={sortUp}>sort up</SuperButton>
            <SuperButton onClick={sortDown}>sort down</SuperButton>
            <SuperButton onClick={filterAgeCheck}>Check 18 age</SuperButton>
            <SuperButton onClick={()=> {setPeople(initialPeople)}}>Default state</SuperButton>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativePeople/>*/}
            <hr/>
        </div>
    );
};

export default HW8;
