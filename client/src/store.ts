import { configureStore, createSlice } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

interface AppState {
  showRegister: boolean;
}

const initialState: AppState = {
  showRegister: false,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    showRegisterPage: (state) => {
      state.showRegister = true;
    },
  },
});

export const { showRegisterPage } = appSlice.actions;

const store = configureStore({
  reducer: {
    app: appSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { store, Provider };
