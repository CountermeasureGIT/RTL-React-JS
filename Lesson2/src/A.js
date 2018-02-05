import React from 'react'

export default function A (props) {
    return (
        <a href={props.href}>{props.children}</a>
    )
}