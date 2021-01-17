import {AppStoreType} from "./store";

const SET_LOADING = "SET_LOADING"

const initState :loadingReducerStateType = {
    loading: false
};

type LoadingActionType = {
    type: typeof SET_LOADING
    loading: boolean
}
type loadingReducerStateType = {
    loading: boolean
}


export const loadingReducer = (state:loadingReducerStateType = initState, action: LoadingActionType): loadingReducerStateType => { // fix any
    switch (action.type) {
        case SET_LOADING: {
            return {loading: action.loading}
        }
        default: return state;
    }
};

export const loadingAC = (loading:boolean): LoadingActionType => ({type: SET_LOADING, loading}); // fix any