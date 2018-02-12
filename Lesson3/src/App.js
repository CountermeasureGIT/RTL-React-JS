import React, { Component } from "react";
import Button from './Button'

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            upperLine: "22",
            operationCode: "*",
            bottomLine: "0"
        };
    }

    changeHandler = e => {
        // this.setState({ bottomLine: parseInt(e.target.value) })
        let value = e.target.value.replace(/[^\d]/,'')

        if(value !== "") {
            if(value[0] === "0"){
                value = value.substr(1)
                if(value === "")
                    this.setState({ bottomLine: "0" })
                else
                    this.setState({ bottomLine: value })
            }
            else
                this.setState({ bottomLine: value })
        }
        else
            this.setState({ bottomLine: "0" })
    }

    render () {
        return (
            <div>
                <h2>Верстка калькулятора</h2>
                <table>
                    <tbody>
                    <tr>
                        <td colSpan="4" align="right">{ this.state.upperLine }</td>
                    </tr>
                    <tr>
                        <td colSpan="4" align="right">{ this.state.operationCode }</td>
                    </tr>
                    <tr>
                        <td colSpan="4"><input value={ this.state.bottomLine } style={{ textAlign: "right" } } onChange={ this.changeHandler }/></td>
                    </tr>

                    <tr>
                        <td><button type="button">1</button></td>
                        <td><button type="button">2</button></td>
                        <td><button type="button">3</button></td>
                        <td><button type="button">c</button></td>
                    </tr>

                    <tr>
                        <td><button type="button">4</button></td>
                        <td><button type="button">5</button></td>
                        <td><button type="button">6</button></td>
                        <td><button type="button">+</button></td>
                    </tr>

                    <tr>
                        <td><button type="button">7</button></td>
                        <td><button type="button">8</button></td>
                        <td><button type="button">9</button></td>
                        <td><button type="button">-</button></td>
                    </tr>

                    <tr>
                        <td><button type="button">*</button></td>
                        <td><button type="button">0</button></td>
                        <td><button type="button">/</button></td>
                        <td><button type="button">=</button></td>
                    </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}