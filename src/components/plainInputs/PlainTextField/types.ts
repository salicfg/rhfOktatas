import {RegisterReturnType} from "../../../common/types.ts";

export type PlainTextFieldType = RegisterReturnType & {
  id?: string
  label?: string
  errorMessage?: string
  type?: 'text' | 'password' | 'email' | 'number';
};
