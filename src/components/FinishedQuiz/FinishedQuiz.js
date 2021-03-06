import React, { Component } from "react"
import classes from './FinishedQuiz.module.css'
import Button from "../UI/Button/Button"

class FinishedQuiz extends Component {
    render() {
        const successCount = Object.keys(this.props.results).reduce((total, key) => {
            if (this.props.results[key] === 'success') {
                total++
            }

            return total
        }, 0)
        return (
            <div className={classes.FinishedQuiz}>
                <ul>
                    {
                        this.props.quiz.map((item, index) => {
                            const result = this.props.results[item.id]
                            const cls = [
                                'fa',
                                result === 'error' ? 'fa-times' : 'fa-check',
                                classes[result],
                            ]
                            return (
                                <li key={index}>
                                    <strong>{item.id}. </strong>
                                    {item.question}
                                    <i className={cls.join(" ")} />
                                </li>
                            )
                        })
                    }
                </ul>

                <p>Правильно {successCount} из {this.props.quiz.length}</p>

                <div>
                    <Button onClick={this.props.onRetry} type="primary">Повторить</Button>
                    <Button type="success">Перейти в список тестов</Button>
                </div>
            </div>
        )
    }
}

export default FinishedQuiz