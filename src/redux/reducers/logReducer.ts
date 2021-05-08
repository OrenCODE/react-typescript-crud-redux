import { Log } from "../../types/api.types";
import { GET_LOGS, SET_LOADING, LOGS_ERROR, ADD_LOG, DELETE_LOG, SET_CURRENT, CLEAR_CURRENT, UPDATE_LOG, SEARCH_LOGS } from '../actions/types';

type LogState = {
    logs: Log[],
    current: Log | null,
    loading: boolean
    error: any
}

const initialState: LogState = {
    logs: [],
    current: null,
    loading: false,
    error: null
}

function logReducer(state = initialState, action: { type: string, payload: any }): LogState {
    const { type, payload } = action;

    switch (type) {
        case GET_LOGS:
            return {
                ...state,
                logs: payload,
                loading: false
            };
        case ADD_LOG:
            return {
                ...state,
                logs: [...state.logs, payload],
                loading: false
            };
        case DELETE_LOG:
            return {
                ...state,
                logs: state.logs.filter(x => x.id !== payload),
                loading: false
            };
        case UPDATE_LOG:
            return {
                ...state,
                logs: state.logs.map(x => x.id === payload.id ? action.payload : x),
                loading: false
            };
        case SEARCH_LOGS:
            return {
                ...state,
                logs: payload,
            };
        case SET_LOADING:
            return {
                ...state,
                loading: true
            };
        case LOGS_ERROR:
            console.error(payload);
            return {
                ...state,
                error: payload
            };
        case SET_CURRENT:
            return {
                ...state,
                current: payload
            };
        case CLEAR_CURRENT:
            return {
                ...state,
                current: null,
            };
        default:
            return state
    }
}

export default logReducer