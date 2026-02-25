import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import OtSwitch from "../components/Switch";

const meta = {
  title: "Components/Switch",
  component: OtSwitch,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: "text",
      description: "Label text for the switch",
    },
    checked: {
      control: "boolean",
      description: "Whether the switch is checked (controlled mode)",
    },
    disabled: {
      control: "boolean",
      description: "Whether the switch is disabled",
    },
    defaultChecked: {
      control: "boolean",
      description: "Default checked state (uncontrolled mode)",
    },
    className: {
      control: "text",
      description: "Additional CSS classes",
    },
    name: {
      control: "text",
      description: "Name attribute for the input",
    },
    id: {
      control: "text",
      description: "ID for the input element",
    },
  },
} satisfies Meta<typeof OtSwitch>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default switch
export const Default: Story = {
  args: {
    label: "Notifications",
  },
};

// Checked switch
export const Checked: Story = {
  args: {
    label: "Notifications",
    defaultChecked: true,
  },
};

// Disabled switch
export const Disabled: Story = {
  args: {
    label: "Notifications",
    disabled: true,
  },
};

// Disabled and checked
export const DisabledChecked: Story = {
  args: {
    label: "Notifications",
    defaultChecked: true,
    disabled: true,
  },
};

// Without label
export const WithoutLabel: Story = {
  args: {
    defaultChecked: true,
  },
};

// Interactive controlled switch
export const Interactive: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <OtSwitch
          label="Enable Notifications"
          checked={checked}
          onChange={setChecked}
        />
        <p style={{ margin: 0, color: "#666" }}>
          Status: {checked ? "ON" : "OFF"}
        </p>
      </div>
    );
  },
};

// Settings panel example
export const SettingsPanel: Story = {
  render: () => {
    const [notifications, setNotifications] = useState(true);
    const [darkMode, setDarkMode] = useState(false);
    const [autoSave, setAutoSave] = useState(true);

    return (
      <div
        style={{
          width: "300px",
          padding: "20px",
          border: "1px solid #e5e7eb",
          borderRadius: "8px",
        }}
      >
        <h3 style={{ margin: "0 0 16px 0" }}>Settings</h3>
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <OtSwitch
            label="Notifications"
            checked={notifications}
            onChange={setNotifications}
          />
          <OtSwitch
            label="Dark Mode"
            checked={darkMode}
            onChange={setDarkMode}
          />
          <OtSwitch
            label="Auto Save"
            checked={autoSave}
            onChange={setAutoSave}
          />
        </div>
      </div>
    );
  },
};

// Form with switches
export const FormExample: Story = {
  render: () => {
    const [preferences, setPreferences] = useState({
      emailNotifications: true,
      pushNotifications: false,
      newsletter: false,
      updates: true,
    });

    const handleChange =
      (key: keyof typeof preferences) => (checked: boolean) => {
        setPreferences((prev) => ({ ...prev, [key]: checked }));
      };

    return (
      <div
        style={{
          width: "350px",
          padding: "24px",
          border: "1px solid #e5e7eb",
          borderRadius: "8px",
        }}
      >
        <h3 style={{ margin: "0 0 8px 0" }}>Notification Preferences</h3>
        <p style={{ margin: "0 0 20px 0", color: "#666", fontSize: "14px" }}>
          Choose what you want to be notified about
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <OtSwitch
            label="Email Notifications"
            checked={preferences.emailNotifications}
            onChange={handleChange("emailNotifications")}
          />
          <OtSwitch
            label="Push Notifications"
            checked={preferences.pushNotifications}
            onChange={handleChange("pushNotifications")}
          />
          <OtSwitch
            label="Newsletter"
            checked={preferences.newsletter}
            onChange={handleChange("newsletter")}
          />
          <OtSwitch
            label="Product Updates"
            checked={preferences.updates}
            onChange={handleChange("updates")}
          />
        </div>
      </div>
    );
  },
};

// All states comparison
export const AllStates: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <OtSwitch label="Unchecked" defaultChecked={false} />
      <OtSwitch label="Checked" defaultChecked={true} />
      <OtSwitch label="Disabled Unchecked" disabled defaultChecked={false} />
      <OtSwitch label="Disabled Checked" disabled defaultChecked={true} />
    </div>
  ),
};
