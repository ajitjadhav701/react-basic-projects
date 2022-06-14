import React from "react";
import { useGlobalContext } from "./context";

import SetupForm from "./SetupForm";
import Loading from "./Loading";
import Modal from "./Modal";
function App() {
  const {
    waiting,
    loading,
    questions,
    index,
    correct,
    nextQuestion,
    checkAnswer,
  } = useGlobalContext();

  if (waiting) {
    return <SetupForm />;
  }

  if (loading) {
    return <Loading />;
  }
  //console.log(questions[0]);
  //console.log(index)
  const { question, incorrect_answers, correct_answer, isModalOpen } =
    questions[index];
 // const answers = [...incorrect_answers, correct_answer];
 let answers=[...incorrect_answers]
 const tempIndex=Math.floor( Math.random()*4);
 if(tempIndex===3){
  answers.push(correct_answer)
 }else{
  answers.push(answers[tempIndex])
  answers[tempIndex]=correct_answer  
 }
  return (
    <main className="">
      <Modal />
      <section className="quiz">
        <p className="correct-answers">
          correct answers: {correct}/{index + 1}
        </p>
        <article className="container">
          <h2 dangerouslySetInnerHTML={{ __html: question }} />
          <div className="btn-container">
            {answers.map((ans, index) => {
              return (
                <button
                  key={index}
                  className="answer-btn"
                  onClick={() => checkAnswer(correct_answer === ans)}
                  dangerouslySetInnerHTML={{ __html: ans }}
                />
              );
            })}
          </div>
        </article>
        <button onClick={nextQuestion} className="next-question">
          next question
        </button>
      </section>
    </main>
  );
}

export default App;
