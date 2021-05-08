import { Log } from '../../types/api.types';
import { GET_LOGS, SET_LOADING, LOGS_ERROR, ADD_LOG, DELETE_LOG, SET_CURRENT, CLEAR_CURRENT, UPDATE_LOG, SEARCH_LOGS } from './types';

export const getLogs = () => async (dispatch: any) => {
    try {
        dispatch(setLoading());

        const res = await fetch('/logs');
        const data = await res.json();

        dispatch({
            type: GET_LOGS,
            payload: data
        });

    } catch (err) {
        dispatch({
            type: LOGS_ERROR,
            payload: err.response.statusText
        });
    }
}

export const addLog = (log: Log) => async (dispatch: any) => {
    try {
        dispatch(setLoading());

        const res = await fetch('/logs', {
            method: 'POST',
            body: JSON.stringify(log),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await res.json();

        dispatch({
            type: ADD_LOG,
            payload: data
        });

    } catch (err) {
        dispatch({
            type: LOGS_ERROR,
            payload: err.response.statusText
        });
    }
}

export const deleteLog = (id: number) => async (dispatch: any) => {
    try {
        dispatch(setLoading());

       await fetch(`/logs/${id}`, {
            method: 'DELETE',
        });

        dispatch({
            type: DELETE_LOG,
            payload: id
        });

    } catch (err) {
        dispatch({
            type: LOGS_ERROR,
            payload: err.response.statusText
        });
    }
}

export const updateLog = (log: Log) => async (dispatch: any) => {
    try {
        dispatch(setLoading());

       const res = await fetch(`/logs/${log.id}`, {
            method: 'PUT',
            body: JSON.stringify(log),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const data = await res.json();

        dispatch({
            type: UPDATE_LOG,
            payload: data
        });

    } catch (err) {
        dispatch({
            type: LOGS_ERROR,
            payload: err.response.statusText
        });
    }
}

export const searchLogs = (text: string) => async (dispatch: any) => {
    try {

        const res = await fetch(`/logs?q=${text}`);
        const data = await res.json();

        dispatch({
            type: SEARCH_LOGS,
            payload: data
        });

    } catch (err) {
        dispatch({
            type: LOGS_ERROR,
            payload: err.response.statusText
        });
    }
}

export const setCurrentLog = (log: Log) => {
    return {
        type: SET_CURRENT,
        payload: log
    }
}

export const clearCurrentLog = () => {
    return {
        type: CLEAR_CURRENT,

    }
}

const setLoading = () => {
    return {
        type: SET_LOADING
    };
}