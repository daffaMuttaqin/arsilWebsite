export default function Stat({ value, label }) {
  return (
    <div className="text-center">
      <div className="text-3xl font-semibold">{value}</div>
      <div className="text-sm text-neutral-500 mt-1">{label}</div>
    </div>
  );
}
