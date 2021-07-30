import Swal from 'sweetalert2';
import { fetchWithToken } from '../helpers/fetch';
import { prepareEvents } from '../helpers/prepareEvents';
import { types } from '../types/types';

export const addNewEventAction = (event) => {
    return async (dispatch, getState) => {

        const { uid, name } = getState().auth;

        try {
            const response = await fetchWithToken('events', event, 'POST');
            const body = await response.json();

            if (body.ok) {
                event.id = body.event.id;
                event.user = {
                    _id: uid,
                    name
                }
                dispatch(addEventAction(event));
            }
        } catch (error) {
            console.log(error);
        }
    }
}

const addEventAction = (event) => ({
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

export const startUpdateEventAction = (event) => {
    return async (dispatch) => {
        try {

            const response = await fetchWithToken(`events/${event.id}`, event, 'PUT');
            const body = await response.json();

            if (body.ok) {
                dispatch(updateEventAction(event));
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: body.message,
                });
            }
        } catch (error) {
            console.log(error);
        }
    }
}

const updateEventAction = (event) => ({
    type: types.eventUpdated,
    payload: event
});

export const eventStartDeleteAction = () => {
    return async (dispatch, getState) => {
        const { id } = getState().calendar.activeEvent;

        try {

            const response = await fetchWithToken(`events/${id}`, {}, 'DELETE');
            const body = await response.json();

            if (body.ok) {
                dispatch(deleteEventAction());
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: body.message,
                });
            }
        } catch (error) {
            console.log(error);
        }
    }
}

const deleteEventAction = () => ({
    type: types.eventDeleted
});

export const eventStartLoadingAction = () => {
    return async (dispatch) => {

        try {
            const response = await fetchWithToken('events');
            const body = await response.json();
            const events = prepareEvents(body.events);

            dispatch(loadEventAction(events))
        } catch (error) {
            console.log(error);
        }
    }
}

const loadEventAction = (events) => ({
    type: types.eventLoaded,
    payload: events
});

export const cleanActiveEventLogout = () => ({ type: types.eventLogout });