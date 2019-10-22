import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { signUpRequest, signInRequest } from '~/stores/modules/auth/actions';

import logo from '~/assets/images/logo.svg';

const schema = Yup.object().shape({
  name: Yup.string().required('Insira seu nome'),
  email: Yup.string()
    .email()
    .required('Insira seu e-mail'),
  password: Yup.string()
    .min(6, 'Insira uma senha com no mínimo 6 dígitos')
    .required('Insira sua senha'),
});

export default function SignUp() {
  const dispatch = useDispatch();

  function handleSubmit({ name, email, password }) {
    dispatch(signUpRequest(name, email, password));
  }
  return (
    <>
      <img src={logo} alt="MeetApp" />
      <Form onSubmit={handleSubmit} schema={schema}>
        <Input name="name" type="text" placeholder="Insira seu nome completo" />
        <Input name="email" type="email" placeholder="Insira seu e-mail" />
        <Input name="password" type="password" placeholder="Insira sua senha" />
        <button type="submit">Criar conta</button>
        <Link to="/">Já possuo uma conta</Link>
      </Form>
    </>
  );
}
