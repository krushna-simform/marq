import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import Dialog from "../components/Dialog";
import Button from "../components/Button";

const DialogStoryWrapper = (
  props: Omit<React.ComponentProps<typeof Dialog>, "isOpen" | "onClose">,
) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Button onClick={() => setIsOpen(true)}>Open Dialog</Button>
      <Dialog {...props} isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
};

const meta = {
  title: "Components/Dialog",
  component: Dialog,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    isOpen: {
      control: "boolean",
      description: "Controls whether the dialog is open or closed",
    },
    onClose: {
      description: "Callback fired when the dialog is closed",
    },
    onConfirm: {
      description: "Optional callback fired when the confirm button is clicked",
    },
    title: {
      control: "text",
      description: "Optional title displayed in the dialog header",
    },
    description: {
      control: "text",
      description: "Optional description displayed below the title",
    },
    children: {
      description: "The main content of the dialog",
    },
    confirmText: {
      control: "text",
      description: "Text for the confirm button (default: 'Confirm')",
    },
    cancelText: {
      control: "text",
      description: "Text for the cancel button (default: 'Cancel')",
    },
    closeByBackdrop: {
      control: "boolean",
      description: "Allow closing the dialog by clicking the backdrop",
    },
    closeByEscape: {
      control: "boolean",
      description: "Allow closing the dialog with the Escape key",
    },
  },
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    isOpen: false,
    onClose: () => {},
    children: "This is a basic dialog with just content.",
  },
  render: (args) => <DialogStoryWrapper {...args} />,
};

export const WithTitle: Story = {
  args: {
    isOpen: false,
    onClose: () => {},
    title: "Dialog Title",
    children: "This dialog has a title.",
  },
  render: (args) => <DialogStoryWrapper {...args} />,
};

export const WithTitleAndDescription: Story = {
  args: {
    isOpen: false,
    onClose: () => {},
    title: "Confirm Action",
    description: "Are you sure you want to proceed?",
    children: "This action cannot be undone.",
  },
  render: (args) => <DialogStoryWrapper {...args} />,
};

export const WithConfirm: Story = {
  args: {
    isOpen: false,
    onClose: () => {},
    title: "Delete Item",
    description: "Are you sure you want to delete this item?",
    confirmText: "Delete",
    cancelText: "Keep",
    onConfirm: () => alert("Item deleted!"),
    children: "This action cannot be undone.",
  },
  render: (args) => <DialogStoryWrapper {...args} />,
};

export const ConfirmationDialog: Story = {
  args: {
    isOpen: false,
    onClose: () => {},
    title: "Delete Confirmation",
    description: "This action cannot be reversed",
    confirmText: "Delete",
    cancelText: "Cancel",
    onConfirm: () => alert("Item successfully deleted"),
    children: "Are you sure you want to delete this item?",
  },
  render: (args) => <DialogStoryWrapper {...args} />,
};

export const NoBackdropClose: Story = {
  args: {
    isOpen: false,
    onClose: () => {},
    title: "Important Notice",
    description: "Please read this carefully",
    closeByBackdrop: false,
    confirmText: "I Understand",
    children:
      "This dialog cannot be closed by clicking the backdrop. You must click a button to close it.",
  },
  render: (args) => <DialogStoryWrapper {...args} />,
};

export const NoEscapeClose: Story = {
  args: {
    isOpen: false,
    onClose: () => {},
    title: "Required Action",
    closeByEscape: false,
    confirmText: "Proceed",
    children: "This dialog cannot be closed with the Escape key.",
  },
  render: (args) => <DialogStoryWrapper {...args} />,
};

export const RichContent: Story = {
  args: {
    isOpen: false,
    onClose: () => {},
    title: "Server Configuration",
    description: "Configure your server settings",
    confirmText: "Save",
    onConfirm: () => alert("Settings saved!"),
    children: "Configure your server settings here.",
  },
  render: (args) => <DialogStoryWrapper {...args} />,
};

export const LongContent: Story = {
  args: {
    isOpen: false,
    onClose: () => {},
    title: "Terms and Conditions",
    description: "Please read and accept",
    confirmText: "Accept",
    cancelText: "Decline",
    children:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
  },
  render: (args) => <DialogStoryWrapper {...args} />,
};

export const WarningDialog: Story = {
  args: {
    isOpen: false,
    onClose: () => {},
    title: "⚠️ Warning",
    description: "This is a critical action",
    confirmText: "Proceed with Caution",
    cancelText: "Abort",
    onConfirm: () => alert("Warning acknowledged"),
    children:
      "You are about to perform an action that may have serious consequences.",
  },
  render: (args) => <DialogStoryWrapper {...args} />,
};

export const InfoDialog: Story = {
  args: {
    isOpen: false,
    onClose: () => {},
    title: "ℹ️ Information",
    description: "Important information",
    confirmText: "Got it",
    children: "Your password will expire in 7 days. Please update it soon.",
  },
  render: (args) => <DialogStoryWrapper {...args} />,
};

export const SuccessDialog: Story = {
  args: {
    isOpen: false,
    onClose: () => {},
    title: "✓ Success",
    description: "Operation completed successfully",
    confirmText: "Close",
    children: "Your file has been uploaded successfully.",
  },
  render: (args) => <DialogStoryWrapper {...args} />,
};

export const ErrorDialog: Story = {
  args: {
    isOpen: false,
    onClose: () => {},
    title: "✕ Error",
    description: "Something went wrong",
    confirmText: "Close",
    children: "Failed to upload file. Please try again later.",
  },
  render: (args) => <DialogStoryWrapper {...args} />,
};

export const FormDialog: Story = {
  args: {
    isOpen: false,
    onClose: () => {},
    title: "Contact Information",
    description: "Please provide your details",
    confirmText: "Submit",
    cancelText: "Cancel",
    children: "Please fill in your contact information.",
  },
  render: (args) => <DialogStoryWrapper {...args} />,
};

export const CustomButtonText: Story = {
  args: {
    isOpen: false,
    onClose: () => {},
    title: "Save Changes?",
    confirmText: "Save Changes",
    cancelText: "Discard",
    onConfirm: () => alert("Changes saved"),
    children: "You have unsaved changes. Would you like to save them?",
  },
  render: (args) => <DialogStoryWrapper {...args} />,
};

export const RestrictiveDialog: Story = {
  args: {
    isOpen: false,
    onClose: () => {},
    title: "Critical Action Required",
    description: "This action requires your explicit confirmation",
    confirmText: "I Understand and Accept",
    closeByBackdrop: false,
    closeByEscape: false,
    children:
      "You must click the button below to proceed or close this window.",
  },
  render: (args) => <DialogStoryWrapper {...args} />,
};

export const NoConfirmButton: Story = {
  args: {
    isOpen: false,
    onClose: () => {},
    title: "Notification",
    description: "Just informational",
    cancelText: "Dismiss",
    children: "This dialog only has a dismiss button, no confirm action.",
  },
  render: (args) => <DialogStoryWrapper {...args} />,
};
