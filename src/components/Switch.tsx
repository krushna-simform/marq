import React from "react";

export interface OtSwitchProps {
  label?: React.ReactNode;
  checked?: boolean;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
  className?: string;
  name?: string;
  id?: string;
  defaultChecked?: boolean;
}

/**
 * A reusable Switch component that displays a toggle switch with label.
 * Built on the native HTML checkbox input with role="switch".
 *
 * Features:
 * - Controlled and uncontrolled modes
 * - Disabled state support
 * - Event handler for state changes
 * - Accessible with proper ARIA attributes
 * - Optional label
 * - Keyboard navigation support
 *
 * @component
 *
 * @example
 * ```tsx
 * // Controlled
 * <Switch checked={enabled} onChange={setEnabled} label="Notifications" />
 *
 * // Uncontrolled
 * <Switch defaultChecked label="Enable Feature" />
 * ```
 */

const OtSwitch: React.FC<OtSwitchProps> = ({
  label,
  checked,
  disabled = false,
  onChange,
  className,
  name,
  id,
  defaultChecked,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(event.target.checked);
    }
  };

  return (
    <label className={className}>
      <input
        type="checkbox"
        role="switch"
        checked={checked}
        defaultChecked={defaultChecked}
        disabled={disabled}
        onChange={handleChange}
        name={name}
        id={id}
      />
      {label && <span>{label}</span>}
    </label>
  );
};

export default OtSwitch;
