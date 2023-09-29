import { call, put, delay, takeLatest } from 'redux-saga/effects';
import { landingPageActions as actions } from '.';
import { request } from 'utils/request';
import { User } from './types';

/**
 * users request/response handler
 */
export function* getUsers() {
  yield delay(500);
  const requestURL = `https://jsonplaceholder.typicode.com/users`;

  try {
    // Call our request helper (see 'utils/request')
    const users: User[] = yield call(request, requestURL);
    if (users?.length > 0) {
      yield put(actions.usersLoaded(users));
    } else {
      yield put(actions.usersError('Error'));
    }
  } catch (err: any) {
    if (err.response?.status === 404) {
      yield put(actions.usersError('Not Found'));
    } else if (err.message === 'Failed to fetch') {
      yield put(actions.usersError('Connection Error'));
    } else {
      yield put(actions.usersError('Error'));
    }
  }
}

// start getUsers on each dispatched actions.LOAD_USERS action
export function* landingPageSaga() {
  yield takeLatest(actions.loadUsers.type, getUsers);
}
