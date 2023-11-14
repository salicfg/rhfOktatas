import { FC } from 'react';
import { MuiCheckBoxPropType } from './types';
import { Checkbox, FormControl, FormControlLabel, FormHelperText } from '@mui/material';

const MuiCheckBox: FC<MuiCheckBoxPropType> = (props) => {
  const { required, label, error = false, helperText = '', ...restProps } = props;
  return (
    <FormControl error={error}>
      <FormControlLabel required={required} {...restProps} control={<Checkbox />} label={label} />
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
};

export default MuiCheckBox;
