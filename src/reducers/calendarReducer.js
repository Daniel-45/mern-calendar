import moment from "moment";
import { types } from "../types/types";

const initialState = {
    events: [{
        title: 'Aprender React',
        start: moment().toDate(),
        end: moment().add(2, 'hours').toDate(),
        bgcolor: '#fafafa',
        notes: 'Dedicar dos horas',
        user: {
            _id: '60f9f4eabb3d9e0857e01b44',
            name: 'Daniel'
        }
    }],
    activeEvent: null
}

export const calendarReducer = (state= initialState, action) => {

    switch (action.type) {
        case types.eventSetActive:
            return {
                ...state,
                activeEvent: action.payload
            }
        case types.eventAddNew:  {
            return {
                ...state,
                events: [
                    ...state.events,
                    action.payload
                ]
            }  
        }
        case types.eventClearActiveEvent:
            return {
                ...state,
                activeEvent: null
            }
        default:
            return state;
    }
}