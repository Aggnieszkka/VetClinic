import React, { Component } from 'react';
import './style.css';

class CalendarLegendText extends Component {
    constructor(props) {
        super(props);

        this.state = {value: ''};
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.keyDown = this.keyDown.bind(this);
    }

    componentDidMount() {
        this.input.focus();
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        this.props.addName(this.state.value);
        this.props.showText();
        event.preventDefault();
    }

    keyDown(event) {
        if (event.keyCode === 27) {
            this.props.showText();
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <input
                         ref={(input) => {this.input = input}}
                         type="text" 
                         size="15" 
                         value={this.state.value} 
                         onChange={this.handleChange} 
                         onKeyDown={this.keyDown}/>
                    </label>
                </form>
            </div>
        );
    }
}

export default CalendarLegendText;