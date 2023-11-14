import { SubmitHandler, useForm } from 'react-hook-form';
import { BasicFormValues } from './types.ts';
import OwnButton from "../../components/OwnButton";

const BasicContainer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BasicFormValues>();
  const onSubmit: SubmitHandler<BasicFormValues> = (data) => {
    alert(JSON.stringify(data, null, 2))
  }

  return (
    <>
      <h2>BASIC</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <div className="form-element input-container">
          <input defaultValue="test" {...register('example')} placeholder="Enter your text" />
        </div>
        {/* include validation with required or other standard HTML validation rules */}
        <div className="form-element input-container">
          <input {...register('exampleRequired', { required: true })} placeholder="Enter your text" />
        </div>
        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <span>This field is required</span>}
        <br />
        <OwnButton type="submit">Submit</OwnButton>
      </form>
    </>
  );
};

export default BasicContainer;
