import React from 'react';
import { useExperience } from '../contexts/ExperienceContext';
import { ExperienceItem } from './ExperienceItem';
import { v4 as uuidV4 } from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

export const Experience = () => {
  const { experienceItems } = useExperience();
  const { addExperienceItem } = useExperience();

  return (
    <div className="experience">
      <h2>Experience</h2>
      <fieldset>
        {experienceItems?.map((item) => (
          <ExperienceItem
            experienceId={item.id}
            key={item.id}
            inputValue={item}
          />
        ))}
        <button
          className="addItem"
          onClick={(e) => {
            e.preventDefault();
            addExperienceItem({ id: uuidV4() });
          }}
        >
          <FontAwesomeIcon icon={faPlus} />
          Add
        </button>
      </fieldset>
    </div>
  );
};
