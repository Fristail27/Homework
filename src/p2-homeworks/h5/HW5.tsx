import React from "react";
import s from "./HW5.module.css"
import Header from "./Header";
import Routes from "./Routes";
import {HashRouter} from "react-router-dom";

function HW5() {
    return (
        <div>
            {/*в gh-pages лучше работает HashRouter*/}
            <HashRouter>
                <Header/>
                <div className={s.border}>
                    <Routes/>
                </div>
            </HashRouter>
        </div>
    );
}

export default HW5;
