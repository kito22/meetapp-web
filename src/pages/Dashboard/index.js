import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { format, parseISO } from 'date-fns';

import enGB from 'date-fns/locale/en-GB';

import { MdAddCircleOutline, MdChevronRight } from 'react-icons/md';

import {
  meetupDetails,
  resetMeetupCache,
} from '~/stores/modules/meetup/actions';

import api from '~/services/api';

import {
  Container,
  ContainerHeader,
  MeetupList,
  MeetupContainer,
} from './styles';

export default function Dashboard() {
  const [meetups, setMeetups] = useState([]);

  const dispatch = useDispatch();
  useEffect(() => {
    async function loadMeetups() {
      const response = await api.get('meetups/organization');

      const data = response.data.map(meetup => ({
        ...meetup,
        formattedDate: format(
          parseISO(meetup.date),
          "dd 'de' MMMM ', às' HH'h'",
          {
            locale: enGB,
          }
        ),
      }));
      setMeetups(data);
    }
    loadMeetups();
  }, []);

  function handleMeetupDetails(meetup) {
    dispatch(meetupDetails(meetup));
  }

  function handleNewMeetup() {
    dispatch(resetMeetupCache());
  }

  return (
    <Container>
      <ContainerHeader>
        <h1>Meus meetups</h1>
        <Link to="/meetup" onClick={handleNewMeetup}>
          <MdAddCircleOutline size={26} color="#fff" />
          <span>Novo Meetup</span>
        </Link>
      </ContainerHeader>
      <MeetupContainer>
        {meetups.length ? (
          <MeetupList>
            {meetups.map(meetup => (
              <li key={meetup.id}>
                <strong>{meetup.title}</strong>
                <div>
                  <span>{meetup.formattedDate}</span>
                  <button
                    type="button"
                    onClick={() => handleMeetupDetails(meetup)}
                  >
                    <MdChevronRight size={20} color="#fff" />
                  </button>
                </div>
              </li>
            ))}
          </MeetupList>
        ) : (
          <span>Você não possui nenhuma meetup cadastrada.</span>
        )}
      </MeetupContainer>
    </Container>
  );
}
