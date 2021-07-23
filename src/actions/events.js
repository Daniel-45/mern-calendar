import { types } from "../types/types";

export const addNewEventAction = (event) => ({
    type: types.eventAddNew,
    payload: event
});

export const setActiveEventAction = (event) => ({
    type: types.eventSetActive,
    payload: event
});

export const clearActiveEventAction = () => ({
    type: types.eventClearActiveEvent
});