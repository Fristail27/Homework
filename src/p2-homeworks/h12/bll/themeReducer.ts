const CHANGE_THEME = "CHANGE_THEME"

export type themeStateType = {
    theme: themeType
}

export type themeType = "dark" | "red" | "light"

type changeThemeActionType = {
    type: "CHANGE_THEME",
    theme: themeType
}

const initState = {
    theme: "dark" as const,
};

export const themeReducer = (state:themeStateType = initState, action: changeThemeActionType): themeStateType => { // fix any
    switch (action.type) {
        case CHANGE_THEME: {
            return {...state, theme: action.theme };
        }
        default: return state;
    }
};

export const changeThemeAC = (theme: themeType): changeThemeActionType => {
    return {type: CHANGE_THEME, theme}
}; // fix any