import { SubmitHandler, useFieldArray, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import PlainTextField from '../../components/plainInputs/PlainTextField';
import { FieldArrayFormValues, fieldArrayValidationSchema } from './fieldArrayValidation.schema.ts';
import Total from './TotalComponent';
import Card from '../../components/Card';
import OwnButton from "../../components/OwnButton";

const FieldArrayContainer = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldArrayFormValues>({
    defaultValues: {
      cart: [{ name: 'test', quantity: 1, price: 23 }],
    },
    resolver: zodResolver(fieldArrayValidationSchema),
    mode: 'onBlur',
  });
  const { fields, append, remove  } = useFieldArray({
    name: 'cart',
    control,
  });

  const onSubmit: SubmitHandler<FieldArrayFormValues> = (data) => {
    alert(JSON.stringify(data, null, 2));
  };

  const handleDelete = (index: number): void => {
    remove(index);
  };

  const handleAppend = (): void => {
    append({
      name: '',
      quantity: 0,
      price: 0,
    });
  };

  return (
    <>
      <h2>Component Schema valdiation</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {fields.map((field, index) => {
          return (
            <Card title={`#${index} id: ${field.id}`} key={field.id}>
              <section className={'section'} key={field.id}>
                <PlainTextField
                  label={'name'}
                  {...register(`cart.${index}.name` as const)}
                  errorMessage={errors?.cart?.[index]?.name?.message}
                />
                <PlainTextField
                  label={'quantity'}
                  type="number"
                  {...register(`cart.${index}.quantity` as const, {
                    valueAsNumber: true,
                    required: true,
                  })}
                  errorMessage={errors?.cart?.[index]?.quantity?.message}
                />
                <PlainTextField
                  label={'value'}
                  type={'number'}
                  {...register(`cart.${index}.price` as const, {
                    valueAsNumber: true,
                    required: true,
                  })}
                  errorMessage={errors?.cart?.[index]?.price?.message}
                />

                <OwnButton type="button" onClick={() => handleDelete(index)}>
                  DELETE
                </OwnButton>
              </section>
            </Card>
          );
        })}

        <Total control={control} />

        <button type="button" onClick={handleAppend}>
          APPEND
        </button>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default FieldArrayContainer;
