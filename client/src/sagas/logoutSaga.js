import {put, call} from 'redux-saga/effects';
import ACTION from '../actions/actiontsTypes';
import history from '../boot/browserHistory';
import {logout} from '../api/rest/restContoller';
import {TOKENS_KEY} from '../constants/consts';

export function* logoutSaga() {

    try {

        const token=(sessionStorage.getItem(TOKENS_KEY))?sessionStorage.getItem(TOKENS_KEY):localStorage.getItem(TOKENS_KEY);
        const data = {token: token.refresh};
        yield logout(data);
        sessionStorage.clear();
        localStorage.clear();
        const userToRead = null;
        yield put({type: ACTION.DASHBOARD_CHANGED});
        yield put({type: ACTION.USER_LOGOUT, userToRead});
    } catch (e) {
    }
}

