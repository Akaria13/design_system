import React, { HTMLAttributes } from "react";
import {
  HelperText,
  IconEndWrapper,
  IconWrapper,
  InputStyle,
  InputWrapper,
  Label,
  Wrapper,
} from "./Input.style";
import { InfoIcon, ProfileIcon } from "../../Icons/IconList";
interface InputProps extends HTMLAttributes<HTMLInputElement> {
  label: string;
  helperText?: string;
  isError?: boolean;
  isSuccess?: boolean;
  startIcon?: any;
  endIcon?: any;
}
export const InputField = ({
  label,
  helperText,
  isError,
  isSuccess,
  startIcon,
  endIcon,
}: InputProps) => {
  return (
    <Wrapper>
      <Label>{label}</Label>
      <InputWrapper>
        <InputStyle
          type="text"
          isError={isError}
          isSuccess={isSuccess}
          startIcon={startIcon}
        />
        {startIcon && <IconWrapper>{startIcon}</IconWrapper>}
        {endIcon && <IconEndWrapper>{endIcon}</IconEndWrapper>}
      </InputWrapper>
      {helperText && (
        <HelperText isError={isError} isSuccess={isSuccess}>
          <InfoIcon isError={isError} isSuccess={isSuccess} /> {helperText}
        </HelperText>
      )}
    </Wrapper>
  );
};
