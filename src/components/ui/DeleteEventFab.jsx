import React from 'react'
import { useDispatch } from 'react-redux'
import Swal from 'sweetalert2';
import { eventStartDeleteAction } from '../../actions/events';

export const DeleteEventFab = () => {

    const dispatch = useDispatch();

    const handleDelete = () => {
        Swal.fire({
            title: '¿Está seguro?',
            text: "No podrá revertir esto!!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, elimimar',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(eventStartDeleteAction());
                Swal.fire(
                    'Eliminado!!',
                    'Tu evento ha sido borrado',
                    'success'
                )
            }
        })
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
