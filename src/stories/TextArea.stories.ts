import { InputField } from "../components/Input/InputField";
import type { Meta, StoryObj } from "@storybook/react";
import { TextArea } from "../components/TextArea/TextArea";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: "Components/Inputs/TextArea",
  component: TextArea,
  tags: ["autodocs"],
};

export const Default = {
  args: {
    label: "Enter your name",
    helperText: "your basic information",
    isError: false,
    isSuccess: false,
  },
};
export const Error = {
  args: {
    label: "Enter your name",
    helperText: "fill name",
    isError: true,
    isSuccess: false,
  },
};
export const Success = {
  args: {
    label: "Enter your name",
    helperText: "fill name",
    isError: false,
    isSuccess: true,
  },
};
