import React, {Component} from 'react';
import {ReactComponent as CalendarSvg} from './img/calendar.svg';
import {ReactComponent as PawSvg} from './img/paw.svg';
import {ReactComponent as BookSvg} from './img/book.svg';
import './style.css';

class MainMenuButton extends Component {

    render() {
        let iconSvg = "";
        if (this.props.icon === "CalendarSvg") {
            iconSvg = <CalendarSvg className={`icon`} />;
        }
        else if (this.props.icon === "PawSvg") {
            iconSvg = <PawSvg className={`icon`} />
        }
        else if (this.props.icon === "BookSvg") {
            iconSvg = <BookSvg className={`icon`} />
        }

        return (
            <div class="mainMenuButton" style={{ backgroundColor: this.props.color }}>
                <div class="iconBox">
                    {iconSvg}
                </div>
                <div class="textBox">
                    {this.props.text}
                </div>
            </div>
        );
    }
}

export default MainMenuButton;