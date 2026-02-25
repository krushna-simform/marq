export interface BadgeProps {
  type?: "secondary" | "outline" | "success" | "warning" | "danger";
  children: React.ReactNode;
  className?: string;
}

/**
 * Props for the Badge component.
 * @typedef {Object} BadgeProps
 * @property {"secondary" | "outline" | "success" | "warning" | "danger"} [type] - Optional. Determines the badge style. Default is undefined.
 * @property {React.ReactNode} children - The content to be displayed inside the badge.
 * @property {string} [className] - Optional. Additional CSS class names for custom styling.
 */

/**
 * A simple Badge component that displays a small label or tag with different styles.
 * Supports predefined types like "secondary", "outline", "success", "warning", and "danger".
 *
 * @param {BadgeProps} props - The props for the Badge component.
 * @returns {JSX.Element} The rendered badge element.
 *
 * @example
 * <Badge type="success">Active</Badge>
 * <Badge type="warning" className="uppercase">Pending</Badge>
 * <Badge>Default</Badge>
 */

const Badge = ({ type, children, className }: BadgeProps) => {
  return <span className={`badge ${type} ${className}`}>{children}</span>;
};

export default Badge;
