import type { Meta, StoryObj } from "@storybook/react-vite";
import Button from "../components/Button";

const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "danger"],
      description: "Defines the color variant of the button",
    },
    styleType: {
      control: "select",
      options: ["solid", "outline", "ghost"],
      description: "Defines the style type of the button",
    },
    children: {
      control: "text",
      description: "The content inside the button",
    },
    className: {
      control: "text",
      description: "Additional CSS class names for styling",
    },
    disabled: {
      control: "boolean",
      description: "Disables the button",
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default variants - Solid
export const Primary: Story = {
  args: {
    children: "Primary Button",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Secondary Button",
  },
};

export const Danger: Story = {
  args: {
    variant: "danger",
    children: "Danger Button",
  },
};

// Outline style variants
export const PrimaryOutline: Story = {
  args: {
    variant: "primary",
    styleType: "outline",
    children: "Primary Outline",
  },
};

export const SecondaryOutline: Story = {
  args: {
    variant: "secondary",
    styleType: "outline",
    children: "Secondary Outline",
  },
};

export const DangerOutline: Story = {
  args: {
    variant: "danger",
    styleType: "outline",
    children: "Danger Outline",
  },
};

// Ghost style variants
export const PrimaryGhost: Story = {
  args: {
    variant: "primary",
    styleType: "ghost",
    children: "Primary Ghost",
  },
};

export const SecondaryGhost: Story = {
  args: {
    variant: "secondary",
    styleType: "ghost",
    children: "Secondary Ghost",
  },
};

export const DangerGhost: Story = {
  args: {
    variant: "danger",
    styleType: "ghost",
    children: "Danger Ghost",
  },
};

// Disabled states
export const Disabled: Story = {
  args: {
    children: "Disabled Button",
    disabled: true,
  },
};

export const DisabledOutline: Story = {
  args: {
    variant: "primary",
    styleType: "outline",
    children: "Disabled Outline",
    disabled: true,
  },
};

export const DisabledGhost: Story = {
  args: {
    variant: "danger",
    styleType: "ghost",
    children: "Disabled Ghost",
    disabled: true,
  },
};

// With custom class
export const WithCustomClass: Story = {
  args: {
    variant: "primary",
    children: "Custom Styled Button",
    className: "custom-button-class",
  },
};

// Different content types
export const LongText: Story = {
  args: {
    variant: "secondary",
    children: "This is a button with longer text content",
  },
};

export const WithEmoji: Story = {
  args: {
    variant: "primary",
    children: "🚀 Launch",
  },
};

export const IconButton: Story = {
  args: {
    variant: "primary",
    styleType: "outline",
    children: "⚙️",
  },
};

// Showcase all variants
export const AllVariants: Story = {
  args: { children: "" },
  render: () => (
    <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="danger">Danger</Button>
    </div>
  ),
};

// Showcase all styles for primary variant
export const AllStyles: Story = {
  args: { children: "" },
  render: () => (
    <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
      <Button variant="primary" styleType="solid">
        Solid
      </Button>
      <Button variant="primary" styleType="outline">
        Outline
      </Button>
      <Button variant="primary" styleType="ghost">
        Ghost
      </Button>
    </div>
  ),
};

// Complete showcase
export const ButtonMatrix: Story = {
  args: { children: "" },
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
        <strong style={{ width: "100px" }}>Solid:</strong>
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="danger">Danger</Button>
      </div>
      <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
        <strong style={{ width: "100px" }}>Outline:</strong>
        <Button variant="primary" styleType="outline">
          Primary
        </Button>
        <Button variant="secondary" styleType="outline">
          Secondary
        </Button>
        <Button variant="danger" styleType="outline">
          Danger
        </Button>
      </div>
      <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
        <strong style={{ width: "100px" }}>Ghost:</strong>
        <Button variant="primary" styleType="ghost">
          Primary
        </Button>
        <Button variant="secondary" styleType="ghost">
          Secondary
        </Button>
        <Button variant="danger" styleType="ghost">
          Danger
        </Button>
      </div>
    </div>
  ),
};

// Interactive example
export const ClickHandler: Story = {
  args: {
    variant: "primary",
    children: "Click Me",
    onClick: () => alert("Button clicked!"),
  },
};
