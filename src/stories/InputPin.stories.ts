import { InputField } from "../components/Input/InputField";
import type { Meta, StoryObj } from "@storybook/react";
import { InputPin } from "../components/InputPin/InputPin";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: "Components/Inputs/InputPin",
  component: InputPin,
  tags: ["autodocs"],
};

export const Default = {
  args: {
    label: "Enter your Password",
    helperText: "your basic information",
    isError: false,
    isSuccess: false,
  },
};
export const Error = {
  args: {
    label: "Enter your Password",
    helperText: "fill Password",
    isError: true,
    isSuccess: false,
  },
};
export const Success = {
  args: {
    label: "Enter your Password",
    helperText: "fill Password",
    isError: false,
    isSuccess: true,
  },
};
