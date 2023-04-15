import * as React from "react";
interface svgProps {
  isError?: boolean;
  isSuccess?: boolean;
}
interface isAddIcon {
  variant?: "Primary" | "Secondary" | "Tertiary";
}
// Profile Icon
export const ProfileIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={30}
    height={30}
    fill="none"
    viewBox="0 0 20 20"
  >
    <path
      fill="#5A647C"
      d="M10 12.813a3.437 3.437 0 1 0 0-6.875 3.437 3.437 0 0 0 0 6.875Z"
    />
    <path
      fill="#5A647C"
      d="M10 1.875A8.125 8.125 0 1 0 18.125 10 8.14 8.14 0 0 0 10 1.875Zm5.14 12.688a6.351 6.351 0 0 0-1.913-1.797 4.664 4.664 0 0 1-6.454 0 6.352 6.352 0 0 0-1.914 1.796 6.875 6.875 0 1 1 10.282 0Z"
    />
  </svg>
);
// Information icon
export const InfoIcon = ({ isError, isSuccess }: svgProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={19}
    height={19}
    fill="none"
    viewBox="0 0 16 16"
  >
    <path
      fill={`${isError ? `#BD2939` : isSuccess ? `#0F731E` : `#5A647C`}`}
      d="M8 1.5A6.5 6.5 0 1 0 14.5 8 6.512 6.512 0 0 0 8 1.5Zm-.125 3a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5Zm.625 7H8a.5.5 0 0 1-.5-.5V8a.5.5 0 0 1 0-1H8a.5.5 0 0 1 .5.5v3a.5.5 0 0 1 0 1Z"
    />
  </svg>
);
// EyeIcons
export const EyeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={22}
    fill="none"
    viewBox="0 0 20 20"
  >
    <path
      fill="#5A647C"
      d="M19.32 9.75c-.024-.063-.688-1.531-2.157-3.008C15.203 4.79 12.726 3.75 10 3.75c-2.726 0-5.203 1.04-7.164 2.992C1.366 8.22.702 9.688.68 9.75a.617.617 0 0 0 0 .5c.023.063.687 1.531 2.156 3.008C4.796 15.21 7.273 16.25 10 16.25c2.727 0 5.203-1.04 7.164-2.992 1.469-1.477 2.133-2.945 2.157-3.008a.617.617 0 0 0 0-.5ZM10 7.187a2.812 2.812 0 1 1 0 5.625 2.812 2.812 0 0 1 0-5.624Z"
    />
  </svg>
);
// Add Iocn
export const AddIcon = ({ variant }: isAddIcon) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={22}
    fill="none"
    viewBox="0 0 20 20"
  >
    <path
      fill={`${
        variant == `Primary`
          ? `#FDFDFE`
          : variant == `Secondary`
          ? `#051A5F`
          : `#051A5F`
      }`}
      d="M16.875 9.375h-6.25v-6.25a.625.625 0 1 0-1.25 0v6.25h-6.25a.625.625 0 0 0 0 1.25h6.25v6.25a.625.625 0 1 0 1.25 0v-6.25h6.25a.624.624 0 1 0 0-1.25Z"
    />
  </svg>
);
