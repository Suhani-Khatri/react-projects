import styled from 'styled-components';

export const StyledWrapper = styled.div`
  margin: 0px;
  padding: 0px;
`;

export const StyledContainer = styled.div`
  max-width: 1120px;
  width: 100%;
  margin: 0 auto;
`;

export const StyledBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px;
`;

export const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.3);
  background-color: white;
  padding: 30px 70px;
`;

export const StyledCardTitle = styled.div`
  text-align: center;
  padding: 10px;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-cotent: center;
  align-items: center;
`;

export const StyledCardHeading = styled.h1`
  font-size: 26px;
  font-weight: bold;
  size: 18px;
`;

export const StyledInput = styled.input`
  margin: 15px 0 0 0;
  max-width: 100%;
  border: 1px solid black;
  outline: none;
  padding: 12px 20px;
  border-radius: 4px;
`;

export const StyledTermsandCondition = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const StyledText = styled.span`
  margin: 15px 0 0 0;
  font-size: 13px;
`;

export const StyledErrors = styled.span`
  font-size: 13px;
  color: red;
`;

export const StyledAccountBlock = styled.div`
  display: flex;
  justify-context: flex-start;
`;

export const StyledButton = styled.button`
  margin: 10px 0 0 0;
`;

export const StyledLoginButton = styled.button`
  margin: 25px 0 0 0;
  background-color: blue;
  color: white;
  font-size: 16px;
  outline: none;
  border-radius: 10px;
  border: none;
  padding: 8px 15px;
  max-width: 100%;
  cursor: pointer;
`;
