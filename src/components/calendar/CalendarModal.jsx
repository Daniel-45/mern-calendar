import React from 'react';
import Modal from 'react-modal';
import moment from 'moment';
import DateTimePicker from 'react-datetime-picker';
import { useState } from 'react';
import Swal from 'sweetalert2';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

Modal.setAppElement('#root');

const now = moment().minutes(0).seconds(0).add(1, 'hours');
const nowPlusOneHour = now.clone().add(1, 'hours');

export const CalendarModal = () => {

    const [startDate, setStartDate] = useState(now.toDate());
    const [endDate, setEndDate] = useState(nowPlusOneHour.toDate()); // one hour more start date

    const [formValues, setFormValues] = useState({
        title: 'Evento',
        notes: '',
        start: now.date(),
        end: nowPlusOneHour.date()
    });

    const { title, notes } = formValues;

    const handleInputChange = ({ target }) => { 
        setFormValues({
            ...formValues,
            [target.name]: target.value
        })
    }

    const closeModal = () => {
        // TODO Close modal
    }

    const handleStartDateChange = (e) => {
        setStartDate(e);
        setFormValues({
            ...formValues,
            start: e
        })
    }

    const handleEndDateChange = (e) => {
        setEndDate(e);
        setFormValues({
            ...formValues,
            end: e
        })
    }

    const handleSubmitForm = (e) => {
        e.preventDefault();

        // TODO The end time must be greater than the start time.

        if (title.trim().length === 0) {
            return Swal.fire({
                icon: 'info',
                title: 'Advertencia',
                text: 'El título del evento es obligatorio',
              })
        }

        // TODO Save to database

        closeModal();
    }

    return (
        <Modal
            isOpen={true}
            onRequestClose={closeModal}
            style={customStyles}
            closeTimeoutMS={300}
            className="modal"
            overlayClassName="modal-background"
        >
            <h2> Nuevo evento </h2>
            <hr />
            <form className="container" onSubmit={handleSubmitForm}>

                <div className="form-group">
                    <label>Fecha y hora inicio</label>
                    <DateTimePicker
                        onChange={handleStartDateChange}
                        value={startDate}
                        className="form-control"
                    />
                </div>

                <div className="form-group">
                    <label>Fecha y hora fin</label>
                    <DateTimePicker
                        onChange={handleEndDateChange}
                        value={endDate}
                        minDate={startDate}
                        className="form-control"
                    />
                </div>

                <hr />
                <div className="form-group">
                    <label>Titulo y notas</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Título del evento"
                        autoComplete="off"
                        name="title"
                        value={title}
                        onChange={handleInputChange}
                    />
                    <small id="emailHelp" className="form-text text-muted">
                        Descripción corta
                    </small>
                </div>

                <div className="form-group">
                    <textarea
                        type="text"
                        className="form-control"
                        placeholder="Notas"
                        rows="5"
                        name="notes"
                        value={notes}
                        onChange={handleInputChange}
                    ></textarea>
                    <small id="emailHelp" className="form-text text-muted">Información adicional</small>
                </div>

                <button
                    type="submit"
                    className="btn btn-outline-primary btn-block"
                >
                    <span> Guardar</span>
                </button>

            </form>
        </Modal>
    )
}
