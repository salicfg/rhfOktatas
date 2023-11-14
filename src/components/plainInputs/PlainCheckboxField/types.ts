import { RegisterReturnType } from '../../../common/types.ts';

export type PlainCheckboxFieldType = RegisterReturnType & {
  id?: string;
  label?: string;
  errorMessage?: string;
};
