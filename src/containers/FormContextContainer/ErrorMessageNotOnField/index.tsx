import { useFormState } from 'react-hook-form';

const ErrorMessageNotOnField = () => {
  const { errors, dirtyFields,  } = useFormState();

  return (
    <>
      <br />
      <strong>Errors:</strong>
      <p>{Object.keys(errors).map((key) => `FieldName: ${key}, message: ${errors[key]?.message}`)}</p>
      <strong>Dirty fields:</strong>
      <p>{Object.keys(dirtyFields).join(', ')}</p>
    </>
  );
};

export default ErrorMessageNotOnField;
