import React, {useState} from "react";
import Affairs from "./Affairs";

// types
export type AffairPriorityType = "high" | "middle" | "low" // need to fix any
export type AffairType = {
    _id: number,
    name: string,
    priority: string,
}
export type FilterType = "all" | AffairPriorityType;

// constants
const defaultAffairs: Array<AffairType> = [
    {_id: 1, name: "React", priority: "high"},
    {_id: 2, name: "anime", priority: "low"},
    {_id: 3, name: "games", priority: "low"},
    {_id: 4, name: "work", priority: "high"},
    {_id: 5, name: "html & css", priority: "middle"},
];


// pure helper functions
export const filterAffairs = (affairs: Array<AffairType>, filter: FilterType): any => { // need to fix any
    if (filter === "all") return affairs;
    if (filter === "high") {return affairs.filter(a => a.priority === "high")};
    if (filter === "middle") {return affairs.filter(a => a.priority === "middle")
    } else {
        return affairs.filter(a => a.priority === "low")
    };
}
export const deleteAffair = (affairs:( Array<AffairType>), _id: number) => {
    return affairs.filter(t => {
        if( t._id !== _id) {
            return true
        } else {
            return false
        }
    })
}

function HW2() {
    let [affairs, setAffairs] = useState<Array<AffairType>>(defaultAffairs);

    const deleteAffairCallback = (_id: number) => {
        setAffairs(deleteAffair(affairs, _id))
    };


    const [filter, setFilter] = useState<FilterType>("all");

    const filteredAffairs = filterAffairs(affairs, filter);



    return (
        <div>
            <hr/>
            homeworks 2
            <Affairs
                data={filteredAffairs}
                setFilter={setFilter}
                deleteAffairCallback={deleteAffairCallback}
            />
            <hr/>
            <hr/>
        </div>
    );
}

export default HW2;
