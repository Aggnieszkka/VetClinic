import React, { Component } from 'react';
import CalendarLegendText from './CalendarLegendText';
import { ReactComponent as AddSvg } from './img/add.svg';
import { ReactComponent as DeleteSvg } from './img/delete.svg';
import { ReactComponent as FilterSvg } from './img/filter.svg';
import './style.css';

class CalendarLegend extends Component {

    constructor(props) {
        super(props);
        this.state = {
            names: [],
            showText: false,
        };

        this.showText = this.showText.bind(this);
        this.addName = this.addName.bind(this);
    }

    addName(name) {

        const randomColor = Math.floor(Math.random()*16777215).toString(16);

        if (name && name.trim()) {
            this.setState({
                names: this.state.names.concat(
                    [<div className="nameContainer">
                        <div className="nameColor" style={{backgroundColor: "#" + randomColor}}></div>
                        <div className="name"> {name} </div>
                    </div>]
                )
            });
        }
    }

    showText() {
        this.setState({ showText: !this.state.showText });
    }

    render() {
        return (
            <div>

                <div className="calendarLegendNames">

                    <div className="calendarLegendText">
                        {this.state.showText && <CalendarLegendText addName={this.addName} showText={this.showText} />}
                    </div>

                    {this.state.names}

                </div>

                <div className="calendarLegendButtons">

                    <div className="calendarLegendButton">
                        <FilterSvg />
                    </div>
                    <div className="calendarLegendButton">
                        <AddSvg onClick={this.showText} />
                    </div>
                    <div className="calendarLegendButton">
                        <DeleteSvg />
                    </div>
                </div>

            </div>

        );
    }
}

export default CalendarLegend;