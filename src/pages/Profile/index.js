import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { MdAddCircleOutline } from 'react-icons/md';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { Container } from './styles';

import { updateProfileRequest } from '~/stores/modules/profile/actions';

const schema = Yup.object().shape({
  name: Yup.string()
    .min(5, 'Seu nome deve conter no mínimo 5 caracteres')
    .required('Por favor, insira um nome'),
  email: Yup.string()
    .email()
    .required(),
  oldPassword: Yup.string(),
  password: Yup.string()
    .notRequired()
    .when('oldPassword', (oldPassword, field) =>
      oldPassword
        ? field.required().min(6, 'Sua senha deve conter no mínimo 6')
        : field
    ),
  confirmPassword: Yup.string().when('password', (password, field) =>
    password
      ? field
          .required()
          .min(6)
          .oneOf([Yup.ref('password')], 'Senhas não correspondem')
      : field
  ),
});

export default function Profile() {
  const user = useSelector(state => state.profile.user);
  const dispatch = useDispatch();

  function handleSubmit(data, { resetForm }) {
    dispatch(updateProfileRequest(data));
    resetForm({ initialData: { user } });
  }
  return (
    <Container>
      <Form initialData={user} onSubmit={handleSubmit} schema={schema}>
        <Input name="name" placeholder="Seu nome" />
        <Input name="email" placeholder="Seu E-mail" />
        <br />
        <Input name="oldPassword" type="password" placeholder="Senha atual" />
        <Input name="password" type="password" placeholder="Nova senha" />
        <Input
          name="confirmPassword"
          type="password"
          placeholder="Confirmação de senha"
        />
        <button type="submit">
          <MdAddCircleOutline size={20} color="#fff" />
          <span>Salvar Perfil</span>
        </button>
      </Form>
    </Container>
  );
}
