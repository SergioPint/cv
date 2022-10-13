import React from 'react';
import { useEducation } from '../contexts/EducationContext';
import { EducationItem } from './EducationItem';
import { v4 as uuidV4 } from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

export const Education = () => {
  const { eduItems } = useEducation();
  const { addEduItem } = useEducation();

  return (
    <div className="education">
      <h2>Education</h2>
      <fieldset>
        {eduItems?.map((item) => (
          <EducationItem eduId={item.id} key={item.id} inputValue={item} />
        ))}
        <button
          className="addItem"
          onClick={(e) => {
            e.preventDefault();
            addEduItem({ id: uuidV4() });
          }}
        >
          <FontAwesomeIcon icon={faPlus} />
          Add
        </button>
      </fieldset>
    </div>
  );
};
