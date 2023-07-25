export const REGEX = {
  fname: /^[a-zA-Z0-9 ]{1,50}$/,
  lname: /^[a-zA-Z0-9 ]{1,50}$/,
  email: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
  password: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
  confirmPassword: '',
  checkbox: '',
};

export const REQUIRED_MSG = {
  fname: 'FirstName is required',
  lname: 'LastName is required',
  email: 'Email is required',
  password: 'Please enter your password',
  confirmPassword: 'Please enter a valid password',
  checkbox: 'You must accept the terms and conditions',
};

export const REGEX_MESSAGE = {
  fname: 'Special Characters are not allowed (1-50 characters)',
  lname: 'Special Characters are not allowed (1-50 characters)',
  email: 'Please enter a valid email',
  password: 'Your password must have at least 8 characters',
  confirmPassword:
    'Your inputs for password and confirm password doesn’t match',
  checkbox: '',
};
