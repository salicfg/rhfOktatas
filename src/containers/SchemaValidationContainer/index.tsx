import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import PlainTextField from '../../components/plainInputs/PlainTextField';
import { schemFormdefaultValue, ValidationSchema, validationSchema } from './schemaValidation.schema.ts';
import PlainSelectField from '../../components/plainInputs/PlainSelectField';
import PlainCheckboxField from '../../components/plainInputs/PlainCheckboxField';
import { SEX_OPTIONS } from '../../common/constants.ts';

const SchemaValidationContainer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ValidationSchema>({
    defaultValues: schemFormdefaultValue,
    resolver: zodResolver(validationSchema),
    mode: 'onChange',
  });

  const onSubmit: SubmitHandler<ValidationSchema> = (data) => {
    alert(JSON.stringify(data, null, 2));
  };

  return (
    <>
      <h2>Component Schema valdiation</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <PlainTextField
          {...register('firstName')}
          label={'First name'}
          errorMessage={errors['firstName']?.message}
          required
        />
        <PlainTextField
          {...register('lastName')}
          label={'Last name'}
          errorMessage={errors['lastName']?.message}
          required
        />
        <PlainTextField
          {...register('email')}
          type={'email'}
          label={'email'}
          errorMessage={errors['email']?.message}
          required
        />
        <PlainSelectField
          {...register('sex')}
          options={SEX_OPTIONS}
          label={'sex'}
          errorMessage={errors['sex']?.message}
          nullable
          required
        />
        <PlainTextField
          {...register('password')}
          type={'password'}
          label={'password'}
          errorMessage={errors['password']?.message}
          required
        />
        <PlainTextField
          {...register('passwordAgain')}
          type={'password'}
          label={'password again'}
          errorMessage={errors['passwordAgain']?.message}
          required
        />
        <PlainCheckboxField
          {...register('agree')}
          label={'Do you agree with the terms?'}
          errorMessage={errors['agree']?.message}
          required
        />
        <button type={'submit'}>Submit</button>
      </form>
    </>
  );
};

export default SchemaValidationContainer;
