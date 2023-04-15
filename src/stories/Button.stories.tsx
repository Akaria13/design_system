import { Button } from "../components/Button/Button";
import type { Meta } from "@storybook/react";
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: "Components/Buttons/Button",
  component: Button,
  tags: ["autodocs"],
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const Primary = {
  args: {
    variant: "Primary",
    children: "Button",
    className: "",
  },
};

export const Secondary = {
  args: {
    variant: "Secondary",
    children: "Button",
    className: "",
  },
};
export const Tertiary = {
  args: {
    variant: "Tertiary",
    children: "Button",
    className: "",
  },
};
