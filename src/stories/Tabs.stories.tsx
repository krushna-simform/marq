import type { Meta, StoryObj } from "@storybook/react-vite";
import Tabs from "../components/Tabs";

const meta = {
  title: "Components/Tabs",
  component: Tabs,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    items: {
      control: "object",
      description: "Array of tab items, each with a title and content",
    },
  },
} satisfies Meta<typeof Tabs>;

export default meta;

export const Default: StoryObj<typeof meta> = {
  args: {
    items: [
      { label: "Tab 1", content: "Content for Tab 1" },
      { label: "Tab 2", content: "Content for Tab 2" },
      { label: "Tab 3", content: "Content for Tab 3" },
    ],
  },
};

export const WithCustomClassName: StoryObj<typeof meta> = {
  args: {
    items: [
      { label: "First", content: "Content for the first tab" },
      { label: "Second", content: "Content for the second tab" },
    ],
    className: "border-1 border-blue-500 rounded-sm p-2",
  },
};

export const ManyTabs: StoryObj<typeof meta> = {
  args: {
    items: Array.from({ length: 10 }, (_, i) => ({
      label: `Tab ${i + 1}`,
      content: `Content for Tab ${i + 1}`,
    })),
  },
};
