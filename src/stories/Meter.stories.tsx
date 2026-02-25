import type { Meta, StoryObj } from "@storybook/react-vite";
import Meter from "../components/Meter";

const meta = {
  title: "Components/Meter",
  component: Meter,
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
} satisfies Meta<typeof Meter>;

export default meta;
type Story = StoryObj<typeof meta>;

// Optimal state (green) - value is in the optimal range (above 70%)
export const Optimal: Story = {
  args: {
    value: 80,
    max: 100,
  },
};

// Suboptimal state (yellow) - value is between 30% and 70%
export const Suboptimal: Story = {
  args: {
    value: 50,
    max: 100,
  },
};

// Critical state (red) - value is below 30%
export const Critical: Story = {
  args: {
    value: 20,
    max: 100,
  },
};

// With label
export const WithCustomClass: Story = {
  args: {
    value: 75,
    max: 100,
    className: "custom-meter",
  },
};

// Disk usage (0-100 scale)
export const DiskUsage: Story = {
  args: {
    value: 65,
    max: 100,
  },
};

// Battery level
export const BatteryLevel: Story = {
  args: {
    value: 45,
    max: 100,
  },
};

// Memory usage (16GB)
export const MemoryUsage: Story = {
  args: {
    value: 8.5,
    max: 16,
  },
};

// CPU temperature
export const CPUTemperature: Story = {
  args: {
    value: 75,
    max: 100,
  },
};

// Download progress (500MB)
export const DownloadProgress: Story = {
  args: {
    value: 350,
    max: 500,
  },
};

// Score/Rating (out of 10)
export const Score: Story = {
  args: {
    value: 8.5,
    max: 10,
  },
};

// Network signal strength (5 bars)
export const SignalStrength: Story = {
  args: {
    value: 4,
    max: 5,
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
        <Meter value={80} max={100} />
      </div>
      <div>
        <div>Suboptimal (Yellow) - 50%</div>
        <Meter value={50} max={100} />
      </div>
      <div>
        <div>Critical (Red) - 20%</div>
        <Meter value={20} max={100} />
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
        <Meter value={65} max={100} />
      </div>
      <div>
        <div>Memory (GB) - 12.5/16</div>
        <Meter value={12.5} max={16} />
      </div>
      <div>
        <div>Disk Space (GB) - 450/1000</div>
        <Meter value={450} max={1000} />
      </div>
      <div>
        <div>Temperature (°C)</div>
        <Meter value={72} max={100} />
      </div>
    </div>
  ),
};
