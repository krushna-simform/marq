import type { Meta, StoryObj } from "@storybook/react-vite";
import Badge, { type BadgeProps } from "../components/Badge";

const meta: Meta<BadgeProps> = {
  title: "Components/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: { type: "select" },
      options: ["secondary", "outline", "success", "warning", "danger"],
      description: "The badge style variant",
    },
    children: {
      control: { type: "text" },
      description: "Content displayed inside the badge",
    },
    className: {
      control: { type: "text" },
      description: "Optional CSS class name for custom styling",
    },
  },
};

export default meta;

type Story = StoryObj<BadgeProps>;

// Simple default badge
export const Default: Story = {
  args: { children: "Badge" },
};

export const Secondary: Story = {
  args: { type: "secondary", children: "Secondary" },
};

export const Outline: Story = {
  args: { type: "outline", children: "Outline" },
};

export const Success: Story = {
  args: { type: "success", children: "Success" },
};

export const Warning: Story = {
  args: { type: "warning", children: "Warning" },
};

export const Danger: Story = {
  args: { type: "danger", children: "Danger" },
};

export const WithCustomClass: Story = {
  args: { type: "success", children: "Active", className: "uppercase" },
};

export const LongText: Story = {
  args: { type: "warning", children: "This is a longer badge text" },
};

// Using render function for complex layouts
export const StatusBadges: Story = {
  render: () => (
    <div className="flex gap-2 flex-wrap">
      <Badge>Default</Badge>
      <Badge type="secondary">Inactive</Badge>
      <Badge type="success">Active</Badge>
      <Badge type="warning">Pending</Badge>
      <Badge type="danger">Error</Badge>
      <Badge type="outline">Draft</Badge>
    </div>
  ),
};

export const Numbers: Story = {
  render: () => (
    <div className="flex gap-2">
      <Badge type="danger">5</Badge>
      <Badge type="warning">12</Badge>
      <Badge type="success">99+</Badge>
    </div>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <div className="flex gap-2 flex-wrap">
      <Badge type="success">✓ Verified</Badge>
      <Badge type="danger">✕ Failed</Badge>
      <Badge type="warning">⚠ Warning</Badge>
      <Badge type="secondary">★ Featured</Badge>
    </div>
  ),
};
