import { memo, useMemo, useState } from 'react';
import { useFormContext } from 'react-hook-form';

import { methodOptions } from '../index.tsx';
import { FormContextFormValues } from '../types.ts';
import Card from '../../../components/Card';
import OwnButton from '../../../components/OwnButton';

const GetResult = () => {
  const [fakeLoading, setFakeLoading] = useState<boolean>(false);

  const { getValues  } = useFormContext<FormContextFormValues>();
  const { value1, value2, method } = getValues();

  const handleFakeLoading = () => {
    setFakeLoading(true);
    setTimeout(() => {
      setFakeLoading(false);
    }, 2000);
  };

  const result = useMemo((): number => {
    switch (method) {
      case 'DIV': {
        return value1 / value2;
      }
      case 'MULTI': {
        return value1 * value2;
      }
      case 'SUB': {
        return value1 - value2;
      }
      case 'SUM': {
        return value1 + value2;
      }
      default:
        return 0;
    }
  }, [value1, value2, method]);

  const methodType = useMemo(() => {
    return methodOptions.find((m) => m.value === method)?.label || '';
  }, [method]);

  return (
    <Card title={'Result with getValues'}>
      {!fakeLoading ? (
        <>
          <p>
            {value1}
            {methodType}
            {value2} = {result}
          </p>
          <OwnButton onClick={handleFakeLoading}>Re-render me</OwnButton>
        </>
      ) : (
        <p>Connecting to NASA...</p>
      )}
    </Card>
  );
};
const GetResultComponent = memo(GetResult);
export default GetResultComponent;
