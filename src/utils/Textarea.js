import React from 'react';

const Textarea = ({ name, labelText, onChange, inputRef, inputValue }) => {
  return (
    <div className={name}>
      <textarea
        name={name}
        id={name}
        onChange={onChange}
        ref={inputRef}
        placeholder={labelText}
        value={inputValue}
      ></textarea>
    </div>
  );
};

export default Textarea;
