interface MeterProps {
  value: number;
  max?: number;
  className?: string;
}

/**
 * A reusable meter/progress visualization component built
 * on top of the native HTML `<meter>` element.
 *
 * It automatically calculates:
 * - `low`  → 30% of max
 * - `high` → 70% of max
 * - `optimum` → max value
 *
 * @example
 * ```tsx
 * <Meter value={45} />
 * <Meter value={80} max={120} className="w-full" />
 * ```
 *
 * @param value - Current numeric value of the meter.
 * @param max - Maximum value of the meter (default: 100).
 * @param className - Optional CSS classes.
 *
 * @returns A styled HTML `<meter>` element.
 */

const Meter = ({ value, max = 100, className }: MeterProps) => {
  return (
    <meter
      className={className}
      value={value}
      min={0}
      max={max}
      low={max * 0.3}
      high={max * 0.7}
      optimum={max}
    />
  );
};

export default Meter;
