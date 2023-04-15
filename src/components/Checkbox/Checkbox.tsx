import React from "react";
import { Label } from "../utils/global.style";
import {
  CheckBoxWrapper,
  CheckboxLabel,
  CheckboxStyle,
  Subtext,
  TextWrapper,
} from "./Checkbox.style";
import { Wrapper } from "../Input/Input.style";

interface CheckboxProps {
  onChange: () => void;
  checked: boolean;
  isSubtext: boolean;
  label: string;
  subText: string;
}

export const Checkbox = ({
  label,
  isSubtext,
  subText,
  onChange,
  checked,
}: CheckboxProps) => {
  console.log(subText, "boolean");
  return (
    <CheckBoxWrapper isSubtext={isSubtext}>
      <CheckboxStyle onChange={onChange} checked={checked} />
      <TextWrapper>
        <CheckboxLabel>{label}</CheckboxLabel>
        {isSubtext ? <Subtext>{subText}</Subtext> : null}
        {/* {isSubText && <Subtext>{subText}</Subtext>} */}
      </TextWrapper>
    </CheckBoxWrapper>
  );
};
