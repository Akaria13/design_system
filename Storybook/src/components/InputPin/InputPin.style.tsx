import styled from "styled-components";
interface InputProps {
  isError?: boolean;
  isSuccess?: boolean;
}
export const InputPinStyle = styled.input<InputProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-family: "Manrope";
  
  width: 40px;
  height: 40px;
  gap: 10px;
  height: 35px;
  background: #fdfdfe;
  border: 1px solid #c6cbd7;
  border-radius: 8px;
  text-align: center;
  ${(props) =>
    props.isError
      ? `
      border: 1px solid #DC393C;
  :focus {
    background: #FDFDFE;
    border: 1px solid #DC393C;
    box-shadow: 0px 2px 2px -1px rgba(0, 0, 0, 0.12), 0px 0px 0px 3px #FBC3B0;
    border-radius: 8px;
     outline: none;
  }
  `
      : props.isSuccess
      ? `
         border: 1px solid #22A21F;
         :focus {background: #FDFDFE;
          border: 1px solid #22A21F;
          box-shadow: 0px 2px 2px -1px rgba(0, 0, 0, 0.12), 0px 0px 0px 3px #BCF5A6;
          border-radius: 8px;
          outline: none;} `
      : `
      :focus {
       border: 1px solid #1b60c7;
       box-shadow: 0px 2px 2px -1px rgba(0, 0, 0, 0.12), 0px 0px 0px 3px #a3d0f9;
       border-radius: 8px;
       outline: none;
     }
  `}

  :hover {
    background: #e2e5eb;
    border: 1px solid #c6cbd7;
  }
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
export const Label = styled.span<InputProps>`
  font-style: normal;
  font-family: "Manrope";
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.0125em;
  color: #5a647c;
`;
export const HelperText = styled.span<InputProps>`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  font-family: "Manrope";
  letter-spacing: 0.01em;
  display: flex;
  align-items: center;
  gap: 4px;
  color: ${(props) =>
    props.isError ? `#BD2939` : props.isSuccess ? `#0F731E` : ` #383f4e`};
`;
export const InputWrapper = styled.div`
  display: flex;
  aling-items: center;
  gap: 15px;
`;
