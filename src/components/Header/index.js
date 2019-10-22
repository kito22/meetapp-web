import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Link } from 'react-router-dom';

import logo from '~/assets/images/logo.svg';

import { Container, HeaderContainer, Content } from './styles';

import { logoutRequest } from '~/stores/modules/auth/actions';

export default function Header() {
  const user = useSelector(state => state.profile.user);

  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(logoutRequest());
  }
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="MeetApp" />
          <Link to="/dashboard">Dashboard</Link>
        </nav>
        <HeaderContainer>
          <div>
            <strong>{user.name}</strong>
            <Link to="/profile">Meu perfil</Link>
          </div>
          <button onClick={handleLogout} type="button">
            Sair
          </button>
        </HeaderContainer>
      </Content>
    </Container>
  );
}
