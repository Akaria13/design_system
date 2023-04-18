import React from "react";
import { EyeIcon, ProfileIcon } from "../Icons/IconList";
import { InputField } from "../components/Input/InputField";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof InputField> = {
  title: "Components/Inputs/InputField",
  component: InputField,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof InputField>;

// This is the only named export in the file, and it matches the component name

//More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction

export const Default = {
  args: {
    label: "Enter your name",
    helperText: "Hint text",
    isError: false,
    isSuccess: false,
  },
};
export const Error = {
  args: {
    label: "Enter your name",
    helperText: "Hint text",
    isError: true,
    isSuccess: false,
  },
};
export const Success = {
  args: {
    label: "Enter your name",
    helperText: "Hint text",
    isError: false,
    isSuccess: true,
  },
};

export const InputWithIcon = () => (
  
  <InputField
    label="Enter user name"
    startIcon={<ProfileIcon />}
    endIcon={<EyeIcon />}
  />
);
