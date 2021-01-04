export type UserType = {
    _id: number,
    name: string,
    age: number,
}

export type ActionType = {
    type: "sort" | "check",
    payload: "up" | "down" | number,
}



export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] | Error => {
    const stateCopy = [...state]
    switch (action.type) {
        case "sort": {
            if (action.payload === "up") {
                return stateCopy.sort((a:any,b:any) => {
                    if (a.name <= b.name) {
                        return -1
                    } else {
                        return 1
                    }
                })
            }
            if (action.payload === "down") {
                return stateCopy.sort((a:any,b:any) => {
                    if (a.name <= b.name) {
                        return 1
                    } else {
                        return -1
                    }
                })
            }
            return new Error("Invalid action payload")
        }
        case "check": {
            return stateCopy.filter(el => el.age>=action.payload)
        }
        default: return new Error("Invalid action type")
    }
};