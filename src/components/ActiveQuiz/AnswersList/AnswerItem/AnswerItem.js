import React from "react"
import classes from './AnswerItem.module.css'

const AnswerItem = props => {
    let styleClasses = [classes.AnswerItem]

    if (props.state) {
        styleClasses.push(classes[props.state[props.answer.id]])
    }

    return (
        <li className={styleClasses.join(' ')}
            onClick={() => {
                props.onAnswerClick(props.answer.id)
            }}>
            {props.answer.text}
        </li>
    )
}

export default AnswerItem