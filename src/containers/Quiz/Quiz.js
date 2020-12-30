import React, {Component} from 'react'
import classes from "./Quiz.module.css"
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz"
import FinishedQuiz from '../../components/FinishedQuiz/FinishedQuiz'

class Quiz extends Component {
    state = {
        results: [], // {[id]: 'success' || 'error'},
        activeQuestion: 0,
        answerState: null, // {[id]: 'success' || 'error'},
        quizFinished: false,
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
        if (this.state.answerState) {
            const key = Object.keys(this.state.answerState)[0]
            if (answerId === this.state.answerState[key]) {
                return
            }
        }

        console.log('Answer id #', answerId)
        const question = this.state.quiz[this.state.activeQuestion]
        let results = this.state.results
        if (question.correctAnswerId === answerId) {
            if (!results[question.id]) {
                results[question.id] = 'success'
            }
            this.setState({
                answerState: {[answerId]: 'success'},
                results
            })
            const timeout = window.setTimeout(() => {
                if (this.isQuizFinished()) {
                    this.setState({quizFinished: true})
                    console.log('Quiz finished!')
                } else {
                    this.setState({
                        activeQuestion: this.state.activeQuestion+1,
                        answerState: null
                    })
                }
                window.clearTimeout(timeout)
            }, 1000)
        } else {
            results[question.id] = 'error'
            this.setState({
                answerState: {[answerId]: 'error'},
                results
            })
        }
    }

    isQuizFinished = () => {
        return this.state.activeQuestion + 1 === this.state.quiz.length
    }

    retryHandler = () => {
        this.setState({
            activeQuestion: 0,
            quizFinished: false,
            results: [],
            answerState: null
        })
    }

    render() {
        const question = this.state.quiz[this.state.activeQuestion]
        return (
            <div className={classes.Quiz}>
                <div className={classes.QuizWrapper}>
                    <h1>Quiz</h1>
                    {
                        this.state.quizFinished
                            ? <FinishedQuiz
                                results={this.state.results}
                                quiz={this.state.quiz}
                                onRetry={this.retryHandler}
                            />
                            : <ActiveQuiz
                                question={question.question}
                                answers={this.state.quiz[this.state.activeQuestion].answers}
                                onAnswerClick={this.onAnswerClickHandler}
                                quizLength={this.state.quiz.length}
                                answerNumber={this.state.activeQuestion + 1}
                                state={this.state.answerState}
                            />
                    }
                </div>
            </div>
        )
    }
}

export default Quiz