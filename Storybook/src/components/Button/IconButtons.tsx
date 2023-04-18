import React from "react";
import { DappsButton, DappsIconButton, SecondaryButton, SecondaryIconButton, TertiaryButton, TertiaryIconButton } from "./Button.Style";
interface isProps {
  variant: "Primary" | "Secondary" | "Tertiary";
  children: any;
  className: string;
}
export const IconButton = ({ children, variant, className }: isProps) => {
  const ReturnButton = (variant: any, children: any, className: string) => {
    switch (variant) {
      case "Primary":
        return <DappsIconButton className={className}>{children}</DappsIconButton>;
      case "Secondary":
        return (
          <SecondaryIconButton className={className}>{children}</SecondaryIconButton>
        );
      case "Tertiary":
        return (
          <TertiaryIconButton className={className}>{children}</TertiaryIconButton>
        );

      default:
        break;
    }
  };

  return <>{ReturnButton(variant, children, className)}</>;
};
