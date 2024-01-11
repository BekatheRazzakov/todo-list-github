import {createSlice} from "@reduxjs/toolkit";
import {TodoState} from "../type";
import {fetchTasks, postTask, statusChanged, deleteTask} from "../TasksThunk";

const initialState: TodoState = {
  tasks: [],
  loading: false,
};

export const TodoSlice = createSlice({
  name: 'TodoList',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTasks.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(fetchTasks.fulfilled, (state, action) => {
      state.tasks = action.payload;
      state.loading = false;
    });

    builder.addCase(fetchTasks.rejected, (state) => {
      state.loading = false;
    });

    builder.addCase(postTask.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(postTask.fulfilled, (state) => {
      state.loading = false;
    });

    builder.addCase(postTask.rejected, (state) => {
      state.loading = false;
    });

    builder.addCase(statusChanged.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(statusChanged.fulfilled, (state) => {
      state.loading = false;
    });

    builder.addCase(statusChanged.rejected, (state) => {
      state.loading = false;
    });

    builder.addCase(deleteTask.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(deleteTask.fulfilled, (state) => {
      state.loading = false;
    });

    builder.addCase(deleteTask.rejected, (state) => {
      state.loading = false;
    });
  },
});

export const TodoReducer = TodoSlice.reducer;