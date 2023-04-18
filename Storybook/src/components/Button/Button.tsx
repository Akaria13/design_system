import React from "react";
import { DappsButton, SecondaryButton, TertiaryButton } from "./Button.Style";
interface isProps {
  variant: "Primary" | "Secondary" | "Tertiary";
  children: any;
  className: string;
}
export const Button = ({ children, variant, className }: isProps) => {
  const ReturnButton = (variant: any, children: any, className: string) => {
    switch (variant) {
      case "Primary":
        return <DappsButton className={className}>{children}</DappsButton>;
      case "Secondary":
        return (
          <SecondaryButton className={className}>{children}</SecondaryButton>
        );
      case "Tertiary":
        return (
          <TertiaryButton className={className}>{children}</TertiaryButton>
        );

      default:
        break;
    }
  };

  return <>{ReturnButton(variant, children, className)}</>;
};
