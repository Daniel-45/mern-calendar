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
import { DeleteEventFab } from '../ui/DeleteEventFab';
import { uiOpenModalAction } from '../../actions/ui';
import { clearActiveEventAction, eventStartLoadingAction, setActiveEventAction } from '../../actions/events';
import { useEffect } from 'react';

moment.locale('es');

const localizer = momentLocalizer(moment);

export const CalendarScreen = () => {

    const { events, activeEvent } = useSelector(state => state.calendar);

    const { uid } = useSelector(state => state.auth);

    const dispatch = useDispatch();

    const [lastView, setLastView] = useState(localStorage.getItem('lastview') || 'month');

    useEffect(() => {
        dispatch(eventStartLoadingAction());
    }, [dispatch])

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

    const onSelectedSlot = (e) => {
        dispatch(clearActiveEventAction())
    }

    const eventStyleGetter = (event, start, end, isSelected) => {

        const style = {
            backgroundColor: (uid === event.user._id) ? '#367cf7' : '#455a64',
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
                onSelectSlot={onSelectedSlot}
                selectable={true}
                view={lastView}
                components={{
                    event: CalendarEvent
                }}
            />

            <AddNewFab />

            {(activeEvent) && <DeleteEventFab />}

            <CalendarModal />
        </div>
    )
}
