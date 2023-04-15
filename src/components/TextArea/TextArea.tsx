import React from "react";
import { HelperText, Label, TextAreaStyle, Wrapper } from "./TextArea.style";
import { InfoIcon } from "../../Icons/IconList";
interface InputProps {
  label: string;
  helperText: string;
  isError?: boolean;
  isSuccess?: boolean;
}
export const TextArea = ({
  label,
  helperText,
  isError,
  isSuccess,
}: InputProps) => {
  return (
    <Wrapper>
      <Label>{label}</Label>
      <TextAreaStyle isError={isError} isSuccess={isSuccess} />
      {helperText && (
        <HelperText isError={isError} isSuccess={isSuccess}>
          <InfoIcon isError={isError} isSuccess={isSuccess} /> {helperText}
        </HelperText>
      )}
    </Wrapper>
  );
};
