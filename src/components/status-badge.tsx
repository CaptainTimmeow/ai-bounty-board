import type { BountyStatus } from "@/lib/mock-data";

const config: Record<BountyStatus, { label: string; bg: string; text: string; dot: string }> = {
  draft: { label: "Draft", bg: "bg-dust/15", text: "text-dust", dot: "bg-dust" },
  in_review: { label: "In Review", bg: "bg-info/15", text: "text-info", dot: "bg-info" },
  open: { label: "Open", bg: "bg-success/15", text: "text-success", dot: "bg-success" },
  judging: { label: "Judging", bg: "bg-warning/15", text: "text-warning", dot: "bg-warning" },
  resolved: { label: "Resolved", bg: "bg-gold/15", text: "text-gold", dot: "bg-gold" },
  completed: { label: "Completed", bg: "bg-gold/15", text: "text-gold", dot: "bg-gold" },
  unresolved: { label: "Unresolved", bg: "bg-danger/15", text: "text-danger", dot: "bg-danger" },
  hidden: { label: "Hidden", bg: "bg-dust/15", text: "text-dust", dot: "bg-dust" },
};

const submissionConfig: Record<string, { label: string; bg: string; text: string; dot: string }> = {
  in_review: { label: "In Review", bg: "bg-info/15", text: "text-info", dot: "bg-info" },
  in_progress: { label: "In Progress", bg: "bg-success/15", text: "text-success", dot: "bg-success" },
  judging: { label: "Judging", bg: "bg-warning/15", text: "text-warning", dot: "bg-warning" },
  shortlisted: { label: "Shortlisted", bg: "bg-gold/15", text: "text-gold", dot: "bg-gold" },
  approved: { label: "Approved", bg: "bg-success/15", text: "text-success", dot: "bg-success" },
  rejected: { label: "Rejected", bg: "bg-danger/15", text: "text-danger", dot: "bg-danger" },
};

export function StatusBadge({ status }: { status: BountyStatus }) {
  const c = config[status];
  return (
    <span className={`badge ${c.bg} ${c.text}`}>
      {c.label}
    </span>
  );
}

export function SubmissionStatusBadge({ status }: { status: string }) {
  const c = submissionConfig[status] ?? submissionConfig.in_review;
  return (
    <span className={`badge ${c.bg} ${c.text}`}>
      {c.label}
    </span>
  );
}
