import React, { useRef } from 'react';
import { usePersonal } from '../contexts/PersonalContext';
import Input from '../utils/Input';
import Textarea from '../utils/Textarea';

export const PersonalItem = ({ personalId, inputValue }) => {
  const { changePersonalItem } = usePersonal();
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const streetRef = useRef();
  const locationRef = useRef();
  const phoneRef = useRef();
  const mailRef = useRef();
  const birthdateRef = useRef();
  const nationalityRef = useRef();
  const summaryRef = useRef();
  const idRef = useRef();

  function handleChange(e) {
    e.preventDefault();
    changePersonalItem({
      firstName: firstNameRef.current.value,
      lastName: lastNameRef.current.value,
      street: streetRef.current.value,
      location: locationRef.current.value,
      phone: phoneRef.current.value,
      mail: mailRef.current.value,
      birthdate: birthdateRef.current.value,
      nationality: nationalityRef.current.value,
      summary: summaryRef.current.value,
      id: idRef.current.id,
    });
  }

  return (
    <div className="item" id={personalId} ref={idRef}>
      <h3>Personal Information</h3>
      <Input
        name="first-name"
        labelText="First name"
        inputType="text"
        onChange={handleChange}
        inputRef={firstNameRef}
        inputValue={inputValue.firstName}
      />
      <Input
        name="last-name"
        labelText="Last name"
        inputType="text"
        onChange={handleChange}
        inputRef={lastNameRef}
        inputValue={inputValue.lastName}
      />
      <Input
        name="street"
        labelText="Street"
        inputType="text"
        onChange={handleChange}
        inputRef={streetRef}
        inputValue={inputValue.street}
      />
      <Input
        name="location"
        labelText="Location"
        inputType="text"
        onChange={handleChange}
        inputRef={locationRef}
        inputValue={inputValue.location}
      />
      <Input
        name="phone"
        labelText="Phone number"
        inputType="text"
        onChange={handleChange}
        inputRef={phoneRef}
        inputValue={inputValue.phone}
      />
      <Input
        name="mail"
        labelText="Mail address"
        inputType="text"
        onChange={handleChange}
        inputRef={mailRef}
        inputValue={inputValue.mail}
      />
      <Input
        name="birthdate"
        labelText="Birthdate"
        inputType="text"
        onChange={handleChange}
        inputRef={birthdateRef}
        inputValue={inputValue.birthdate}
      />
      <Input
        name="nationality"
        labelText="Nationality"
        inputType="text"
        onChange={handleChange}
        inputRef={nationalityRef}
        inputValue={inputValue.nationality}
      />
      <Textarea
        name="summary"
        labelText="Summary"
        onChange={handleChange}
        inputRef={summaryRef}
        inputValue={inputValue.summary}
      />
    </div>
  );
};
