import { all, takeLatest, call, put } from 'redux-saga/effects';

import { format, parseISO } from 'date-fns';

import enGB from 'date-fns/locale/en-GB';

import { toast } from 'react-toastify';
import api from '~/services/api';

import history from '~/services/history';

import { resetMeetupCache, meetupDetails } from './actions';

export function showDetailsMeetup() {
  history.push('/details');
}

export function* createMeetup({ payload }) {
  try {
    const { banner_id, title, description, date, location } = payload.meetup;
    const meetup = {
      banner_id,
      title,
      description,
      date,
      location,
    };

    yield call(api.post, '/meetups', meetup);
    toast.success('Meetup cadastrada com sucesso');
    history.push('/dashboard');
  } catch (error) {
    toast.error('Erro ao cadastrar meetup, verifique os dados informados');
  }
}

export function* cancelMeetup({ payload }) {
  try {
    const { id } = payload;

    yield call(api.delete, `/meetups/${id}`);

    toast.success('Meetup cancelada com sucesso');

    history.push('/dashboard');

    yield put(resetMeetupCache());
  } catch (error) {
    toast.error('Erro ao cancelar meetup. Tente Novamente');
  }
}

export function* updateMeetup({ payload }) {
  try {
    const { data, id } = payload;

    const response = yield call(api.put, `/meetups/${id}`, data);

    toast.success('Meetup Atualizada com sucesso');
    const meetup = {
      ...response.data,
      formattedDate: format(
        parseISO(response.data.date),
        "dd 'de' MMMM ', às' HH'h'",
        {
          locale: enGB,
        }
      ),
    };
    yield put(meetupDetails(meetup));
  } catch (error) {
    toast.error('Erro ao atulizar meetup, verifique os dados informados');
  }
}

export default all([
  takeLatest('@meetup/DETAILS_MEETUP_REQUEST', showDetailsMeetup),
  takeLatest('@meetup/CREATE_MEETUP_REQUEST', createMeetup),
  takeLatest('@meetup/CANCEL_MEETUP_REQUEST', cancelMeetup),
  takeLatest('@meetup/UPDATE_MEETUP_REQUEST', updateMeetup),
]);
