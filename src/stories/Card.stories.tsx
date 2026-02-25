import type { Meta, StoryObj } from "@storybook/react-vite";
import Card from "../components/Card";
import Button from "../components/Button";

const meta = {
  title: "Components/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: "text",
      description: "Optional title displayed in the card header",
    },
    description: {
      control: "text",
      description: "Optional description displayed below the title",
    },
    children: {
      description: "The main content of the card",
    },
    footer: {
      description: "Optional content to render in the card footer",
    },
    className: {
      control: "text",
      description: "Additional CSS class names for styling",
    },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic card with just children
export const Basic: Story = {
  args: {
    children: <p>This is a basic card with just content.</p>,
  },
};

// Card with title
export const WithTitle: Story = {
  args: {
    title: "Card Title",
    children: <p>This card has a title and content.</p>,
  },
};

// Card with title and description
export const WithTitleAndDescription: Story = {
  args: {
    title: "Card Title",
    description: "This is a card description",
    children: <p>This card has both title and description.</p>,
  },
};

// Card with footer
export const WithFooter: Story = {
  args: {
    title: "Action Card",
    children: <p>This card has action buttons in the footer.</p>,
    footer: (
      <div style={{ display: "flex", gap: "8px" }}>
        <Button>Save</Button>
        <Button variant="secondary">Cancel</Button>
      </div>
    ),
  },
};

// Card with all props
export const Complete: Story = {
  args: {
    title: "Complete Card",
    description: "A card with all available features",
    children: <p>This card demonstrates all available props.</p>,
    footer: <Button>Learn More</Button>,
  },
};

// Card with rich content
export const RichContent: Story = {
  args: {
    title: "Server Status",
    description: "Real-time server metrics overview",
    children: (
      <div>
        <p>
          <strong>CPU Usage:</strong> 65%
        </p>
        <p>
          <strong>Memory Usage:</strong> 82%
        </p>
        <p>
          <strong>Disk Usage:</strong> 45%
        </p>
      </div>
    ),
    footer: (
      <Button variant="secondary" styleType="outline">
        View Details
      </Button>
    ),
  },
};

// Card with long content
export const LongContent: Story = {
  args: {
    title: "Article Card",
    description: "A comprehensive example",
    children: (
      <div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <p>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
    ),
    footer: (
      <div style={{ display: "flex", gap: "8px", width: "100%" }}>
        <Button styleType="outline">Cancel</Button>
        <Button>Read More</Button>
      </div>
    ),
  },
};

// Product card example
export const ProductCard: Story = {
  args: {
    title: "Premium Plan",
    description: "$29/month",
    children: (
      <div>
        <ul style={{ listStyle: "none", padding: 0, margin: "16px 0" }}>
          <li>✓ Unlimited storage</li>
          <li>✓ Priority support</li>
          <li>✓ Advanced analytics</li>
          <li>✓ Team collaboration</li>
        </ul>
      </div>
    ),
    footer: <Button>Get Started</Button>,
  },
};

// User profile card
export const ProfileCard: Story = {
  args: {
    title: "John Doe",
    description: "Senior Developer",
    children: (
      <div>
        <p>
          <strong>Email:</strong> john@example.com
        </p>
        <p>
          <strong>Location:</strong> San Francisco, CA
        </p>
      </div>
    ),
    footer: (
      <Button variant="secondary" styleType="outline">
        View Profile
      </Button>
    ),
  },
};

// Card without footer
export const NoFooter: Story = {
  args: {
    title: "Information Card",
    description: "No footer section",
    children: (
      <p>This card demonstrates a card without footer actions or links.</p>
    ),
  },
};

// Card with custom class
export const WithCustomClass: Story = {
  args: {
    title: "Styled Card",
    children: <p>This card has custom styling applied.</p>,
    className: "custom-card-class",
  },
};

// Multiple cards grid showcase
export const CardGrid: Story = {
  render: () => (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "16px",
        width: "100%",
        maxWidth: "1200px",
      }}
    >
      <Card
        title="Feature One"
        description="Description"
        footer={<Button styleType="ghost">Learn More</Button>}
      >
        <p>First feature description and details.</p>
      </Card>
      <Card
        title="Feature Two"
        description="Description"
        footer={<Button styleType="ghost">Learn More</Button>}
      >
        <p>Second feature description and details.</p>
      </Card>
      <Card
        title="Feature Three"
        description="Description"
        footer={<Button styleType="ghost">Learn More</Button>}
      >
        <p>Third feature description and details.</p>
      </Card>
    </div>
  ),
};

// Minimal card
export const Minimal: Story = {
  args: {
    children: <p>A minimal card with just content, no title or footer.</p>,
  },
};

// Empty footer
export const EmptyFooter: Story = {
  args: {
    title: "Card with Empty Footer",
    children: <p>This card has a footer prop but it's empty.</p>,
    footer: null,
  },
};

// Card with nested components
export const NestedComponents: Story = {
  args: {
    title: "Interactive Card",
    description: "Contains interactive elements",
    children: (
      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        <input
          type="text"
          placeholder="Enter your name"
          style={{
            padding: "8px",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />
        <textarea
          placeholder="Enter your message"
          style={{
            padding: "8px",
            border: "1px solid #ccc",
            borderRadius: "4px",
            minHeight: "100px",
          }}
        />
      </div>
    ),
    footer: (
      <div style={{ display: "flex", gap: "8px", width: "100%" }}>
        <Button variant="secondary" styleType="outline">
          Clear
        </Button>
        <Button>Submit</Button>
      </div>
    ),
  },
};
