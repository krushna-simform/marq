import type { Meta, StoryObj } from "@storybook/react-vite";
import Spinner from "../components/Spinner";

const meta = {
  title: "Components/Spinner",
  component: Spinner,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "radio",
      options: ["small", "large", undefined],
      description: "Size of the spinner (small, large, or default)",
    },
  },
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default spinner
export const Default: Story = {
  args: {},
};

// Small spinner
export const Small: Story = {
  args: {
    size: "small",
  },
};

// Large spinner
export const Large: Story = {
  args: {
    size: "large",
  },
};

// Loading button example
export const LoadingButton: Story = {
  args: {
    size: "small",
  },
  render: (args) => (
    <button
      style={{
        padding: "8px 16px",
        display: "flex",
        alignItems: "center",
        gap: "8px",
      }}
      disabled
    >
      <Spinner {...args} />
      <span>Loading...</span>
    </button>
  ),
};

// Page loading example
export const PageLoading: Story = {
  args: {
    size: "large",
  },
  render: (args) => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "16px",
        padding: "40px",
      }}
    >
      <Spinner {...args} />
      <p style={{ color: "#666" }}>Loading content...</p>
    </div>
  ),
};

// Inline loading example
export const InlineLoading: Story = {
  args: {
    size: "small",
  },
  render: (args) => (
    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
      <span>Processing your request</span>
      <Spinner {...args} />
    </div>
  ),
};

// Card loading example
export const CardLoading: Story = {
  args: {},
  render: (args) => (
    <div
      style={{
        width: "300px",
        padding: "24px",
        border: "1px solid #e5e7eb",
        borderRadius: "8px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "16px",
      }}
    >
      <Spinner {...args} />
      <p style={{ margin: 0, color: "#666" }}>Loading data...</p>
    </div>
  ),
};

// Multiple spinners comparison
export const AllSizes: Story = {
  args: {},
  render: () => (
    <div
      style={{
        display: "flex",
        gap: "32px",
        alignItems: "center",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <Spinner size="small" />
        <p style={{ marginTop: "8px", fontSize: "12px" }}>Small</p>
      </div>
      <div style={{ textAlign: "center" }}>
        <Spinner />
        <p style={{ marginTop: "8px", fontSize: "12px" }}>Default</p>
      </div>
      <div style={{ textAlign: "center" }}>
        <Spinner size="large" />
        <p style={{ marginTop: "8px", fontSize: "12px" }}>Large</p>
      </div>
    </div>
  ),
};

// Full page overlay example
export const OverlayLoading: Story = {
  args: {
    size: "large",
  },
  render: (args) => (
    <div
      style={{
        position: "relative",
        width: "400px",
        height: "300px",
        border: "1px solid #e5e7eb",
        borderRadius: "8px",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "16px",
        }}
      >
        <Spinner {...args} />
        <p style={{ margin: 0, color: "#666" }}>Please wait...</p>
      </div>
    </div>
  ),
};
