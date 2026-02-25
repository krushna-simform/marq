import { useState } from "react";

interface TabItem {
  label: string;
  content: React.ReactNode;
}

interface TabsProps {
  items: Array<TabItem>;
  className?: string;
}

/**
 * A simple accessible tab component built using
 * WAI-ARIA tab roles.
 *
 * Features:
 * - `role="tablist"` container
 * - `role="tab"` buttons
 * - `role="tabpanel"` content area
 * - Proper `aria-selected`, `aria-controls`, and `aria-labelledby` bindings
 *
 * The component internally manages active tab state.
 *
 * @example
 * ```tsx
 * <TabbedView
 *   items={[
 *     { label: "Overview", content: <div>Overview content</div> },
 *     { label: "Details", content: <div>Details content</div> },
 *     { label: "Settings", content: <div>Settings content</div> }
 *   ]}
 * />
 * ```
 *
 * @param items - Array of tab objects containing labels and content.
 * @param className - Optional CSS classes applied to the root `<article>` element.
 *
 * @returns An accessible tabbed interface component.
 */

const Tabs = ({ items, className }: TabsProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className={className}>
      <div role="tablist">
        {items.map((item, index) => {
          const isActive = activeIndex === index;

          return (
            <button
              key={item.label}
              aria-selected={isActive}
              aria-controls={`tabpanel-${index}`}
              id={`tab-${index}`}
              role="tab"
              onClick={() => setActiveIndex(index)}
            >
              {item.label}
            </button>
          );
        })}
      </div>

      <div
        role="tabpanel"
        id={`tabpanel-${activeIndex}`}
        aria-labelledby={`tab-${activeIndex}`}
      >
        {items[activeIndex].content}
      </div>
    </div>
  );
};

export default Tabs;
