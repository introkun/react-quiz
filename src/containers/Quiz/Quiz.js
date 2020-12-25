import React, {Component} from 'react'
import classes from "./Quiz.module.css"
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";

class Quiz extends Component {
    state = {
        quiz: [
            {
                question: "Какого цвета небо?",
                correctAnswerId: 2,
                answers: [
                    {text: "Вопрос 1", id: 1},
                    {text: "Вопрос 2", id: 2},
                    {text: "Вопрос 3", id: 3},
                    {text: "Вопрос 4", id: 4}
                ]
            }
        ]
    }

    onAnswerClickHandler = (answerId) => {
        console.log('Answer id #', answerId)
    }

    render() {
        return (
            <div className={classes.Quiz}>
                <div className={classes.QuizWrapper}>
                    <h1>Quiz</h1>
                    <ActiveQuiz
                        question={this.state.quiz[0].question}
                        answers={this.state.quiz[0].answers}
                        onAnswerClick={this.onAnswerClickHandler} />
                </div>
            </div>
        )
    }
}

export default Quiz