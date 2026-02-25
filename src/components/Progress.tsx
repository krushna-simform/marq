interface ProgressProps {
  value: number;
  max?: number;
  className?: string;
}

/**
 * A reusable wrapper around the native HTML `<progress>` element.
 *
 * This component displays task completion progress such as
 * uploads, loading states, or multi-step workflows.
 *
 * @example
 * ```tsx
 * <Progress value={30} />
 * <Progress value={60} max={120} className="w-full" />
 * ```
 *
 * @param props - {@link ProgressProps}
 * @returns A semantic HTML `<progress>` element.
 */

const Progress = ({ value, max = 100, className }: ProgressProps) => {
  return <progress value={value} max={max} className={className}></progress>;
};

export default Progress;
