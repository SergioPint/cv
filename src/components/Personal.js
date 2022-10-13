import React from 'react';
import { usePersonal } from '../contexts/PersonalContext';
import { PersonalItem } from './PersonalItem';

export const Personal = () => {
  const { personalItems } = usePersonal();

  return (
    <div className="personal">
      <h2>Personal Information</h2>
      <fieldset>
        {personalItems?.map((item) => (
          <PersonalItem personalId={item.id} key={item.id} inputValue={item} />
        ))}
      </fieldset>
    </div>
  );
};
