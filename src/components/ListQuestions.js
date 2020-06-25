import React from 'react';
import { Link } from 'react-router-dom'

const ListQuestions = (props) => {
  const {title, questions} = props;
  console.log(questions);
  questions.sort((x,y) => y.timestamp - x.timestamp);
  return (
    <div>
      <h2>{title}</h2>
      <ul>
        {questions.map((question) => (
          <Link to={`question/${question.id}`} key={question.id}>
            View Question by {question.author}
            <br />
          </Link>
        ))}
      </ul>
    </div>
  )
}

export default ListQuestions;