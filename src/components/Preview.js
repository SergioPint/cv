import React from 'react';
import { useEducation } from '../contexts/EducationContext';
import { useExperience } from '../contexts/ExperienceContext';
import { usePersonal } from '../contexts/PersonalContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faPhone, faUser } from '@fortawesome/free-solid-svg-icons';

export const Preview = () => {
  const { personalItems } = usePersonal();
  const { eduItems } = useEducation();
  const { experienceItems } = useExperience();

  return (
    <div className="preview">
      <div className="preview-main">
        <div className="summary">
          <div className="name">
            <span>{personalItems[0].firstName}</span>{' '}
            {personalItems[0].lastName}
          </div>
          <div className="summary">
            <h3>Executive Summary:</h3>
            <div>{personalItems[0].summary}</div>
          </div>
        </div>

        <div className="preview-experience">
          <div className="preview-title">
            <span className="placeholder"></span>
            <div className="bubble">
              <span></span>
            </div>
            <h2>Experience</h2>
          </div>
          {experienceItems?.map((item) => (
            <div key={'role' + item.id} className="preview-item">
              <div className="date" key={'date' + item.id}>
                {(item.startDate !== '' || item.endDate !== '') && (
                  <>
                    <span>{item.startDate} to </span>
                    {item.endDate}
                  </>
                )}
              </div>
              <div className="bubble">
                <span></span>
              </div>
              <div className="preview-details">
                <div className="role" key={'role' + item.id}>
                  {item.role}
                </div>
                <div className="company" key={'company' + item.id}>
                  {item.company}
                </div>
                <div key={'description' + item.id}>{item.description}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="preview-education">
          <div className="preview-title">
            <span className="placeholder"></span>
            <div className="bubble">
              <span></span>
            </div>
            <h2>Education</h2>
          </div>
          {eduItems?.map((item) => (
            <div key={'degree' + item.id} className="preview-item">
              <div className="date" key={'date' + item.id}>
                {(item.startDate !== '' || item.endDate !== '') && (
                  <>
                    <span>{item.startDate} to </span>
                    {item.endDate}
                  </>
                )}
              </div>
              <div className="bubble">
                <span></span>
              </div>
              <div className="preview-details">
                <div className="degree" key={'degree' + item.id}>
                  {item.degree}
                </div>
                <div className="uni" key={'uni' + item.id}>
                  {item.uni}
                </div>
                <div key={'description' + item.id}>{item.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="preview-sidebar">
        <div className="personal-details">
          <div className="personal-item">
            <div className="icon">
              <FontAwesomeIcon icon={faHome} />
            </div>
            <div className="address-output">
              {personalItems[0].street}
              <br />
              {personalItems[0].location}
            </div>
          </div>

          <div className="personal-item">
            <div className="icon">
              <FontAwesomeIcon icon={faPhone} />
            </div>
            <div className="phone-mail-output">
              {personalItems[0].phone}
              <br />
              {personalItems[0].mail}
            </div>
          </div>

          <div className="personal-item">
            <div className="icon">
              <FontAwesomeIcon icon={faUser} />
            </div>
            <div className="birthdate-nationality-output">
              {personalItems[0].birthdate}
              <br />
              {personalItems[0].nationality}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
