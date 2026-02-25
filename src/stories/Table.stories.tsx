import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import OtTable from "../components/Table";
import Badge from "../components/Badge";

interface User extends Record<string, unknown> {
  id: number;
  name: string;
  email: string;
  role: string;
  status: string;
}

const sampleUsers: User[] = [
  {
    id: 1,
    name: "Alice Johnson",
    email: "alice@example.com",
    role: "Admin",
    status: "Active",
  },
  {
    id: 2,
    name: "Bob Smith",
    email: "bob@example.com",
    role: "Editor",
    status: "Active",
  },
  {
    id: 3,
    name: "Carol White",
    email: "carol@example.com",
    role: "Viewer",
    status: "Pending",
  },
  {
    id: 4,
    name: "David Brown",
    email: "david@example.com",
    role: "Editor",
    status: "Active",
  },
  {
    id: 5,
    name: "Eve Davis",
    email: "eve@example.com",
    role: "Viewer",
    status: "Inactive",
  },
];

const meta = {
  title: "Components/Table",
  component: OtTable,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof OtTable>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic table with simple columns
export const Default: Story = {
  args: {
    columns: [
      { key: "name", header: "Name", accessor: "name" },
      { key: "email", header: "Email", accessor: "email" },
      { key: "role", header: "Role", accessor: "role" },
      { key: "status", header: "Status", accessor: "status" },
    ],
    data: sampleUsers,
  },
};

// Table with custom cell rendering (badges)
export const WithBadges: Story = {
  args: {
    columns: [
      { key: "name", header: "Name", accessor: "name" },
      { key: "email", header: "Email", accessor: "email" },
      { key: "role", header: "Role", accessor: "role" },
      {
        key: "status",
        header: "Status",
        render: (row) => {
          const user = row as User;
          const badgeType =
            user.status === "Active"
              ? "success"
              : user.status === "Pending"
                ? "secondary"
                : "danger";
          return <Badge type={badgeType}>{user.status}</Badge>;
        },
      },
    ],
    data: sampleUsers,
  },
};

// Empty table
export const Empty: Story = {
  args: {
    columns: [
      { key: "name", header: "Name", accessor: "name" },
      { key: "email", header: "Email", accessor: "email" },
      { key: "role", header: "Role", accessor: "role" },
      { key: "status", header: "Status", accessor: "status" },
    ],
    data: [],
  },
};

// Empty with custom message
export const EmptyWithCustomMessage: Story = {
  args: {
    columns: [
      { key: "name", header: "Name", accessor: "name" },
      { key: "email", header: "Email", accessor: "email" },
    ],
    data: [],
    emptyMessage: (
      <div style={{ padding: "20px", color: "#666" }}>
        <p style={{ margin: 0, fontWeight: "bold" }}>No users found</p>
        <p style={{ margin: "8px 0 0 0", fontSize: "14px" }}>
          Add your first user to get started
        </p>
      </div>
    ),
  },
};

// Interactive table with row click
export const WithRowClick: Story = {
  args: {
    columns: [],
    data: [],
  },
  render: () => {
    const [selectedUser, setSelectedUser] = useState<User | null>(null);

    return (
      <div>
        <OtTable
          columns={[
            { key: "name", header: "Name", accessor: "name" },
            { key: "email", header: "Email", accessor: "email" },
            { key: "role", header: "Role", accessor: "role" },
            {
              key: "status",
              header: "Status",
              render: (row: User) => {
                const badgeType =
                  row.status === "Active" ? "success" : "secondary";
                return <Badge type={badgeType}>{row.status}</Badge>;
              },
            },
          ]}
          data={sampleUsers}
          onRowClick={(user) => setSelectedUser(user)}
        />
        {selectedUser && (
          <div
            style={{
              marginTop: "16px",
              padding: "16px",
              backgroundColor: "#f3f4f6",
              borderRadius: "4px",
            }}
          >
            <strong>Selected User:</strong>
            <p style={{ margin: "8px 0 0 0" }}>
              {selectedUser.name} ({selectedUser.email})
            </p>
          </div>
        )}
      </div>
    );
  },
};

// Table with custom styling
export const WithCustomStyling: Story = {
  args: {
    columns: [
      { key: "name", header: "Name", accessor: "name" },
      { key: "email", header: "Email", accessor: "email" },
      { key: "role", header: "Role", accessor: "role" },
      { key: "status", header: "Status", accessor: "status" },
    ],
    data: sampleUsers,
    className: "custom-table-wrapper",
    tableClassName: "custom-table",
  },
};

// Table with conditional row styling
export const WithConditionalRowStyling: Story = {
  args: {
    columns: [
      { key: "name", header: "Name", accessor: "name" },
      { key: "email", header: "Email", accessor: "email" },
      { key: "role", header: "Role", accessor: "role" },
      { key: "status", header: "Status", accessor: "status" },
    ],
    data: sampleUsers,
    rowClassName: (row) =>
      (row as User).status === "Inactive" ? "inactive-row" : "",
  },
};

// Product table example
export const ProductTable: Story = {
  args: {
    columns: [],
    data: [],
  },
  render: () => {
    interface Product extends Record<string, unknown> {
      id: number;
      name: string;
      category: string;
      price: number;
      stock: number;
      inStock: boolean;
    }

    const products: Product[] = [
      {
        id: 1,
        name: "Laptop Pro 15",
        category: "Electronics",
        price: 1299.99,
        stock: 45,
        inStock: true,
      },
      {
        id: 2,
        name: "Wireless Mouse",
        category: "Accessories",
        price: 29.99,
        stock: 120,
        inStock: true,
      },
      {
        id: 3,
        name: "USB-C Cable",
        category: "Accessories",
        price: 12.99,
        stock: 0,
        inStock: false,
      },
      {
        id: 4,
        name: "Monitor 27 inch",
        category: "Electronics",
        price: 349.99,
        stock: 23,
        inStock: true,
      },
    ];

    return (
      <OtTable
        columns={[
          { key: "name", header: "Product Name", accessor: "name" },
          { key: "category", header: "Category", accessor: "category" },
          {
            key: "price",
            header: "Price",
            render: (row: Product) => `$${row.price.toFixed(2)}`,
          },
          {
            key: "stock",
            header: "Stock",
            render: (row: Product) => (
              <span
                style={{
                  color: row.stock === 0 ? "#dc2626" : "#059669",
                  fontWeight: "bold",
                }}
              >
                {row.stock}
              </span>
            ),
          },
          {
            key: "inStock",
            header: "Availability",
            render: (row: Product) => (
              <Badge type={row.inStock ? "success" : "danger"}>
                {row.inStock ? "In Stock" : "Out of Stock"}
              </Badge>
            ),
          },
        ]}
        data={products}
      />
    );
  },
};

// Table with actions column
export const WithActionsColumn: Story = {
  args: {
    columns: [],
    data: [],
  },
  render: () => {
    const handleEdit = (user: User) => {
      alert(`Edit user: ${user.name}`);
    };

    const handleDelete = (user: User) => {
      alert(`Delete user: ${user.name}`);
    };

    return (
      <OtTable
        columns={[
          { key: "name", header: "Name", accessor: "name" },
          { key: "email", header: "Email", accessor: "email" },
          { key: "role", header: "Role", accessor: "role" },
          {
            key: "status",
            header: "Status",
            render: (row: User) => {
              const badgeType =
                row.status === "Active" ? "success" : "secondary";
              return <Badge type={badgeType}>{row.status}</Badge>;
            },
          },
          {
            key: "actions",
            header: "Actions",
            render: (row: User) => (
              <div style={{ display: "flex", gap: "8px" }}>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleEdit(row);
                  }}
                  style={{
                    padding: "4px 8px",
                    fontSize: "12px",
                    cursor: "pointer",
                  }}
                >
                  Edit
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDelete(row);
                  }}
                  className="danger"
                  style={{
                    padding: "4px 8px",
                    fontSize: "12px",
                    cursor: "pointer",
                  }}
                >
                  Delete
                </button>
              </div>
            ),
          },
        ]}
        data={sampleUsers}
      />
    );
  },
};

// Compact table
export const CompactTable: Story = {
  args: {
    columns: [
      { key: "id", header: "ID", accessor: "id" },
      { key: "name", header: "Name", accessor: "name" },
      { key: "email", header: "Email", accessor: "email" },
    ],
    data: sampleUsers.slice(0, 3),
  },
};
