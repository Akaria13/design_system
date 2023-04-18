import type { Meta, StoryObj } from "@storybook/react";
import { IconButton } from "../components/Button/IconButtons";
import { AddIcon, ProfileIcon } from "../Icons/IconList";
import React from "react";
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof IconButton> = {
  title: "Components/Buttons/IconButton",
  component: IconButton,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof IconButton>;
// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const Primary: Story = {
  render: (args) => (
    <IconButton
      children={<AddIcon variant="Primary" />}
      className=""
      variant="Primary"
    />
  ),
  args: {
    variant: "Primary",
    className: "",
  },
};
export const Secondary: Story = {
  render: (args) => (
    <IconButton
      children={<AddIcon variant="Secondary" />}
      className=""
      variant="Secondary"
    />
  ),
  args: {
    variant: "Secondary",
    className: "",
  },
};
export const Tertiary: Story = {
  render: (args) => (
    <IconButton
      children={<AddIcon variant="Tertiary" />}
      className=""
      variant="Tertiary"
    />
  ),
  args: {
    variant: "Tertiary",
    className: "",
  },
};
