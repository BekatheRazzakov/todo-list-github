import React from 'react';
import {deleteTask, fetchTasks, statusChanged} from "../../TasksThunk";
import {Task} from "../../type";
import {AppDispatch} from "../../app/store";
import {useDispatch} from "react-redux";
import './TaskCard.css';

interface IProps {
  task: Task,
}

const TaskCard: React.FC<IProps> = ({task}) => {
  const dispatch: AppDispatch = useDispatch();

  const onStatusChange = async (task: Task) => {
    await dispatch(statusChanged(task));
    await dispatch(fetchTasks());
  };

  return (
    <div
      className={`task-card card p-3 ps-2 pe-2 flex-row align-items-center ${task.status ? 'green' : 'red'}`}
    >
      <span className='task-title ps-2'>
        {task.title}
      </span>
      <div className="checkbox-block">
        <input
          className='checkbox'
          type="checkbox"
          checked={
            task.status
          }
          onChange={(e) => {
            void onStatusChange({
              title: task.title,
              status: e.target.checked,
              id: task.id
            });
          }}
        />
        <span className={`${task.status ? 'checked' : 'unchecked'}`} />
      </div>
      <button
        className='delete'
        onClick={async (e) => {
          e.stopPropagation();
          await dispatch(deleteTask(task.id));

          await dispatch(fetchTasks());
        }}
      />
    </div>
  );
};

export default TaskCard;