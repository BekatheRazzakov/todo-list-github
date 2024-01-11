import React, {ChangeEvent, FormEvent, useState} from 'react';
import './PostTask.css';
import {fetchTasks, postTask} from "../../TasksThunk";
import {AppDispatch} from "../../app/store";
import {useDispatch} from "react-redux";

const PostTask = () => {
  const dispatch: AppDispatch = useDispatch();

  const [value, setValue] = useState('');

  const onValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await dispatch(postTask(value));
    await dispatch(fetchTasks());
  };

  return (
    <form
      className="post-task card p-2 mb-4 flex-row"
      onSubmit={(e: FormEvent) => {
        void onSubmit(e);
        setValue('');
      }}
    >
      <input
        className='form-control post-input me-3'
        type="text"
        onChange={onValueChange}
        value={value}
        placeholder='New task'
        required
      />
      <button className="btn btn-light post-btn">Post</button>
    </form>
  );
};

export default PostTask;