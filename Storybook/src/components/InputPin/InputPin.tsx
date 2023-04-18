import React from "react";
import {
  HelperText,
  InputPinStyle,
  InputWrapper,
  Label,
  Wrapper,
} from "./InputPin.style";
import { InfoIcon } from "../../Icons/IconList";
interface InputProps {
  label: string;
  helperText: string;
  isError?: boolean;
  isSuccess?: boolean;
}
export const InputPin = ({
  label,
  helperText,
  isError,
  isSuccess,
}: InputProps) => {
  return (
    <Wrapper>
      <Label>{label}</Label>
      <InputWrapper>
        <InputPinStyle
          type="text"
          isError={isError}
          isSuccess={isSuccess}
          maxLength={1}
        />
        <InputPinStyle
          type="text"
          isError={isError}
          isSuccess={isSuccess}
          maxLength={1}
        />
        <InputPinStyle
          type="text"
          isError={isError}
          isSuccess={isSuccess}
          maxLength={1}
        />
        <InputPinStyle
          type="text"
          isError={isError}
          isSuccess={isSuccess}
          maxLength={1}
        />
        <InputPinStyle
          type="text"
          isError={isError}
          isSuccess={isSuccess}
          maxLength={1}
        />
        <InputPinStyle
          type="text"
          isError={isError}
          isSuccess={isSuccess}
          maxLength={1}
        />
      </InputWrapper>
      {helperText && (
        <HelperText isError={isError} isSuccess={isSuccess}>
          <InfoIcon isError={isError} isSuccess={isSuccess} /> {helperText}
        </HelperText>
      )}
    </Wrapper>
  );
};
