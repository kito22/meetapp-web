export function loadMeetupRequest() {
  return {
    type: '@meetup/LOAD_MEETUP_REQUEST',
  };
}

export function loadMeetupSuccess(meetup) {
  return {
    type: '@meetup/LOAD_MEETUP_SUCCESS',
    payload: {
      meetup,
    },
  };
}

export function meetupDetails(meetup) {
  return {
    type: '@meetup/DETAILS_MEETUP_REQUEST',
    payload: {
      meetup,
    },
  };
}

export function createMeetupRequest(meetup) {
  return {
    type: '@meetup/CREATE_MEETUP_REQUEST',
    payload: {
      meetup,
    },
  };
}

export function cancelMeetupRequest(id) {
  return {
    type: '@meetup/CANCEL_MEETUP_REQUEST',
    payload: {
      id,
    },
  };
}

export function updateMeetupRequest(data, id) {
  return {
    type: '@meetup/UPDATE_MEETUP_REQUEST',
    payload: {
      data,
      id,
    },
  };
}

export function resetMeetupCache() {
  return {
    type: '@meetup/RESET_MEETUP_CACHE',
  };
}
