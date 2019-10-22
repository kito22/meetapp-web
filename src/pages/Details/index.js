import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import {
  MdModeEdit,
  MdDeleteForever,
  MdEvent,
  MdLocationOn,
} from 'react-icons/md';

import {
  Container,
  ContainerHeader,
  ContainerActions,
  MeetupBanner,
  MeetupDetails,
} from './styles';

import { cancelMeetupRequest } from '~/stores/modules/meetup/actions';

export default function Details() {
  const meetupDetails = useSelector(state => state.meetup.meetup);

  const dispatch = useDispatch();

  function handleCancel() {
    dispatch(cancelMeetupRequest(meetupDetails.id));
  }

  return (
    <Container>
      <ContainerHeader>
        <h1>{meetupDetails.title}</h1>
        <ContainerActions past={meetupDetails.past}>
          <Link to="/meetup">
            <MdModeEdit size={26} color="#fff" />
            <span>Editar</span>
          </Link>
          <button type="button" onClick={handleCancel}>
            <MdDeleteForever size={26} color="#fff" />
            <span>Cancelar</span>
          </button>
        </ContainerActions>
      </ContainerHeader>
      <MeetupBanner>
        <div>
          <img src={meetupDetails.banner.url} alt="meetup" />
        </div>
        <p>{meetupDetails.description}</p>
      </MeetupBanner>
      <MeetupDetails>
        <div>
          <MdEvent size={14} color="#999" />
          <span>{meetupDetails.formattedDate}</span>
        </div>
        <div>
          <MdLocationOn size={14} color="#999" />
          <span>{meetupDetails.location}</span>
        </div>
      </MeetupDetails>
    </Container>
  );
}
