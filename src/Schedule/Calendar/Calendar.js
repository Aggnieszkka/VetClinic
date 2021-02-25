import React, {Component} from 'react';
import './style.css';

class Calendar extends Component {

    state = {
        startHour: 10,
        endHour: 17,
    }

    render() {
        let rows = [];
        rows.push(<div className = "calendarRow topCalendarRow">
            <div className="calendarColumn hourColumn">-</div>
            <div className="calendarColumn longDayColumn">Poniedziałek</div>
            <div className="calendarColumn shortDayColumn">Pon.</div>
            <div className="calendarColumn longDayColumn">Wtorek</div>
            <div className="calendarColumn shortDayColumn">Wt.</div>
            <div className="calendarColumn longDayColumn">Środa</div>
            <div className="calendarColumn shortDayColumn">Śr.</div>
            <div className="calendarColumn longDayColumn">Czwartek</div>
            <div className="calendarColumn shortDayColumn">Czw.</div>
            <div className="calendarColumn longDayColumn">Piątek</div>
            <div className="calendarColumn shortDayColumn">Pt.</div>
            <div className="calendarColumn longDayColumn">Sobota</div>
            <div className="calendarColumn shortDayColumn">Sob.</div>
            <div className="calendarColumn longDayColumn">Niedziela</div>
            <div className="calendarColumn shortDayColumn">Niedz.</div>
        </div>);

        for (let i = this.state.startHour; i<= this.state.endHour; i++) {

            let columns = [];
            columns.push(<div className="calendarColumn hourColumn">{i}</div>);
            for(let j = 0; j < 7; j++) {
                columns.push(<div className="calendarColumn dayColumn" id={j+"-"+i}>-</div>);
            }

            if((i-this.state.startHour)%2 === 0){
                rows.push(<div className="calendarRow darkCalendarRow">
                    {columns}
                </div>);
            }
            else{
                rows.push(<div className="calendarRow lightCalendarRow">
                    {columns}
                </div>);
            }
        }
        return (
            <div className="calendarContainer">
                {rows}
            </div>
        );
    }
}

export default Calendar;