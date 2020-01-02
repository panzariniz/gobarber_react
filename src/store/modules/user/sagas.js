import { all, takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import { updateProfileSuccess, updateProfileFailure } from './actions';

import api from '../../../services/api';

export function* updateProfile({ payload }) {
  try {
    const { name, email, avatar_id, ...rest } = payload.data;

    const profile = {
      name,
      email,
      avatar_id,
      ...(rest.oldPassword ? rest : {}),
    };

    const response = yield call(api.put, 'users', profile);

    toast.success('Perfil atualizado com sucesso');
    yield put(updateProfileSuccess(response.data.data));
  } catch (error) {
    toast.error(
      `Falha na atualização do perfil. Message System: ${error.response.data.message}`
    );
    yield put(updateProfileFailure());
  }
}

export default all([takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile)]);
