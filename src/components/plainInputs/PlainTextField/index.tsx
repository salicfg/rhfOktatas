import { forwardRef, memo } from 'react';

import { PlainTextFieldType } from './types.ts';

const PlainTextField = forwardRef<HTMLInputElement, PlainTextFieldType>((props, ref) => {
  const {
    name,
    id,
    onChange,
    onBlur,
    label = '',
    errorMessage = '',
    type = 'text',
    disabled = false,
    required = false,
  } = props;
  return (
    <>
      <div className="form-element input-container">
        <input
          className={errorMessage ? 'error' : ''}
          ref={ref}
          disabled={disabled}
          type={type}
          name={name}
          id={id}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={`${label} ${required ? '*' : ''}`}
        />
        {errorMessage && <p className={'errorText'}>{errorMessage}</p>}
      </div>
    </>
  );
});

const PlainTextFieldComponent = memo(PlainTextField);
export default PlainTextFieldComponent;
