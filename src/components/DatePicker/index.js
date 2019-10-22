import React, { useRef, useEffect, useState } from 'react';

import { useField } from '@rocketseat/unform';

import ReactDatePicker from 'react-datepicker';

import { Container } from './styles';

export default function DatePicker({ name, meetupDate }) {
  const ref = useRef(null);
  const { registerField, fieldName } = useField(name);

  const [selectedDate, setSelectedDate] = useState(meetupDate || new Date());

  useEffect(() => {
    if (ref.current) {
      registerField({
        name: fieldName,
        ref: ref.current,
        path: 'props.selected',
        clearValue: pickerRef => {
          pickerRef.clear();
        },
      });
    }
  }, [ref.current, fieldName]); // eslint-disable-line

  return (
    <Container>
      <ReactDatePicker
        name={fieldName}
        type="date"
        ref={ref}
        selected={selectedDate}
        onChange={date => setSelectedDate(date)}
        showTimeSelect
        timeFormat="HH:mm"
        timeIntervals={60}
        locale="pt"
        minDate={new Date()}
        timeCaption="hora"
        dateFormat="d 'de' MMMM, yyyy 'às' HH' horas'"
      />
    </Container>
  );
}
