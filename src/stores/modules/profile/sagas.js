import { all, call, put, takeLatest } from 'redux-saga/effects';

import { toast } from 'react-toastify';
import api from '~/services/api';

import history from '~/services/history';

import { updateProfileSuccess, updateProfileFailure } from './actions';

export function* updateProfile({ payload }) {
  try {
    const { name, email, ...rest } = payload.data;

    const profile = {
      name,
      email,
      ...(rest.oldPassword ? rest : {}),
    };

    const response = yield call(api.put, '/users', profile);
    toast.success('Perfil atualizado com sucesso');
    yield put(updateProfileSuccess(response.data));
    history.push('/dashboard');
  } catch (error) {
    toast.error('Erro ao atualizar seu perfil. Verifique os dados informados');
    yield put(updateProfileFailure());
  }
}

export default all([
  takeLatest('@profile/UPDATE_PROFILE_REQUEST', updateProfile),
]);
