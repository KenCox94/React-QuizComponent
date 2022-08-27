import React, { Component } from "react";
import QuizQuestionButton from "./QuizQuestionButton";

class QuizQuestion extends Component {

    render() {
        return (
            <main>
                <section>
                    <p>
                        {this.props.quiz_question.instruction_text}
                    </p>
                </section>
                <section className="buttons">
                    <ul>
                        {this.props.quiz_question.answer_options.map((button, index) => {
                            return <QuizQuestionButton button_text={button.button_text} key={index} />
                        })}
                    </ul>
                </section>
            </main>
        )
    }
}


export default QuizQuestion;