import React from 'react';

const InputField = ({ text, handleInput, handleSubmit }) => {
  return (
    <div className="search-block">
      <h1>Tasks</h1>
      <input value={text} onChange={(e) => handleInput(e.target.value)} />
      <button onClick={handleSubmit}>Add</button>
    </div>
  );
};

export default InputField;
