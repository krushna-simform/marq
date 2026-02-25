import type { Meta, StoryObj } from "@storybook/react-vite";
import Accordion from "../components/Accordion";

const meta = {
  title: "Components/Accordion",
  component: Accordion,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    items: {
      description: "Array of accordion items with title and content",
    },
    className: {
      description: "Optional CSS class name",
      control: "text",
    },
  },
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [
      {
        title: "What is React?",
        content: "React is a JavaScript library for building user interfaces.",
      },
      {
        title: "What is Vite?",
        content:
          "Vite is a build tool that aims to provide a faster and leaner development experience.",
      },
      {
        title: "What is Storybook?",
        content:
          "Storybook is a tool for developing UI components in isolation.",
      },
    ],
  },
};

export const Single: Story = {
  args: {
    items: [
      {
        title: "Single Accordion Item",
        content: "This is the only item in this accordion.",
      },
    ],
  },
};

export const WithLongContent: Story = {
  args: {
    items: [
      {
        title: "Short Title",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      },
      {
        title: "Another Section",
        content:
          "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
      },
    ],
  },
};

export const FAQ: Story = {
  args: {
    items: [
      {
        title: "How do I install this package?",
        content:
          "You can install this package using npm: npm install @knadh/oat",
      },
      {
        title: "Is it compatible with TypeScript?",
        content:
          "Yes, this component is built with TypeScript and includes full type definitions.",
      },
      {
        title: "Can I customize the styling?",
        content:
          "Yes, you can pass a className prop to apply custom CSS styles.",
      },
      {
        title: "Is it accessible?",
        content:
          "The accordion uses native HTML details/summary elements which provide built-in keyboard accessibility.",
      },
    ],
  },
};

export const Empty: Story = {
  args: {
    items: [],
  },
};

export const WithCustomClass: Story = {
  args: {
    items: [
      {
        title: "Styled Accordion",
        content: "This accordion has a custom className applied.",
      },
      {
        title: "Another Item",
        content: "You can use the className prop to add custom styles.",
      },
    ],
    className: "custom-accordion-class",
  },
};

export const ManyItems: Story = {
  args: {
    items: [
      { title: "Section 1", content: "Content for section 1" },
      { title: "Section 2", content: "Content for section 2" },
      { title: "Section 3", content: "Content for section 3" },
      { title: "Section 4", content: "Content for section 4" },
      { title: "Section 5", content: "Content for section 5" },
      { title: "Section 6", content: "Content for section 6" },
      { title: "Section 7", content: "Content for section 7" },
      { title: "Section 8", content: "Content for section 8" },
    ],
  },
};

export const WithGroups: Story = {
  args: {
    items: [
      {
        title: "Group 1 - Item 1",
        content: "Content for group 1 item 1",
        groupName: "Group 1",
      },
      {
        title: "Group 1 - Item 2",
        content: "Content for group 1 item 2",
        groupName: "Group 1",
      },
      {
        title: "Group 2 - Item 1",
        content: "Content for group 2 item 1",
        groupName: "Group 2",
      },
      {
        title: "Group 2 - Item 2",
        content: "Content for group 2 item 2",
        groupName: "Group 2",
      },
    ],
  },
};
