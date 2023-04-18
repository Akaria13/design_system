import { Checkbox } from "../components/Checkbox/Checkbox";
import type { Meta } from "@storybook/react";

export default {
  title: "Components/Inputs/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
};

export const Subtext = {
  args: {
    label: "Option",
    isSubtext: true,
    subText: "Subtext",
    checked: true,
  },
};

// export const WithoutSubtext = {
//   args: {
//     label: "Option",
//     subText: null,
//   },
// };
