import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { FormContextFormValues } from './types.ts';
import PlainTextField from '../../components/plainInputs/PlainTextField';
import PlainSelectField from '../../components/plainInputs/PlainSelectField';
import { MathMethods, SelectOption } from '../../common/types.ts';
import ResultComponent from './ResultComponent';
import GetResultComponent from './GetResoultComponent';
import MethodButtons from './MethodButtons';
import ErrorMessageNotOnField from './ErrorMessageNotOnField';

export const methodOptions: SelectOption<MathMethods>[] = [
  {
    label: '+',
    value: 'SUM',
  },
  {
    label: '-',
    value: 'SUB',
  },
  {
    label: '%',
    value: 'DIV',
  },
  {
    label: 'X',
    value: 'MULTI',
  },
];

const defaultValues: FormContextFormValues = {
  name: '',
  method: 'SUM',
  value1: 0,
  value2: 0,
};
const FormContextContainer = () => {
  const methods = useForm<FormContextFormValues>({
    defaultValues,
    mode: 'onChange',
  });

  const onSubmit: SubmitHandler<FormContextFormValues> = (data) => {
    alert(JSON.stringify(data, null, 2));
  };

  return (
    <FormProvider {...methods}>
      <h2>Form with FormContext</h2>

      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <PlainTextField {...methods.register('name', { required: 'Name is required!' })} label={'name'} required />
        <PlainTextField {...methods.register('value1', { valueAsNumber: true })} type={'number'} label={'name'} />
        <PlainSelectField {...methods.register('method')} options={methodOptions} label={'Method'} />
        <PlainTextField {...methods.register('value2', { valueAsNumber: true })} type={'number'} label={'name'} />

        <ResultComponent />
        <GetResultComponent />
        <MethodButtons />
        <ErrorMessageNotOnField />
      </form>
    </FormProvider>
  );
};

export default FormContextContainer;
