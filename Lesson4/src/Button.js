import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

export class Button extends PureComponent {

    static propTypes = {
        label: PropTypes.string,
        className: PropTypes.string,
        action: PropTypes.string.isRequired,
        handler: PropTypes.func.isRequired
    }

    static defaultProps = {
        className: '',
    }

    onItemClick = () => {
        const {action, handler} = this.props

        handler(action)
    }

    render() {
        const { label, action, className } = this.props

        return (
            <button onClick={this.onItemClick}>{label || action}</button>
        )
    }
}