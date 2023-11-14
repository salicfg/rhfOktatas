import { Controller, FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import { Box, Button, Grid, MenuItem } from '@mui/material';
import { zodResolver } from '@hookform/resolvers/zod';

import { muiFormDefaultValue, MuiValidationSchema, muiValidationSchema } from './muiValidation.schema.ts';
import { ValidationSchema } from '../SchemaValidationContainer/schemaValidation.schema.ts';
import { SEX_OPTIONS } from '../../common/constants.ts';
import MuiCheckBox from '../../components/MuiCheckbox';

const MuiContainer = () => {
  const methods = useForm<MuiValidationSchema>({
    defaultValues: muiFormDefaultValue,
    resolver: zodResolver(muiValidationSchema),
    mode: 'onChange',
  });

  const onSubmit: SubmitHandler<ValidationSchema> = (data) => {
    alert(JSON.stringify(data, null, 2));
  };

  return (
    <FormProvider {...methods}>
      <h2>MUI with Schema valdiation</h2>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} xl={4}>
            <Controller
              name={'firstName'}
              control={methods.control}
              render={({ field, fieldState }) => (
                <TextField
                  {...field}
                  error={fieldState.invalid}
                  helperText={fieldState.error?.message}
                  variant={'outlined'}
                  label={'First name'}
                  fullWidth
                />
              )}
            />
          </Grid>
          <Grid item xs={12} md={6} xl={4}>
            <Controller
              name={'lastName'}
              control={methods.control}
              render={({ field, fieldState }) => (
                <TextField
                  {...field}
                  error={fieldState.invalid}
                  helperText={fieldState.error?.message}
                  variant={'outlined'}
                  label={'Last name'}
                  fullWidth
                />
              )}
            />
          </Grid>
          <Grid item xs={12} md={6} xl={4}>
            <Controller
              name={'email'}
              control={methods.control}
              render={({ field, fieldState }) => (
                <TextField
                  {...field}
                  error={fieldState.invalid}
                  helperText={fieldState.error?.message}
                  variant={'outlined'}
                  label={'Email'}
                  fullWidth
                />
              )}
            />
          </Grid>
          <Grid item xs={12} md={6} xl={4}>
            <Controller
              name={'sex'}
              control={methods.control}
              render={({ field, fieldState }) => (
                <TextField
                  {...field}
                  select
                  error={fieldState.invalid}
                  helperText={fieldState.error?.message}
                  variant={'outlined'}
                  label={'Sex'}
                  fullWidth>
                  {SEX_OPTIONS.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              )}
            />
          </Grid>
          <Grid item xs={12} md={6} xl={4}>
            <Controller
              name={'password'}
              control={methods.control}
              render={({ field, fieldState }) => (
                <TextField
                  {...field}
                  type={'password'}
                  error={fieldState.invalid}
                  helperText={fieldState.error?.message}
                  variant={'outlined'}
                  label={'Password'}
                  fullWidth
                />
              )}
            />
          </Grid>
          <Grid item xs={12} md={6} xl={4}>
            <Controller
              name={'passwordAgain'}
              control={methods.control}
              render={({ field, fieldState }) => (
                <TextField
                  {...field}
                  type={'password'}
                  error={fieldState.invalid}
                  helperText={fieldState.error?.message}
                  variant={'outlined'}
                  label={'Password Again'}
                  fullWidth
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              name={'agree'}
              control={methods.control}
              render={({ field, fieldState }) => (
                <MuiCheckBox
                  {...field}
                  error={fieldState.invalid}
                  helperText={fieldState.error?.message}
                  label={'Do you agree with the terms?'}
                />
              )}
            />
          </Grid>
        </Grid>

        <Box sx={{ mt: 5 }}>
          <Grid container item>
            <Button variant={'contained'} color={'success'} type={'submit'}>
              Submit
            </Button>
          </Grid>
        </Box>
      </form>
    </FormProvider>
  );
};

export default MuiContainer;
