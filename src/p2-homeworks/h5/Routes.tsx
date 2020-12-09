import React from "react";
import {Route, Redirect, Switch} from 'react-router-dom';
import s from "./Routes.module.css";
import PreJunior from "./pages/PreJunior";
import Error404 from "./pages/Error404";

export const PATH = {
    PRE_JUNIOR: "/preJunior",
    JUNIOR: "/Junior",
    JUNIOR_PLUS: "/Junior+",

    // add paths
}

function Routes() {
    return (
        <div className={s.mainPage}>
            {/*Switch выбирает первый подходящий роут*/}
            <Switch>

            {/*в начале мы попадаем на страницу "/" и переходим сразу на страницу PRE_JUNIOR*/}
            {/*exact нужен чтоб указать полное совподение (что после "/" ничего не будет)*/}
            <Route path={"/"} exact render={() => <Redirect to={PATH.PRE_JUNIOR}/>}/>

            <Route path={PATH.PRE_JUNIOR} render={() => <PreJunior/>}/>
            <Route path={PATH.JUNIOR} render={() => <Error404/>}/>
            <Route path={PATH.JUNIOR_PLUS} render={() => <Error404/>}/>
                // add routes

            {/*у этого роута нет пути, он отрисуется если пользователь захочет попасть на несуществующую страницу*/}
            <Route render={() => <Error404/>}/>

            </Switch>
        </div>
    );
}

export default Routes;
