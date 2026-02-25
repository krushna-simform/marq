import type { Meta, StoryObj } from "@storybook/react-vite";
import Progress from "../components/Progress";

const meta = {
  title: "Components/Progress",
  component: Progress,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ minWidth: "300px" }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    value: {
      control: { type: "range", min: 0, max: 100, step: 1 },
      description: "The current value of the meter",
    },
    max: {
      control: "number",
      description: "The maximum value (default: 100)",
    },
    className: {
      control: "text",
      description: "Additional CSS classes",
    },
  },
} satisfies Meta<typeof Progress>;

export default meta;
type Story = StoryObj<typeof meta>;

// Optimal state (green) - value is in the optimal range (above 70%)
export const Optimal: Story = {
  args: {
    value: 80,
    max: 100,
  },
};

// Minimum value (empty)
export const Empty: Story = {
  args: {
    value: 0,
    max: 100,
  },
};

// Maximum value (full)
export const Full: Story = {
  args: {
    value: 100,
    max: 100,
  },
};

// Multiple meters comparison
export const MultipleMeters: Story = {
  args: {
    value: 50,
    max: 100,
  },
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        minWidth: "300px",
      }}
    >
      <div>
        <div>Optimal (Green) - 80%</div>
        <Progress value={80} max={100} />
      </div>
      <div>
        <div>Suboptimal (Yellow) - 50%</div>
        <Progress value={50} max={100} />
      </div>
      <div>
        <div>Critical (Red) - 20%</div>
        <Progress value={20} max={100} />
      </div>
    </div>
  ),
};

// System dashboard
export const SystemDashboard: Story = {
  args: {
    value: 50,
    max: 100,
  },
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        minWidth: "300px",
      }}
    >
      <div>
        <div>CPU Usage (%)</div>
        <Progress value={65} max={100} />
      </div>
      <div>
        <div>Memory (GB) - 12.5/16</div>
        <Progress value={12.5} max={16} />
      </div>
      <div>
        <div>Disk Space (GB) - 450/1000</div>
        <Progress value={450} max={1000} />
      </div>
      <div>
        <div>Temperature (°C)</div>
        <Progress value={72} max={100} />
      </div>
    </div>
  ),
};
