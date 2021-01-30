import React from 'react'
import {Provider} from 'react-redux'
import {combineReducers, createStore} from 'redux'
import {loadingReducer} from "../h10/bll/loadingReducer";
import {themeReducer} from "./bll/themeReducer";

const rootReducer = combineReducers({
    loading: loadingReducer,
    theme: themeReducer,
})

export const storyBookStore = createStore(rootReducer);

export const ReduxStoreProviderDecorator = (storyFn: any) => (
    <Provider
        store={storyBookStore}>{storyFn()}
    </Provider>)