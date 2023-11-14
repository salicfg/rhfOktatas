import { useMemo } from 'react';
import { useWatch } from 'react-hook-form';

import { MathMethods } from '../../../common/types.ts';
import { methodOptions } from '../index.tsx';
import Card from '../../../components/Card';

const ResultComponent = () => {
  const [value1, value2, method]: [number, number, MathMethods] = useWatch({ name: ['value1', 'value2', 'method'] });

  const resolute = useMemo((): number => {
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
    <Card title={'Result with useWatch'}>
      <p>
        {value1}
        {methodType}
        {value2} = {resolute}
      </p>
    </Card>
  );
};

export default ResultComponent;
