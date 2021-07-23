import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import { messages } from '../../helpers/calendar-messages-es';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'moment/locale/es';
import { Navbar } from '../ui/Navbar';
import { CalendarEvent } from './CalendarEvent';
import { CalendarModal } from './CalendarModal';
import { AddNewFab } from '../ui/AddNewFab';
import { uiOpenModalAction } from '../../actions/ui';
import { setActiveEventAction } from '../../actions/events';

moment.locale('es');

const localizer = momentLocalizer(moment);

export const CalendarScreen = () => {

    const dispatch = useDispatch();

    const { events } = useSelector(state => state.calendar)

    const [lastView, setLastView] = useState(localStorage.getItem('lastview') || 'month');

    const onDoubleClickEvent = (e) => {
        dispatch(uiOpenModalAction());
    }

    const onSelectEvent = (e) => {
        dispatch(setActiveEventAction(e));
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

            <AddNewFab />

            <CalendarModal />
        </div>
    )
}
