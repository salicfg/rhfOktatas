import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { ComponentBasicFormValues } from './types.ts';
import PlainTextField from '../../components/plainInputs/PlainTextField';
import OwnButton from '../../components/OwnButton';

const defaultValues: ComponentBasicFormValues = {
  firstName: 'Sali',
  lastName: 'Istvan',
  email: '',
  password: '',
  passwordAgain: '',
};
const ComponentBasicContainer = () => {
  const [disableAll, setDisableAll] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    getValues,
    reset,
    setFocus,
    clearErrors,
    formState: { errors },
  } = useForm<ComponentBasicFormValues>({
    defaultValues,
    mode: 'onChange',
  //  disabled: disableAll, // Ezt annyira nem hasznaljuk mert validaciokkal osszeakad
  });

  const onSubmit: SubmitHandler<ComponentBasicFormValues> = (data) => {
    alert(JSON.stringify(data, null, 2));
  };

  const handleDisableAll = (): void => {
    setDisableAll((state) => {
      if (!state) {
        clearErrors();
      }
      return !state;
    });
  };

  const handleReset = () => {
    reset();
  };

  const handleFocusOnPW = () => {
    setFocus('password');
  };

  const validatePwAgain = (value: string) => {
    return getValues('password') === value || 'Nem egyezik!!!';
  };

  const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;


  return (
    <>
      <h2>Component BASIC with validation</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <PlainTextField
          {...register('firstName', { required: 'Kotelezo!', maxLength: { value: 20, message: 'Max 20!' } })}
          label={'First name'}
          errorMessage={errors['firstName']?.message}
          required
        />
        <PlainTextField
          {...register('lastName', { required: 'Kotelezo!' })}
          label={'Last name'}
          errorMessage={errors['lastName']?.message}
          required
        />
        <PlainTextField
          {...register('email', {
            disabled: disableAll,
            required: 'Kotelezo!',
            pattern: {
              value: emailPattern,
              message: 'Invalid email address',
            },
          })}
          type={'email'}
          label={'email'}
          errorMessage={errors['email']?.message}
          required
        />
        <PlainTextField
          {...register('password', { required: 'Kotelezo!' })}
          type={'password'}
          label={'password'}
          errorMessage={errors['password']?.message}
          required
        />
        <PlainTextField
          {...register('passwordAgain', { required: 'Kotelezo!', validate: validatePwAgain })}
          type={'password'}
          label={'password again'}
          errorMessage={errors['passwordAgain']?.message}
          required
        />
        <OwnButton type={'submit'}>Submit</OwnButton>
        <OwnButton type={'button'} onClick={handleFocusOnPW}>
          Focus on PW
        </OwnButton>
        <OwnButton type={'reset'}>Reset Native</OwnButton>
        <OwnButton type={'button'} onClick={handleReset}>
          Reset RHF
        </OwnButton>
        <OwnButton type={'button'} onClick={handleDisableAll}>
          {disableAll ? 'Enable' : 'Disable'} All
        </OwnButton>
      </form>
    </>
  );
};

export default ComponentBasicContainer;
