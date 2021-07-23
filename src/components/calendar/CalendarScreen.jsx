import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import { messages } from '../../helpers/calendar-messages-es';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'moment/locale/es';
import { Navbar } from '../ui/Navbar';
import { CalendarEvent } from './CalendarEvent';
import { CalendarModal } from './CalendarModal';
import { uiOpenModalAction } from '../../actions/ui';

moment.locale('es');

const localizer = momentLocalizer(moment);

const events = [{
    title: 'Estudiar React',
    start: moment().toDate(),
    end: moment().add(3, 'hours').toDate(),
    bgcolor: '#fafafa',
    notes: '',
    user: {
        _id: '60f9f4eabb3d9e0857e01b44',
        name: 'Daniel'
    }
}]

export const CalendarScreen = () => {

    const dispatch = useDispatch();

    const [lastView, setLastView] = useState(localStorage.getItem('lastview') || 'month');

    const onDoubleClickEvent = (e) => {
        dispatch(uiOpenModalAction());
    }

    const onSelectEvent = (e) => {
        console.log('Seleccionar');
    }

    const onViewChange = (e) => {
        setLastView(e);
        localStorage.setItem('lastview', e);
    }

    const eventStyleGetter = (event, start, end, isSelected) => {

        const style = {
            backgroundColor: '#367cf7',
            borderRadius: '0px',
            opacity: 0.8,
            display: 'block',
            color: '#ffffff'
        }

        return { style };
    }

    return (
        <div className="d-flex flex-column vh-100">
            <Navbar />

            <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                messages={messages}
                eventPropGetter={eventStyleGetter}
                onDoubleClickEvent={onDoubleClickEvent}
                onSelectEvent={onSelectEvent}
                onView={onViewChange}
                view={lastView}
                components={{
                    event: CalendarEvent
                }}
            />

            <CalendarModal />
        </div>
    )
}
