import React, { Component } from "react"
import classes from './FinishedQuiz.module.css'

class FinishedQuiz extends Component {
    render() {
        return (
            <div className={classes.FinishedQuiz}>
                <ul>
                    <li>
                        <strong>1. </strong>
                        How are you?
                        <i className={'fa fa-times ' + classes.error} />
                    </li>
                    <li>
                        <strong>2. </strong>
                        How are you?
                        <i className={'fa fa-check ' + classes.success} />
                    </li>
                </ul>

                <p>Правильно X из Y</p>

                <div>
                    <button>Повторить</button>
                </div>
            </div>
        )
    }
}

export default FinishedQuiz