import { FormControlLabelProps } from '@mui/material/FormControlLabel/FormControlLabel';

export type MuiCheckBoxPropType = Omit<FormControlLabelProps, 'control'> & {
  error?: boolean;
  helperText?: string;
};
