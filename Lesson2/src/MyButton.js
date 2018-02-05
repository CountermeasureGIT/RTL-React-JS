import React, { Component } from 'react'

export default class MyButton extends React.Component {
    constructor(props) {
        super(props);
        this.onItemClick = this.onItemClick.bind(this);
    }

    onItemClick() {
        alert(this.props.msg);
    }

    render() {
        return (
            <button onClick={this.onItemClick}>Жмякни</button>
        )
    }
}