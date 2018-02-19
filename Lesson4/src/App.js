import React, {Component} from "react";
import {Button} from './Button'

export default class App extends Component {
    state = {
        previousDisplayValue: "",
        operationCode: "",
        currentDisplayValue: "0",
        dot: false
    }

    updateDotState(text) {
        console.log(text)
        const flag = text.toString().includes('.')
        if(flag)
            this.setState({dot: true})
        else
            this.setState({dot: false})
    }

    actionHandler = btnAction => {
        console.log("button")
        let { previousDisplayValue, currentDisplayValue, operationCode, dot } = this.state

        switch (btnAction) {
            case '+':
            case '-':
            case '*':
            case '/':
                if (previousDisplayValue) {
                    // Для выполнения последовательных операций мы должны применить последнюю операцию
                    // и отобразить только что нажатую
                    currentDisplayValue = (new Function(`return ${previousDisplayValue} ${operationCode || btnAction} ${currentDisplayValue}`))()
                }
                this.setState({
                    previousDisplayValue: currentDisplayValue,
                    operationCode: btnAction,
                    currentDisplayValue: '0'
                })
                this.updateDotState(currentDisplayValue)
                return
            case '.':
                this.updateDotState(currentDisplayValue)
                this.setState({
                    currentDisplayValue: currentDisplayValue + (dot ? '.' : '')
                })
                return
            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
                this.setState({ currentDisplayValue: Number(currentDisplayValue + btnAction).toString()})
                return
            case '=':
                currentDisplayValue = (new Function(`return ${previousDisplayValue} ${operationCode} ${currentDisplayValue}`))()
                this.setState({
                    previousDisplayValue: undefined,
                    operationCode: undefined,
                    currentDisplayValue
                })
                this.updateDotState(currentDisplayValue)
                return
            case 'c':
                this.setState({
                    previousDisplayValue: undefined,
                    operationCode: undefined,
                    currentDisplayValue: '0',
                    dot: false
                })
                return
        }
    }

    pasteHandler = e => {
        console.log("onPaste")
        const value = e.target.value
        let matcher = value.match(/[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)/)

        if(matcher) {
            this.setState({currentDisplayValue: Number(matcher[0]).toString()})
            this.updateDotState(this.state.currentDisplayValue)
        } else {
            return false
        }
    }

    keyboardHandler = e => {
        console.log("onKeyDown")
        let key = e.key

        if (key === 'Enter') {
            key = '='
        } else if (key === 'Escape') {
            key = 'c'
        }

        if (['/', '*', '-', '+', '=', 'c', '.'].includes(key)) {
            this.actionHandler(key)
        }
    }

    changeEvent = e => {
        console.log("ChangeEvent")
        const text = e.target.value
        console.log(text)
        if (!isNaN(text)){
            this.setState({ currentDisplayValue: +text })
            this.updateDotState(this.state.currentDisplayValue)
        }
        else
            return false
    }


    render() {
        const { previousDisplayValue, currentDisplayValue, operationCode } = this.state

        return (
            <div>
                <h2>Верстка калькулятора</h2>
                <table>
                    <tbody>
                    <tr>
                        <td colSpan="4" align="right">&nbsp;{previousDisplayValue}</td>
                    </tr>
                    <tr>
                        <td colSpan="4" align="right">&nbsp;{operationCode}</td>
                    </tr>
                    <tr>
                        <td colSpan="4">
                            <input value={currentDisplayValue}
                                   style={{textAlign: "right"}}
                                   onPaste={this.pasteHandler}
                                   onKeyDown={this.keyboardHandler}
                                   onChange={this.changeEvent}
                            /></td>
                    </tr>
                    <tr>
                        <td><Button action="c" handler={this.actionHandler}/></td>
                    </tr>
                    <tr>
                        <td><Button action="1" handler={this.actionHandler}/></td>
                        <td><Button action="2" handler={this.actionHandler}/></td>
                        <td><Button action="3" handler={this.actionHandler}/></td>
                        <td><Button action="/" handler={this.actionHandler}/></td>
                    </tr>

                    <tr>
                        <td><Button action="4" handler={this.actionHandler}/></td>
                        <td><Button action="5" handler={this.actionHandler}/></td>
                        <td><Button action="6" handler={this.actionHandler}/></td>
                        <td><Button action="*" handler={this.actionHandler}/></td>
                    </tr>

                    <tr>
                        <td><Button action="7" handler={this.actionHandler}/></td>
                        <td><Button action="8" handler={this.actionHandler}/></td>
                        <td><Button action="9" handler={this.actionHandler}/></td>
                        <td><Button action="-" handler={this.actionHandler}/></td>
                    </tr>

                    <tr>
                        <td><Button action="." handler={this.actionHandler}/></td>
                        <td><Button action="0" handler={this.actionHandler}/></td>
                        <td><Button action="=" handler={this.actionHandler}/></td>
                        <td><Button action="+" handler={this.actionHandler}/></td>
                    </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}