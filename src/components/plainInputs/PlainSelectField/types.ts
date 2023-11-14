import {RegisterReturnType, SelectOption} from '../../../common/types.ts';

export type PlainSelectFieldType = RegisterReturnType & {
  id?: string;
  label?: string;
  errorMessage?: string;
  options?: Array<SelectOption>;
  nullable?: boolean;
};
