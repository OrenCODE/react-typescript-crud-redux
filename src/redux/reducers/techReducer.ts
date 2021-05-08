import { Tech } from "../../types/api.types";
import { GET_TECHS, ADD_TECH, DELETE_TECH, TECHS_ERROR, SET_TECH_LOADING } from '../actions/types';

type TechState = {
    techs: Tech[],
    loading: boolean
    error: any
}

const initialState: TechState = {
    techs: [],
    loading: false,
    error: null
}

function techReducer(state = initialState, action: { type: string, payload: any }): TechState {
    const { type, payload } = action;

    switch (type) {
        case GET_TECHS:
            return {
                ...state,
                techs: payload,
                loading: false
            };
        case ADD_TECH:
            return {
                ...state,
                techs: [...state.techs, payload],
                loading: false
            };
        case DELETE_TECH:
            return {
                ...state,
                techs: state.techs.filter(x => x.id !== payload),
            };
        case SET_TECH_LOADING:
            return {
                ...state,
                loading: true
            }
        case TECHS_ERROR:
            console.error(payload);
            return {
                ...state,
                error: payload
            }
        default:
            return state
    }
}

export default techReducer