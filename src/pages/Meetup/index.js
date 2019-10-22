import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as Yup from 'yup';

import { parseISO } from 'date-fns';

import { Form, Input, Textarea } from '@rocketseat/unform';

import { registerLocale } from 'react-datepicker';
import { MdAddCircleOutline } from 'react-icons/md';

import pt from 'date-fns/locale/pt';

import Banner from '~/components/Banner/index';
import DatePicker from '~/components/DatePicker/index';

import {
  createMeetupRequest,
  updateMeetupRequest,
} from '~/stores/modules/meetup/actions';

import { Container, InfoMeetup } from './styles';

const schema = Yup.object().shape({
  banner_id: Yup.number().required('Insira um banner'),
  title: Yup.string().required('Preencha o titulo'),
  description: Yup.string()
    .min(20)
    .required('Preencha a descrição'),
  date: Yup.string().required('Preencha a data'),
  location: Yup.string().required('Preencha a localização'),
});

export default function Meetup() {
  const meetupDetails = useSelector(state => state.meetup.meetup);

  const initialData = meetupDetails || [];

  registerLocale('pt', pt);

  const dispatch = useDispatch();

  function handleUpdate(data) {
    dispatch(updateMeetupRequest(data, meetupDetails.id));
  }

  function handleSubmit(data) {
    dispatch(createMeetupRequest(data));
  }

  return (
    <Container>
      <InfoMeetup>
        <Form
          onSubmit={meetupDetails ? handleUpdate : handleSubmit}
          initialData={initialData}
          schema={schema}
        >
          <Banner name="banner_id" />
          <Input name="title" placeholder="Título do Meetup" />
          <Textarea name="description" placeholder="Descrição Completa" />
          <DatePicker
            name="date"
            meetupDate={meetupDetails ? parseISO(meetupDetails.date) : null}
          />
          <Input name="location" placeholder="Localização" />
          <button type="submit">
            <MdAddCircleOutline size={20} color="#fff" />
            <span>Salvar Meetup</span>
          </button>
        </Form>
      </InfoMeetup>
    </Container>
  );
}
