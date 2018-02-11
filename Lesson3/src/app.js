import React, { Component } from 'react'
import Button from './Button'

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            upperLine: "",
            operationCode: "",
            bottomLine: ""
        };
    }

    render () {
        return (
            <div>
                <h2>Верстка калькулятора</h2>
                <table>
                    <tbody>
                    <tr>
                        <td colSpan="4" align="right">{this.state.upperLine}</td>
                    </tr>
                    <tr>
                        <td colSpan="4" align="right">{this.state.operationCode}</td>
                    </tr>
                    <tr>
                        <td colSpan="4"><input value="3" style="text-align: right"/></td>
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

