interface AccordionItem {
  title: string;
  content: string;
  groupName?: string;
}

interface AccordionProps {
  items: Array<AccordionItem>;
  className?: string;
}

/**
 * Represents a single accordion item.
 * @typedef {Object} AccordionItem
 * @property {string} title - The title displayed on the accordion summary.
 * @property {string} content - The content displayed when the accordion is expanded.
 * @property {string} [groupName] - Optional. A group name used to logically group accordion items (not used by default in HTML, but can be used for custom behavior).
 */

/**
 * Props for the Accordion component.
 * @typedef {Object} AccordionProps
 * @property {AccordionItem[]} items - Array of accordion items to display.
 * @property {string} [className] - Optional. TailwindCSS or custom CSS class names to style the container.
 */

/**
 * A simple Accordion component that renders a list of expandable/collapsible items.
 * Each item is rendered using the HTML `<details>` and `<summary>` elements.
 *
 * @param {AccordionProps} props - The props for the Accordion component.
 * @returns {JSX.Element} The rendered Accordion component.
 *
 * @example
 * const items = [
 *   { title: "Section 1", content: "Content for section 1" },
 *   { title: "Section 2", content: "Content for section 2", groupName: "groupA" },
 * ];
 *
 * <Accordion items={items} className="space-y-2" />
 */

const Accordion = ({ items, className }: AccordionProps) => {
  return (
    <div className={className}>
      {items.map((item) => {
        return (
          <details key={item.title} name={item.groupName}>
            <summary>{item.title}</summary>
            <p>{item.content}</p>
          </details>
        );
      })}
    </div>
  );
};

export default Accordion;
