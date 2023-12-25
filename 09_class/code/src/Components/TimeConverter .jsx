import React, { Component } from 'react';

class TimeConverter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            seconds: 0,
            minutes: 0,
            hours: 0,
        };
    }

    handleSecondsChange = (e) => {
        const seconds = e.target.value;
        this.setState({
            seconds,
            minutes: seconds / 60,
            hours: seconds / 3600,
        });
    };

    handleMinutesChange = (e) => {
        const minutes = e.target.value;
        this.setState({
            seconds: minutes * 60,
            minutes,
            hours: minutes / 60,
        });
    };

    handleHoursChange = (e) => {
        const hours = e.target.value;
        this.setState({
            seconds: hours * 3600,
            minutes: hours * 60,
            hours,
        });
    };

    render() {
        const { seconds, minutes, hours } = this.state;

        return (
            <div>
                <div>
                    <label>Seconds: </label>
                    <input 
                        type="number" 
                        value={seconds} 
                        onChange={this.handleSecondsChange} 
                    />
                </div>
                <div>
                    <label>Minutes: </label>
                    <input 
                        type="number" 
                        value={minutes} 
                        onChange={this.handleMinutesChange} 
                    />
                </div>
                <div>
                    <label>Hours: </label>
                    <input 
                        type="number" 
                        value={hours} 
                        onChange={this.handleHoursChange} 
                    />
                </div>
            </div>
        );
    }
}

export default TimeConverter;
