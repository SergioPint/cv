import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileSignature } from '@fortawesome/free-solid-svg-icons';

export const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <FontAwesomeIcon icon={faFileSignature} />
        cv creator
      </div>
    </div>
  );
};
