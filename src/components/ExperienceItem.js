import React, { useRef } from 'react';
import { useExperience } from '../contexts/ExperienceContext';
import Input from '../utils/Input';
import Textarea from '../utils/Textarea';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

export const ExperienceItem = ({ experienceId, inputValue }) => {
  const { changeExperienceItem } = useExperience();
  const { deleteExperienceItem } = useExperience();
  const roleRef = useRef();
  const companyRef = useRef();
  const startDateRef = useRef();
  const endDateRef = useRef();
  const descriptionRef = useRef();
  const idRef = useRef();

  function handleChange(e) {
    e.preventDefault();
    changeExperienceItem({
      role: roleRef.current.value,
      company: companyRef.current.value,
      startDate: startDateRef.current.value,
      endDate: endDateRef.current.value,
      description: descriptionRef.current.value,
      id: idRef.current.id,
    });
  }

  return (
    <div className="item" id={experienceId} ref={idRef}>
      <h3>New Milestone</h3>
      <FontAwesomeIcon
        className="deleteItem"
        onClick={(e) => {
          e.preventDefault();
          deleteExperienceItem({ id: e.target.parentNode.parentNode.id });
        }}
        icon={faTrash}
      />
      <Input
        name="role"
        labelText="Role"
        inputType="text"
        onChange={handleChange}
        inputRef={roleRef}
        inputValue={inputValue.role}
      />
      <Input
        name="company"
        labelText="Company"
        inputType="text"
        onChange={handleChange}
        inputRef={companyRef}
        inputValue={inputValue.company}
      />
      <Input
        name="experience-start-date"
        labelText="Start date"
        inputType="text"
        onChange={handleChange}
        inputRef={startDateRef}
        inputValue={inputValue.startDate}
      />
      <Input
        name="experience-end-date"
        labelText="End date"
        inputType="text"
        onChange={handleChange}
        inputRef={endDateRef}
        inputValue={inputValue.endDate}
      />
      <Textarea
        name="experience-description"
        labelText="Description"
        onChange={handleChange}
        inputRef={descriptionRef}
        inputValue={inputValue.description}
      />
    </div>
  );
};
