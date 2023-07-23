import { useState } from 'react';
import { v4 } from 'uuid';
import { FaPlusCircle } from 'react-icons/fa';


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
      <form onSubmit={handleSubmit} className='form-container'>
        <input
          type='text'
          value={value}
          className='input-text'
          onChange={(e) => setValue(e.target.value)}
        />
        <button type='submit' className='input-submit'>
          <FaPlusCircle />
        </button>
      </form>
      <span className='submit-warning'>{message}</span>
    </>
  );
};
export default InputTodo;
