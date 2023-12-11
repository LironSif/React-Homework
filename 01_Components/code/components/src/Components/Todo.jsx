import React, { Component } from 'react';

const usetData = [
    { name: "CSS", completed: true },
    { name: "JavaScript", completed: true },
    { name: "Learn React", completed: false },
    { name: "Learn mongoDB", completed: false },
    { name: "Learn Node JS", completed: false },
];

class Todo extends Component {
    constructor() {
        super(); 
        const userDataObj = usetData.reduce((obj, item) => {
            obj[item.name] = item.completed;
            return obj;
        }, {});
        this.state = userDataObj;
    }

    toggle = (name) => {
        this.setState(prevState => ({
            ...prevState,
            [name]: !prevState[name]
        }));
    }

    render() {
        return (
            <div>
                {usetData.map((el) => (
                    <div onClick={() => this.toggle(el.name)} key={el.name}>
                        {el.name} {this.state[el.name] ? '✓' : '✗'}
                    </div>
                ))}
            </div>
        );
    }   
}

export default Todo;
