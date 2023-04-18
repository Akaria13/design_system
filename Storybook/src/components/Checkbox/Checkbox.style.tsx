import styled from "styled-components";

export const CheckboxStyle = styled.input.attrs({ type: "checkbox" })`
  width: 20px;
  height: 20px;
  border: 1px solid #c6cbd7;
  border-radius: 4px;
  cursor: pointer;

  &:checked {
    background-color: #051a5f;
    opacity: 1;
  }

  &:hover {
    background: #e2e5eb;
    border: 1px solid #c6cbd7;
  }
`;

interface WrapperProps {
  isSubtext: boolean;
}

export const CheckBoxWrapper = styled.div<WrapperProps>`
  display: flex;
  align-items: ${(props) => (props.isSubtext ? "start" : "center")};

  gap: 4px;
`;

export const CheckboxLabel = styled.span`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.01em;
  color: #0d0f13;
`;

interface CenterProps {
  isSubtext: boolean;
}

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Subtext = styled.span`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  /* identical to box height, or 150% */

  letter-spacing: 0.01em;

  /* Light Mode/Text/Tertiary */

  color: #5a647c;
`;
