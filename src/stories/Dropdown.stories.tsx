import type { Meta, StoryObj } from "@storybook/react-vite";
import OtDropdown from "../components/Dropdown";

const meta = {
  title: "Components/Dropdown",
  component: OtDropdown,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: "text",
      description: "The label displayed on the dropdown button",
    },
    variant: {
      control: "text",
      description: "The button variant/style class",
    },
    showIcon: {
      control: "boolean",
      description: "Whether to show the dropdown arrow icon",
    },
    className: {
      control: "text",
      description: "Additional CSS classes for the wrapper div",
    },
    items: {
      control: "object",
      description: "Array of dropdown items (menu items or dividers)",
    },
  },
} satisfies Meta<typeof OtDropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic dropdown
export const Default: Story = {
  args: {
    label: "Options",
    items: [
      { label: "Edit", onClick: () => alert("Edit clicked") },
      { label: "Duplicate", onClick: () => alert("Duplicate clicked") },
      { label: "Delete", onClick: () => alert("Delete clicked") },
    ],
  },
};

// With dividers
export const WithDividers: Story = {
  args: {
    label: "File Menu",
    items: [
      { label: "New File", onClick: () => alert("New File") },
      { label: "Open File", onClick: () => alert("Open File") },
      { type: "divider" },
      { label: "Save", onClick: () => alert("Save") },
      { label: "Save As", onClick: () => alert("Save As") },
      { type: "divider" },
      { label: "Close", onClick: () => alert("Close") },
    ],
  },
};

// With disabled items
export const WithDisabledItems: Story = {
  args: {
    label: "Actions",
    items: [
      { label: "Copy", onClick: () => alert("Copy") },
      { label: "Paste", onClick: () => alert("Paste"), disabled: true },
      { label: "Cut", onClick: () => alert("Cut"), disabled: true },
      { type: "divider" },
      { label: "Select All", onClick: () => alert("Select All") },
    ],
  },
};

// Different variants
export const PrimaryVariant: Story = {
  args: {
    label: "Primary Menu",
    variant: "primary",
    items: [
      { label: "Option 1", onClick: () => alert("Option 1") },
      { label: "Option 2", onClick: () => alert("Option 2") },
      { label: "Option 3", onClick: () => alert("Option 3") },
    ],
  },
};

export const SecondaryVariant: Story = {
  args: {
    label: "Secondary Menu",
    variant: "secondary",
    items: [
      { label: "Option 1", onClick: () => alert("Option 1") },
      { label: "Option 2", onClick: () => alert("Option 2") },
      { label: "Option 3", onClick: () => alert("Option 3") },
    ],
  },
};

// Without icon
export const WithoutIcon: Story = {
  args: {
    label: "Menu",
    showIcon: false,
    items: [
      { label: "Home", onClick: () => alert("Home") },
      { label: "About", onClick: () => alert("About") },
      { label: "Contact", onClick: () => alert("Contact") },
    ],
  },
};

// With custom className
export const WithCustomClass: Story = {
  args: {
    label: "Custom Dropdown",
    className: "custom-dropdown-wrapper",
    items: [
      { label: "Item 1", onClick: () => alert("Item 1") },
      { label: "Item 2", onClick: () => alert("Item 2") },
    ],
  },
};

// Long menu
export const LongMenu: Story = {
  args: {
    label: "Many Options",
    items: [
      { label: "Option 1", onClick: () => alert("Option 1") },
      { label: "Option 2", onClick: () => alert("Option 2") },
      { label: "Option 3", onClick: () => alert("Option 3") },
      { type: "divider" },
      { label: "Option 4", onClick: () => alert("Option 4") },
      { label: "Option 5", onClick: () => alert("Option 5") },
      { label: "Option 6", onClick: () => alert("Option 6") },
      { label: "Option 7", onClick: () => alert("Option 7") },
      { type: "divider" },
      { label: "Option 8", onClick: () => alert("Option 8") },
      { label: "Option 9", onClick: () => alert("Option 9") },
      { label: "Option 10", onClick: () => alert("Option 10") },
    ],
  },
};

// User profile menu
export const UserProfileMenu: Story = {
  args: {
    label: "John Doe",
    items: [
      { label: "Profile Settings", onClick: () => alert("Profile Settings") },
      { label: "Account", onClick: () => alert("Account") },
      { type: "divider" },
      { label: "Help Center", onClick: () => alert("Help Center") },
      { label: "Keyboard Shortcuts", onClick: () => alert("Shortcuts") },
      { type: "divider" },
      { label: "Logout", onClick: () => alert("Logout") },
    ],
  },
};

// Context menu
export const ContextMenu: Story = {
  args: {
    label: "Right Click Menu",
    variant: "outline",
    items: [
      { label: "Cut", onClick: () => alert("Cut") },
      { label: "Copy", onClick: () => alert("Copy") },
      { label: "Paste", onClick: () => alert("Paste") },
      { type: "divider" },
      { label: "Rename", onClick: () => alert("Rename") },
      { label: "Delete", onClick: () => alert("Delete") },
      { type: "divider" },
      { label: "Properties", onClick: () => alert("Properties") },
    ],
  },
};

// Share menu
export const ShareMenu: Story = {
  args: {
    label: "Share",
    variant: "primary",
    items: [
      { label: "Copy Link", onClick: () => alert("Link Copied") },
      { type: "divider" },
      { label: "Share via Email", onClick: () => alert("Email Share") },
      { label: "Share on Twitter", onClick: () => alert("Twitter Share") },
      { label: "Share on Facebook", onClick: () => alert("Facebook Share") },
      { label: "Share on LinkedIn", onClick: () => alert("LinkedIn Share") },
    ],
  },
};

// All items disabled
export const AllDisabled: Story = {
  args: {
    label: "Unavailable",
    items: [
      { label: "Disabled 1", onClick: () => {}, disabled: true },
      { label: "Disabled 2", onClick: () => {}, disabled: true },
      { label: "Disabled 3", onClick: () => {}, disabled: true },
    ],
  },
};
