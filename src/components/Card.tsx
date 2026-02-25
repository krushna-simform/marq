interface CardProps {
  title?: string;
  description?: string;
  children?: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
}

/**
 * Props for the Card component.
 * @typedef {Object} CardProps
 * @property {string} [title] - Optional. The title of the card displayed in the header.
 * @property {string} [description] - Optional. A description or subtitle displayed below the title.
 * @property {React.ReactNode} children - The main content of the card.
 * @property {React.ReactNode} [footer] - Optional. Content to render in the card footer.
 * @property {string} [className] - Optional. Additional CSS class names for styling the card container.
 */

/**
 * A reusable Card component that renders a header, content, and optional footer.
 *
 * @param {CardProps} props - Props for the Card component.
 * @returns {JSX.Element} The rendered card element.
 *
 * @example
 * <Card
 *   title="Server Status"
 *   description="Overview of all server metrics"
 *   footer={<button>View Details</button>}
 * >
 *   <p>CPU Usage: 65%</p>
 *   <p>Memory Usage: 82%</p>
 * </Card>
 */

const Card = ({
  title,
  description,
  children,
  footer,
  className,
}: CardProps) => {
  return (
    <article className={`card ${className}`}>
      <header>
        {title && <h3>{title}</h3>}
        {description && <p>{description}</p>}
      </header>
      {children}
      {footer && <footer className="flex gap-2 mt-4">{footer}</footer>}
    </article>
  );
};

export default Card;
