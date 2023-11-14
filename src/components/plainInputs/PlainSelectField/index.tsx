import { forwardRef } from 'react';
import { PlainSelectFieldType } from './types.ts';

const PlainSelectField = forwardRef<HTMLSelectElement, PlainSelectFieldType>((props, ref) => {
  const {
    options,
    name,
    id,
    onChange,
    onBlur,
    label = '',
    errorMessage = '',
    disabled = false,
    required = false,
    nullable = false,
  } = props;
  return (
    <div className="form-element select-container">
      <label htmlFor={id || name}>{`${label} ${required ? '*' : ''}`}</label>
      <select
        ref={ref}
        className={errorMessage ? 'error' : ''}
        disabled={disabled}
        placeholder={`${label} ${required ? '*' : ''}`}
        name={name}
        id={id || name}
        onChange={onChange}
        onBlur={onBlur}>
        {nullable && <option value={''}></option>}
        {options?.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          );
        })}
      </select>
      {errorMessage && <p className={'errorText'}>{errorMessage}</p>}
    </div>
  );
});

export default PlainSelectField;
