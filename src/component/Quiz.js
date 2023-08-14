import { useState } from "react";
import Quizdata from "./Quizdata";
import Result from "./Result";

function Quiz() {

    const [cquestion, setcquestion] = useState(0)
    const [score, setscore] = useState(0)
    const [selected, setselected] = useState(0)
    const [result, setresult] = useState(false)
    const nextquestion = () => {
        rightscore();
        if (cquestion < Quizdata.length - 1) {
            setcquestion(cquestion + 1)
            setselected(0)
        }
        else {
            setresult(true)
        }
    }


    const rightscore = () => {

        if (selected === Quizdata[cquestion].answer) {
            setscore(score + 1)
        }
    }

    return (
        <div>
            <p>Quiz App</p>
            <div className="container">
                {result ? (
                    <Result score={score} totalscore={Quizdata.length} />) : (
                    <>
                        <div className="question">
                            <span id="quetion-no">{cquestion + 1}.</span>
                            <span id="quetion-text">{Quizdata[cquestion].question}</span>
                        </div>

                        <div className="quetion-option">
                            {Quizdata[cquestion].questions.map((questions, i) => {
                                return (
                                    <button className={`option ${selected == i + 1 ? "optionclick" : null
                                        }`} onClick={() => setselected(i + 1)} key={i}>
                                        {questions}
                                    </button>
                                )
                            })}
                        </div>

                        <div className="btn">
                            <button onClick={nextquestion}>Next</button>
                            </div>
                        </>
                        )}            
            </div>
        </div>
    )
}

export default Quiz;