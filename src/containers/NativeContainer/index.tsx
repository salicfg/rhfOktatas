import React, { useState, ChangeEvent, FormEvent } from 'react';
import { NativeFormValues } from './types.ts';

const NativeContainer: React.FC = () => {
  const [formData, setFormData] = useState<NativeFormValues>({
    firstName: '',
    lastName: '',
    sex: 'male',
    password: '',
    passwordAgain: '',
    agree: false,
  });

  const [formErrors, setFormErrors] = useState<Partial<NativeFormValues>>({});
  const [agreeError, setAgreeError] = useState<string | null>(null);
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;

    if (type === 'checkbox') {
      // Handle checkbox input
      const checked = (e.target as HTMLInputElement).checked;
      setFormData({ ...formData, [name]: checked });
    } else {
      // Handle other input types (text, select, etc.)
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Perform form validation
    const errors: Partial<NativeFormValues> = {};

    if (!formData.firstName) {
      errors.firstName = 'First Name is required';
    }

    if (!formData.lastName) {
      errors.lastName = 'Last Name is required';
    }

    if (!formData.password) {
      errors.password = 'Password is required';
    }

    if (!formData.passwordAgain) {
      errors.passwordAgain = 'Please confirm your password';
    }

    if (formData.password !== formData.passwordAgain) {
      errors.password = 'Passwords do not match';
      errors.passwordAgain = 'Passwords do not match';
    }

    if (!formData.agree) {
      setAgreeError('You must agree to the terms and conditions');
    } else {
      setAgreeError(null); // Clear the error if agree is true
    }

    setFormErrors(errors);

    if (Object.keys(errors).length === 0 && formData.agree) {
      // Form is valid, perform submission logic
      alert(JSON.stringify(formData, null, 2));
    }
  };

  return (
    <>
      <h2>Native form with valdiation</h2>
      <div style={{ width: '50%' }}>
        <form onSubmit={handleSubmit}>
          <div>
            <label>First Name:</label>
            <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
            {formErrors.firstName && <span>{formErrors.firstName}</span>}
          </div>

          <div>
            <label>Last Name:</label>
            <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
            {formErrors.lastName && <span>{formErrors.lastName}</span>}
          </div>

          <div>
            <label>Sex:</label>
            <select name="sex" value={formData.sex} onChange={handleChange}>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label>Password:</label>
            <input type="password" name="password" value={formData.password} onChange={handleChange} required />
            {formErrors.password && <span>{formErrors.password}</span>}
          </div>

          <div>
            <label>Confirm Password:</label>
            <input
              type="password"
              name="passwordAgain"
              value={formData.passwordAgain}
              onChange={handleChange}
              required
            />
            {formErrors.passwordAgain && <span>{formErrors.passwordAgain}</span>}
          </div>

          <div>
            <label>
              <input type="checkbox" name="agree" checked={formData.agree} onChange={handleChange} />I agree to the
              terms and conditions
            </label>
            {agreeError && <p>{agreeError}</p>}
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default NativeContainer;
