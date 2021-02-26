import React, { Component } from 'react';
import { ReactComponent as EditSvg } from './img/edit.svg';
import { ReactComponent as DeleteSvg } from './img/delete.svg';
import './style.css';

class CalendarPerson extends Component {

    constructor (props) {
        super(props);
        this.state = {
            color: this.props.color,
            name: this.props.name,
            clicked: false,
        };

        this.filter = this.filter.bind(this);
    }

    filter() {
        if (this.props.filterMode) {
            this.setState({ clicked: !this.state.clicked });
        }
    }

    render() {

        let nameContainerFilterClass = this.props.filterMode ? "nameFilterModeContainer" : "nameContainer";
        let nameContainerColorClass = this.state.clicked && this.props.filterMode ? "nameClickedContainer" : "";
        let nameContainerClass = nameContainerFilterClass + " " + nameContainerColorClass;

        return (
            <div className={nameContainerClass} onClick = {this.filter}>
                <div className="nameColor" style={{ backgroundColor: "#" + this.state.color }}>
                    {this.props.editMode && <EditSvg className="editCalendarNameColor" />}
                </div>

                <div className="name">
                        {this.state.name}
                </div>
                <div className="deleteCalendarNameContainer">
                        {this.props.editMode && <DeleteSvg className="deleteCalendarName" />}
                </div>
            </div>
        );
    }
}

export default CalendarPerson;