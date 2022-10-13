import React, { useRef } from 'react';
import { useEducation } from '../contexts/EducationContext';
import Input from '../utils/Input';
import Textarea from '../utils/Textarea';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

export const EducationItem = ({ eduId, inputValue }) => {
  const { changeEduItem } = useEducation();
  const { deleteEduItem } = useEducation();
  const degreeRef = useRef();
  const uniRef = useRef();
  const startDateRef = useRef();
  const endDateRef = useRef();
  const descriptionRef = useRef();
  const idRef = useRef();

  function handleChange(e) {
    e.preventDefault();
    changeEduItem({
      degree: degreeRef.current.value,
      uni: uniRef.current.value,
      startDate: startDateRef.current.value,
      endDate: endDateRef.current.value,
      description: descriptionRef.current.value,
      id: idRef.current.id,
    });
  }

  return (
    <div className="item" id={eduId} ref={idRef}>
      <h3>New Milestone</h3>
      <FontAwesomeIcon
        className="deleteItem"
        onClick={(e) => {
          e.preventDefault();
          deleteEduItem({ id: e.target.parentNode.parentNode.id });
        }}
        icon={faTrash}
      />
      <Input
        name="degree"
        labelText="Degree"
        inputType="text"
        onChange={handleChange}
        inputRef={degreeRef}
        inputValue={inputValue.degree}
      />
      <Input
        name="university"
        labelText="University or School"
        inputType="text"
        onChange={handleChange}
        inputRef={uniRef}
        inputValue={inputValue.uni}
      />
      <Input
        name="start-date"
        labelText="Start date"
        inputType="text"
        onChange={handleChange}
        inputRef={startDateRef}
        inputValue={inputValue.startDate}
      />
      <Input
        name="end-date"
        labelText="End date"
        inputType="text"
        onChange={handleChange}
        inputRef={endDateRef}
        inputValue={inputValue.endDate}
      />
      <Textarea
        name="description"
        labelText="Description"
        onChange={handleChange}
        inputRef={descriptionRef}
        inputValue={inputValue.description}
      />
    </div>
  );
};
