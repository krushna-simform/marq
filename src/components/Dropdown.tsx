import React, { useId } from "react";

export type DropdownItem =
  | {
      type?: "item";
      label: React.ReactNode;
      onClick?: () => void;
      disabled?: boolean;
    }
  | {
      type: "divider";
    };

export interface OtDropdownProps {
  label?: React.ReactNode;
  items: DropdownItem[];
  variant?: string;
  showIcon?: boolean;
  className?: string;
}

const OtDropdown: React.FC<OtDropdownProps> = ({
  label = "Options",
  items,
  variant = "outline",
  showIcon = true,
  className,
}) => {
  const menuId = useId();

  return React.createElement(
    "ot-dropdown",
    { className },
    React.createElement(
      "button",
      { popoverTarget: menuId, className: variant },
      label,
      showIcon &&
        React.createElement(
          "svg",
          {
            width: 16,
            height: 16,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: 2,
            style: { marginLeft: 6 },
          },
          React.createElement("path", { d: "m6 9 6 6 6-6" }),
        ),
    ),
    React.createElement(
      "menu",
      {
        popover: "auto",
        id: menuId,
      },
      items.map((item, index) => {
        if (item.type === "divider") {
          return React.createElement("hr", { key: index });
        }

        return React.createElement(
          "button",
          {
            key: index,
            role: "menuitem",
            onClick: item.onClick,
            disabled: item.disabled,
          },
          item.label,
        );
      }),
    ),
  );
};

export default OtDropdown;
