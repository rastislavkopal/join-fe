import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { landingPageSaga } from './saga';
import { LandingPageState } from './types';

export const initialState: LandingPageState = {
  users: [],
  loading: false,
  error: null,
};

const slice = createSlice({
  name: 'landingPage',
  initialState,
  reducers: {
    loadUsers(state) {
      state.loading = true;
      state.error = null;
      state.users = [];
    },
    usersLoaded(state, action: PayloadAction<any>) {
      const users = action.payload;
      state.users = users;
      state.loading = false;
    },
    usersError(state, action: PayloadAction<any>) {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { actions: landingPageActions } = slice;

export const useLandingPageSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: landingPageSaga });
  return { actions: slice.actions };
};
