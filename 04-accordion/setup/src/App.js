import React, { useState } from 'react';
import data from './data';
import Question from './Question';
import SingleQuestion from './Question';
function App() {
  const [questions,setQuestions]=useState(data);
  return <main>
    <div className="container">
      <h3>question and answers about login</h3>
      <section className="info">
        {
          questions.map((que)=>{
            return <Question key={que.id} {...que}/>
          })
        }
      </section>
    </div>
  </main>;
}

export default App;
