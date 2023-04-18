import styled from "styled-components";
interface InputProps {
  isError?: boolean;
  isSuccess?: boolean;
  startIcon?: any;
}
export const InputStyle = styled.input<InputProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
 font-size:16px;
  width: 380px;
  font-style: normal;
  font-weight: 400; 
  letter-spacing: 0.01em;
  color: #0D0F13;
  gap: 10px;
  height: 40px;
  background: #fdfdfe;
  border: 1px solid #c6cbd7;
  font-family: "Manrope";
  border-radius: 8px;
  padding-left:${(props) => (props.startIcon ? `42px;` : "5px;")}
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
     :focus{
        background: #FDFDFE;
        border: 1px solid #22A21F;
        box-shadow: 0px 2px 2px -1px rgba(0, 0, 0, 0.12), 0px 0px 0px 3px #BCF5A6;
         border-radius: 8px;
         outline: none;
     }
      `
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

  width: 427px;
`;
export const Label = styled.span<InputProps>`
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0.0125em;
  font-family: "Manrope";
  color: #5a647c;
`;
export const HelperText = styled.span<InputProps>`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0.01em;
  font-family: "Manrope";
  display: flex;
  align-items: center;
  gap: 4px;
  color: ${(props) =>
    props.isError ? `#BD2939` : props.isSuccess ? `#0F731E` : ` #383f4e`};
`;
export const IconWrapper = styled.div`
  position: absolute;
  /* top: 35px; */
  left: 8px;
  display: flex;
  align-items: center;
`;
export const IconEndWrapper = styled.div`
  position: absolute;
  /* top: 35px; */
  right: 8px;
  display: flex;
  align-items: center;
`;
export const InputWrapper = styled.div`
  position: relative;
  /* top: 0; */
  display: flex;
  align-items: center;
`;
