import React from "react";

type ButtonVariant = "primary" | "secondary" | "danger";
type ButtonStyle = "solid" | "outline" | "ghost";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  styleType?: ButtonStyle;
  children: React.ReactNode;
  className?: string;
}

/**
 * Types of button variants.
 * @typedef {"primary" | "secondary" | "danger"} ButtonVariant
 */

/**
 * Types of button styles.
 * @typedef {"solid" | "outline" | "ghost"} ButtonStyle
 */

/**
 * Props for the reusable Button component.
 * @typedef {Object} ButtonProps
 * @property {ButtonVariant} [variant] - Optional. Defines the color variant of the button. Default is "primary".
 * @property {ButtonStyle} [styleType] - Optional. Defines the style type of the button. Default is "solid".
 * @property {React.ReactNode} children - The content inside the button.
 * @property {string} [className] - Optional. Additional CSS class names for styling.
 * @property {React.ButtonHTMLAttributes<HTMLButtonElement>} [rest] - All other standard HTML button attributes.
 */

/**
 * A reusable Button component that supports variants and style types.
 * The button adds `data-variant` and `data-style` attributes for CSS targeting.
 *
 * @param {ButtonProps} props - The props for the Button component.
 * @returns {JSX.Element} The rendered button element.
 *
 * @example
 * <Button>Primary</Button>
 * <Button variant="secondary">Secondary</Button>
 * <Button variant="danger" styleType="outline">Danger Outline</Button>
 * <Button styleType="ghost" disabled>Ghost Disabled</Button>
 */

const Button = ({
  variant = "primary",
  styleType = "solid",
  children,
  className,
  ...rest
}: ButtonProps) => {
  const dataAttrs = {
    "data-variant": variant,
    "data-style": styleType,
  };

  return (
    <button {...rest} {...dataAttrs} className={className}>
      {children}
    </button>
  );
};

export default Button;
