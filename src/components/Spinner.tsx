interface SpinnerProps {
  size?: "small" | "large";
}

/**
 * A minimal loading spinner component.
 *
 * This component renders a semantic loading indicator using:
 * - `aria-busy="true"` for accessibility
 * - `data-spinner` attribute for size-based styling hooks
 *
 * Styling and animation should be implemented via CSS
 * using the `[data-spinner]` attribute selector.
 *
 * @example
 * ```tsx
 * <Spinner />
 * <Spinner size="small" />
 * <Spinner size="large" />
 * ```
 *
 * @param size - Optional size variant of the spinner.
 * @returns A div element representing a loading spinner.
 */

const Spinner = ({ size }: SpinnerProps) => {
  return <div aria-busy="true" data-spinner={size}></div>;
};

export default Spinner;
