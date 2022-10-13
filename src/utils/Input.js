import React from 'react';

const Input = ({
  name,
  labelText,
  inputType,
  onChange,
  inputRef,
  inputValue,
}) => {
  return (
    <div className={name}>
      <input
        type={inputType}
        id={name}
        onChange={onChange}
        ref={inputRef}
        placeholder={labelText}
        value={inputValue}
      />
    </div>
  );
};

export default Input;
