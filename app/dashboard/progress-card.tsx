import { type } from "os";

type ProgressCardProps = {
  label: string,
  value: string,
  note: string,
};

export default function ProgressCard({
  label,
  value,
  note,
}: ProgressCardProps) {
  return(
    <section className="panel">
      <div className="stat-label">{label}</div>
      <div className="stat-value">{value}</div>
      <div className="stat-note">{note}</div>
    </section>
  )
}