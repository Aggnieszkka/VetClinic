import React, { Component } from 'react';
import CalendarMenuButton from './CalendarMenuButton';
import CalendarLegend from './CalendarLegend';
import './style.css';
import CalendarWeekPicker from './CalendarWeekPicker';

class CalendarMenu extends Component {

    render() {
        return (
            <div className="calendarMenuContainer">

                <div className="calendarMenuButtonContainer">
                    <CalendarMenuButton text='Dodaj wizytę' color=' rgb(78, 78, 241)' icon='AddSvg' />
                    <CalendarMenuButton text='Dodaj godziny' color=' rgb(78, 78, 241)' icon='AddWorkingHoursSvg' />
                    <CalendarMenuButton text='Usuń' color=' rgb(78, 78, 241)' icon='DeleteSvg' />
                    <CalendarMenuButton text='Mail' color=' rgb(78, 78, 241)' icon='MailSvg' />

                    <div className="calendarWeekPickerContainer">
                        <CalendarWeekPicker />
                    </div>
                </div>

                <div className="calendarLegendContainer">
                    <CalendarLegend />
                </div>

            </div>
        );
    }
}

export default CalendarMenu;