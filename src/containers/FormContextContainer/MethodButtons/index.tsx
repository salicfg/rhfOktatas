import { MouseEvent } from 'react';
import { useFormContext } from 'react-hook-form';
import { FormContextFormValues } from '../types.ts';
import { MathMethods } from '../../../common/types.ts';
import OwnButton from "../../../components/OwnButton";

const MethodButtons = () => {
  const { setValue } = useFormContext<FormContextFormValues>();

  const handleMethodClick = (e: MouseEvent<HTMLButtonElement>): void => {
    const methodType = e.currentTarget.name as MathMethods;

    switch (methodType) {
      case 'SUM': {
        setValue('method', 'SUM');
        break;
      }
      case 'DIV': {
        setValue('method', 'DIV');
        break;
      }
      case 'SUB': {
        setValue('method', 'SUB');
        break;
      }
      case 'MULTI': {
        setValue('method', 'MULTI');
        break;
      }
      default: {
        break;
      }
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'row', gap: 10 }}>
      <OwnButton name={'MULTI'} type={'button'} onClick={handleMethodClick}>
        multiplication (*)
      </OwnButton>
      <OwnButton name={'DIV'} type={'button'} onClick={handleMethodClick}>
        division (/)
      </OwnButton>
      <OwnButton name={'SUM'} type={'button'} onClick={handleMethodClick}>
        addition (+)
      </OwnButton>
      <OwnButton name={'SUB'} type={'button'} onClick={handleMethodClick}>
        subtraction (-)
      </OwnButton>
    </div>
  );
};

export default MethodButtons;
