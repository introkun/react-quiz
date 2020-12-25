import React, {Component} from 'react'
import classes from "./Quiz.module.css"
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";

class Quiz extends Component {
    state = {
        activeQuestion: 0,
        quiz: [
            {
                question: "Какого цвета небо?",
                id: 1,
                correctAnswerId: 3,
                answers: [
                    {text: "Черный", id: 1},
                    {text: "Красный", id: 2},
                    {text: "Синий", id: 3},
                    {text: "Зеленый", id: 4}
                ]
            },
            {
                question: "Какого цвета молоко?",
                id: 2,
                correctAnswerId: 1,
                answers: [
                    {text: "Белое", id: 1},
                    {text: "Красное", id: 2},
                    {text: "Синее", id: 3},
                    {text: "Зеленое", id: 4}
                ]
            }
        ]
    }

    onAnswerClickHandler = (answerId) => {
        console.log('Answer id #', answerId)
        this.setState({activeQuestion: this.state.activeQuestion+1})
    }

    render() {
        return (
            <div className={classes.Quiz}>
                <div className={classes.QuizWrapper}>
                    <h1>Quiz</h1>
                    <ActiveQuiz
                        question={this.state.quiz[this.state.activeQuestion].question}
                        answers={this.state.quiz[this.state.activeQuestion].answers}
                        onAnswerClick={this.onAnswerClickHandler}
                        quizLength={this.state.quiz.length}
                        answerNumber={this.state.activeQuestion + 1}
                    />
                </div>
            </div>
        )
    }
}

export default Quiz