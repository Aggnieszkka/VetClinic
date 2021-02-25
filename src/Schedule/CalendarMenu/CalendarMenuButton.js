import React, {Component} from 'react';
import {ReactComponent as AddSvg} from './img/add.svg';
import {ReactComponent as AddWorkingHoursSvg} from './img/add_working_hours.svg';
import {ReactComponent as DeleteSvg} from './img/delete.svg';
import {ReactComponent as MailSvg} from './img/mail.svg';
import './style.css';

class CalendarMenuButton extends Component {
    
    render() {
        let iconSvg = "";
        if (this.props.icon === "AddSvg") {
            iconSvg = <AddSvg className={`calendarIcon`} />;
        }
        else if (this.props.icon === "AddWorkingHoursSvg") {
            iconSvg = <AddWorkingHoursSvg className={`calendarIcon`} />
        }
        else if (this.props.icon === "DeleteSvg") {
            iconSvg = <DeleteSvg className={`calendarIcon`} />
        }
        else if (this.props.icon === "MailSvg") {
            iconSvg = <MailSvg className={`calendarIcon`} />
        }

        return (
            <div class="calendarMenuButton" style={{ backgroundColor: this.props.color }}>
                <div className="calendarButtonIconBox">
                    {iconSvg}
                </div>
                <div className="calendarButtonTextBox">
                    {this.props.text}
                </div>
            </div>
        );
    }
}

export default CalendarMenuButton;