import {loadingReducer} from "./loadingReducer";
import {combineReducers, createStore} from "redux";
import {themeReducer} from "../../h12/bll/themeReducer";

const reducers = combineReducers({
    loading: loadingReducer,
    theme: themeReducer,
});

const store = createStore(reducers);

export type AppStoreType = ReturnType<typeof reducers>

export default store



// @ts-ignore
window.store = store; // for dev
