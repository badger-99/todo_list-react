import { useState } from 'react';
import { v4 } from 'uuid';

const InputTodo = ({ tasks, setTasks }) => {
  const [value, setValue] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) {
      setMessage('Please add item');
      return;
    }
    const newTask = {
      id: v4(),
      title: value,
      complete: false,
    };
    setTasks([...tasks, newTask]);
    setValue('');
    setMessage('');
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button type='submit'>submit</button>
      </form>
      <span>{message}</span>
    </>
  );
};
export default InputTodo;
