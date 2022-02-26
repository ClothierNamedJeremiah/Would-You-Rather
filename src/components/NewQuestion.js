import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useMutation } from 'react-query';

import { _saveQuestion } from '../utils/api';
import { useAuthedUser } from '../authedUser';

export default function NewQuestion() {
  const [optionOneText, setOptionOneText] = useState('');
  const [optionTwoText, setOptionTwoText] = useState('');
  const [toHome, setToHome] = useState(false);
  const authedUser = useAuthedUser();

  const mutation = useMutation((question) => _saveQuestion(question));

  const handleSubmit = (e) => {
    e.preventDefault();

    mutation.mutate({
      optionOneText,
      optionTwoText,
      author: authedUser,
    });

    setToHome(true);
  };

  if (toHome) {
    return <Redirect to="/" />;
  }

  // TODO: user types really fast, what is the actual state
  return (
    <div className="container">
      <form className="new-question" onSubmit={handleSubmit}>
        <input
          name="optionOneText"
          type="text"
          placeholder="Option 1"
          value={optionOneText}
          onChange={(event) => setOptionOneText(event.target.value)}
        />
        <input
          name="optionTwoText"
          type="text"
          placeholder="Option 2"
          value={optionTwoText}
          onChange={(event) => setOptionTwoText(event.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
