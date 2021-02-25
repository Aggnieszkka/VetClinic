import React, {Component} from 'react';
import Calendar from '../Schedule/Calendar/Calendar';
import CalendarMenu from '../Schedule/CalendarMenu/CalendarMenu';
import './style.css';

class Content extends Component {
    
    render() {
        return (
            <div className = "contentContainer">
                <CalendarMenu/>
                <Calendar/>
            </div>
        );
    }
} 

export default Content;