interface BadgeProps {
  text: string;
  color?: string;
}

export default function Badge({ text, color = "fill-red-500" }: BadgeProps) {
  return (
    <>
      <span className="inline-flex items-center gap-x-1.5 rounded-md px-2 py-1 text-xs font-medium text-gray-900 ring-1 ring-gray-200 ring-inset">
        <svg
          viewBox="0 0 6 6"
          aria-hidden="true"
          className={`size-1.5 ${color}`}
        >
          <circle r={3} cx={3} cy={3} />
        </svg>
        {text}
      </span>
    </>
  );
}
