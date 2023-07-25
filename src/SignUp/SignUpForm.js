import { useForm } from 'react-hook-form';

import {
  StyledBlock,
  StyledCard,
  StyledCardHeading,
  StyledCardTitle,
  StyledContainer,
  StyledInput,
  StyledForm,
  StyledWrapper,
  StyledLoginButton,
  StyledErrors,
  StyledTermsandCondition,
  StyledText,
  StyledAccountBlock,
  StyledButton,
} from './SignUpForm.styled';

import { REGEX, REGEX_MESSAGE, REQUIRED_MSG } from '../utils/FormValidation';

const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <StyledWrapper>
        <StyledContainer>
          <StyledBlock>
            <StyledCard>
              <StyledCardTitle>
                <StyledCardHeading>Admin SignUp</StyledCardHeading>
              </StyledCardTitle>
              <StyledForm onSubmit={handleSubmit(onSubmit)}>
                <StyledInput
                  type="fname"
                  placeholder="FirstName"
                  name="fname"
                  {...register('fname', {
                    required: REQUIRED_MSG.fname,
                    pattern: {
                      value: REGEX.fname,
                      message: REGEX_MESSAGE.fname,
                    },
                  })}
                />
                {errors.fname && (
                  <StyledErrors>{errors.fname.message}* </StyledErrors>
                )}
                <StyledInput
                  type="lname"
                  placeholder="LastName"
                  name="lname"
                  {...register('lname', {
                    required: REQUIRED_MSG.lname,
                    pattern: {
                      value: REGEX.lname,
                      message: REGEX_MESSAGE.lname,
                    },
                  })}
                />
                {errors.lname && (
                  <StyledErrors>{errors.lname.message}* </StyledErrors>
                )}
                <StyledInput
                  type="email"
                  placeholder="Email"
                  name="email"
                  {...register('email', {
                    required: REQUIRED_MSG.email,
                    pattern: {
                      value: REGEX.email,
                      message: REGEX_MESSAGE.email,
                    },
                  })}
                />
                {errors.email && (
                  <StyledErrors>{errors.email.message}* </StyledErrors>
                )}
                <StyledInput
                  type="password"
                  placeholder="Password"
                  name="password"
                  {...register('password', {
                    required: REQUIRED_MSG.password,
                    pattern: {
                      value: REGEX.password,
                      message: REGEX_MESSAGE.password,
                    },
                  })}
                />
                {errors.password && (
                  <StyledErrors>{errors.password.message}* </StyledErrors>
                )}
                <StyledInput
                  type="password"
                  placeholder="Confirm-Password"
                  name="confirmPassword"
                  {...register('confirmPassword', {
                    required: REQUIRED_MSG.confirmPassword,
                    pattern: {
                      value: REGEX.confirmPassword,
                      message: REGEX_MESSAGE.confirmPassword,
                    },
                    validate: (confirmPassword) => {
                      if (confirmPassword !== watch('password'))
                        return REGEX_MESSAGE.confirmPassword;

                      return true;
                    },
                  })}
                />
                {errors.confirmPassword && (
                  <StyledErrors>{errors.confirmPassword.message}*</StyledErrors>
                )}
                <StyledTermsandCondition>
                  <StyledInput
                    type="checkbox"
                    name="checkbox"
                    {...register('checkbox', {
                      required: REQUIRED_MSG.checkbox,
                    })}
                  />
                  <StyledText>I accept Terms and Conditions</StyledText>
                </StyledTermsandCondition>
                {errors.checkbox && (
                  <StyledErrors>{errors.checkbox.message}*</StyledErrors>
                )}
                <StyledLoginButton type="submit">Submit</StyledLoginButton>
              </StyledForm>
              <StyledAccountBlock>
                <StyledButton>Create Account</StyledButton>
              </StyledAccountBlock>
            </StyledCard>
          </StyledBlock>
        </StyledContainer>
      </StyledWrapper>
    </>
  );
};

export default SignUpForm;
