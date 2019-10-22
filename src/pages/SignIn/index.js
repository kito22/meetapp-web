import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import * as Yup from 'yup';

import { Form, Input } from '@rocketseat/unform';

import { signInRequest } from '~/stores/modules/auth/actions';

import logo from '~/assets/images/logo.svg';

const schema = Yup.object().shape({
  email: Yup.string()
    .email()
    .required('Por favor insira seu e-mail'),
  password: Yup.string().required('Insira sua senha'),
});

export default function SignIn() {
  const loading = useSelector(state => state.auth.loading);
  const dispatch = useDispatch();

  async function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }

  return (
    <>
      <img src={logo} alt="MeetApp" />
      <Form onSubmit={handleSubmit} schema={schema}>
        <Input name="email" type="email" placeholder="Insira seu e-mail" />
        <Input name="password" type="password" placeholder="Insira sua senha" />
        <button type="submit">{loading ? 'Carregando' : 'Entrar'}</button>
        <Link to="/register">Criar uma conta</Link>
      </Form>
    </>
  );
}
