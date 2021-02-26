import React, { Component } from 'react';
import CalendarLegendText from './CalendarLegendText';
import CalendarPerson from './CalendarPerson';
import { ReactComponent as AddSvg } from './img/add.svg';
import { ReactComponent as EditSvg } from './img/edit.svg';
import { ReactComponent as FilterSvg } from './img/filter.svg';
import './style.css';

class CalendarLegend extends Component {

    constructor(props) {
        super(props);
        this.state = {
            names: [],
            showText: false,
            editMode: false,
            filterMode: false,
            clickedFilterButton: false,
            clickedAddButton: false,
            clickedEditButton: false,
        };

        this.showText = this.showText.bind(this);
        this.addName = this.addName.bind(this);
        this.switchEditMode = this.switchEditMode.bind(this);
        this.changeFilterButtonColor = this.changeFilterButtonColor.bind(this);
        this.changeAddButtonColor = this.changeAddButtonColor.bind(this);
        this.changeEditButtonColor = this.changeEditButtonColor.bind(this);
        this.switchFilterMode = this.switchFilterMode.bind(this);

    }

    addName(name) {

        const randomColor = Math.floor(Math.random() * 16777215).toString(16);

        if (name && name.trim()) {
            this.setState({
                names: this.state.names.concat(
                    [<CalendarPerson
                        color={randomColor}
                        name={name}
                        editMode={this.state.editMode}
                        filterMode={this.state.filterMode}
                    />]
                )
            });
        }
    }

    showText() {
        this.setState({ showText: !this.state.showText });
    }

    switchEditMode() {
        this.setState({ editMode: !this.state.editMode });
    }

    switchFilterMode() {
        this.setState({ filterMode: !this.state.filterMode });
    }

    changeFilterButtonColor() {
        this.setState({ clickedFilterButton: !this.state.clickedFilterButton });
        this.switchFilterMode();
    }

    changeAddButtonColor() {
        this.setState({ clickedAddButton: !this.state.clickedAddButton });
        this.showText();
    }

    changeEditButtonColor() {
        this.setState({ clickedEditButton: !this.state.clickedEditButton });
        this.switchEditMode();
    }

    render() {

        let filterButtonClass = this.state.clickedFilterButton ? "calendarClickedLegendButton" : "calendarUnclickedLegendButton";
        let addButtonClass = this.state.clickedAddButton ? "calendarClickedLegendButton" : "calendarUnclickedLegendButton";
        let editButtonClass = this.state.clickedEditButton ? "calendarClickedLegendButton" : "calendarUnclickedLegendButton";

        return (
            <div>

                <div className="calendarLegendNames">

                    <div className="calendarLegendText">
                        {this.state.showText && <CalendarLegendText
                            addName={this.addName}
                            showText={this.showText}
                            changeColor={this.changeAddButtonColor}
                        />}
                    </div>
                    {this.state.names.map((element) => {
                        return <CalendarPerson
                            color={element.props.color}
                            name={element.props.name}
                            editMode={this.state.editMode}
                            filterMode={this.state.filterMode}
                        />;
                    })}
                </div>

                <div className="calendarLegendButtons">

                    <div className={filterButtonClass} onClick={this.changeFilterButtonColor}>
                        <FilterSvg />
                    </div>
                    <div className={addButtonClass} onClick={this.changeAddButtonColor}>
                        <AddSvg />
                    </div>
                    <div className={editButtonClass} onClick={this.changeEditButtonColor}>
                        <EditSvg />
                    </div>
                </div>

            </div>

        );
    }
}

export default CalendarLegend;