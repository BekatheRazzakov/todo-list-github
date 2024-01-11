import {createAsyncThunk} from "@reduxjs/toolkit";
import {Task} from "./type";
import axiosApi from "./axiosApi";

export const fetchTasks = createAsyncThunk(
  'todo/fetch',
  async () => {
    let newTasks: Task[] = [];

    await axiosApi.get('.json')
      .then(response => {
        newTasks = Object.keys(response.data).map((key: string) => ({
          ...response.data[key],
          id: key,
        }));
      })
      .catch(() => {});

    return newTasks;
  },
);

export const postTask = createAsyncThunk('todo/post', async (title: string) => {
  await axiosApi.post(`.json`, {
    title: title,
    status: false,
  })
});

export const statusChanged = createAsyncThunk('todo/statusChange',
  async (task: Task) => {
    await axiosApi.put(`${task.id}.json`, {
      title: task.title,
      status: task.status,
    });
  });

export const deleteTask = createAsyncThunk('todo/delete',
  async (id: string) => {
    await axiosApi.delete(`${id}.json`);
  });