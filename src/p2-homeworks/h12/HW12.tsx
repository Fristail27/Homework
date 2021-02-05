import React, { ChangeEvent } from "react";
import s from "./HW12.module.css";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {changeThemeAC, themeStateType, themeType} from "./bll/themeReducer";
import Request from "../h13/Request";


function HW12() {
    const theme = useSelector<AppStoreType, themeStateType>(state => state.theme); // useSelector
    const isTheme = theme.theme
    const dispatch = useDispatch()

    const onChangeCallback = (e:ChangeEvent<HTMLSelectElement>) => {
        const action = changeThemeAC(e.currentTarget.value as themeType)
        dispatch(action)
    }

    return (
        <div className={s.main + " " + `${s[isTheme]}`}>
            <hr/>
            <span className={s[isTheme + '-text']}>
                homeworks 12
            </span>

            <div>
                <select onChange={onChangeCallback}>
                    <option value="dark">Dark</option>
                    <option value="light">Light</option>
                    <option value="red">Red</option>
                </select>
            </div>


            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}

            <hr/>

            <Request/>
        </div>
    );
}

export default HW12;
