import React from "react";

export interface TableColumn<T = unknown> {
  key: string;
  header: string;
  render?: (row: T, index: number) => React.ReactNode;
  accessor?: keyof T | ((row: T) => unknown);
  headerClassName?: string;
  cellClassName?: string;
}

export interface OtTableProps<T = unknown> {
  columns: TableColumn<T>[];
  data: T[];
  className?: string;
  tableClassName?: string;
  theadClassName?: string;
  tbodyClassName?: string;
  rowClassName?: string | ((row: T, index: number) => string);
  onRowClick?: (row: T, index: number) => void;
  emptyMessage?: React.ReactNode;
}

/**
 * A reusable Table component for displaying tabular data.
 * Supports custom cell rendering, row click handlers, and flexible styling.
 *
 * Features:
 * - Dynamic columns and data
 * - Custom cell rendering
 * - Row click handlers
 * - Empty state handling
 * - Flexible styling options
 * - TypeScript generic support
 *
 * @component
 *
 * @example
 * ```tsx
 * const columns = [
 *   { key: 'name', header: 'Name', accessor: 'name' },
 *   { key: 'email', header: 'Email', accessor: 'email' },
 *   {
 *     key: 'status',
 *     header: 'Status',
 *     render: (row) => <Badge type="success">{row.status}</Badge>
 *   },
 * ];
 *
 * <Table columns={columns} data={users} />
 * ```
 */
const OtTable = <T extends Record<string, unknown>>({
  columns,
  data,
  className,
  tableClassName,
  theadClassName,
  tbodyClassName,
  rowClassName,
  onRowClick,
  emptyMessage = "No data available",
}: OtTableProps<T>) => {
  const getCellValue = (row: T, column: TableColumn<T>): React.ReactNode => {
    if (column.render) {
      return column.render(row, data.indexOf(row));
    }

    if (column.accessor) {
      if (typeof column.accessor === "function") {
        return column.accessor(row) as React.ReactNode;
      }
      return row[column.accessor] as React.ReactNode;
    }

    return null;
  };

  const getRowClassName = (row: T, index: number) => {
    if (typeof rowClassName === "function") {
      return rowClassName(row, index);
    }
    return rowClassName || "";
  };

  return (
    <div className={`table ${className || ""}`}>
      <table className={tableClassName}>
        <thead className={theadClassName}>
          <tr>
            {columns.map((column) => (
              <th key={column.key} className={column.headerClassName}>
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className={tbodyClassName}>
          {data.length === 0 ? (
            <tr>
              <td colSpan={columns.length} style={{ textAlign: "center" }}>
                {emptyMessage}
              </td>
            </tr>
          ) : (
            data.map((row, index) => (
              <tr
                key={index}
                className={getRowClassName(row, index)}
                onClick={() => onRowClick?.(row, index)}
                style={onRowClick ? { cursor: "pointer" } : undefined}
              >
                {columns.map((column) => (
                  <td key={column.key} className={column.cellClassName}>
                    {getCellValue(row, column)}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default OtTable;
