import React from 'react';
import { useDispatch } from 'react-redux';

import { addTodo } from './store/todoSlice';

import TodoList from './components/TodoList';
import InputField from './components/InputField';

function App() {
  const [text, setText] = React.useState('');
  const dispatch = useDispatch();

  const addTask = () => {
    if (text === '') {
      alert('Please write something');
    } else {
      dispatch(addTodo({ text }));
      setText('');
    }
  };

  return (
    <div className="App">
      <InputField text={text} handleInput={setText} handleSubmit={addTask} />

      <TodoList />
    </div>
  );
}

export default App;
