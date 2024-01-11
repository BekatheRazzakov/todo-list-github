import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch} from "../app/store";
import {fetchTasks} from "../TasksThunk";
import {Task, TodoStateMutation} from "../type";
import TaskCard from "../Components/TaskCard/TaskCard";
import PostTask from "../Components/PostTask/PostTask";

const Todo = () => {
  const dispatch: AppDispatch = useDispatch();
  const initState = useSelector((state: TodoStateMutation) => state.todo);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <div className='todo-list'>
      <PostTask />
      <div className='d-flex flex-column row-gap-4'>
        {
          initState.loading ?
            <div className="spinner-border text-primary m-auto" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            :
            initState.tasks.length === 0 ?
              <h3 className='m-0'>No tasks yet</h3>
              :
              initState.tasks.map((task: Task, index: number) => (
                <TaskCard
                  key={index}
                  task={task}
                />
              ))
        }
      </div>
    </div>
  );
};

export default Todo;