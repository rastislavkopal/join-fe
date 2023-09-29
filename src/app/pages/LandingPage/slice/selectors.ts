import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '.';

const selectLandingPageSlice = (state: RootState) =>
  state.landingPage || initialState;

export const selectLandingPage = createSelector(
  [selectLandingPageSlice],
  state => state,
);

export const selectLoading = createSelector(
  [selectLandingPageSlice],
  state => state.loading,
);

export const selectError = createSelector(
  [selectLandingPageSlice],
  state => state.error,
);

export const selectUsers = createSelector(
  [selectLandingPageSlice],
  state => state.users,
);
