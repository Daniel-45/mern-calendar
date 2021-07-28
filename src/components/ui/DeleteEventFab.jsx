import React from 'react'
import { useDispatch } from 'react-redux'
import { eventStartDeleteAction } from '../../actions/events';

export const DeleteEventFab = () => {

    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(eventStartDeleteAction());
    }

    return (
        <button
            className="btn btn-danger fab-danger"
            onClick={handleDelete}
        >
            <i className="fas fa-trash"></i>
        </button>
    )
}
