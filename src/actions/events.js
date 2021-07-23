import { types } from "../types/types";

export const addEventAction = (event) => ({
    type: types.eventAdded,
    payload: event
});

export const setActiveEventAction = (event) => ({
    type: types.eventSetActive,
    payload: event
});

export const clearActiveEventAction = () => ({
    type: types.eventClearActiveEvent
});

export const updateEventAction = (event) => ({
    type: types.eventUpdated,
    payload: event
});

export const deleteEventAction = () => ({
    type: types.eventDeleted
});