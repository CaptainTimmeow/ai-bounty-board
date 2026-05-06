import type { BountyStatus } from "@/lib/mock-data";

const config: Record<BountyStatus, { label: string; bg: string; text: string }> = {
  open: { label: "Open", bg: "bg-success/20", text: "text-success" },
  judging: { label: "Judging", bg: "bg-warning/20", text: "text-warning" },
  completed: { label: "Completed", bg: "bg-gold/20", text: "text-gold" },
  draft: { label: "Draft", bg: "bg-dust/20", text: "text-dust" },
  unresolved: { label: "Unresolved", bg: "bg-danger/20", text: "text-danger" },
};

const submissionConfig: Record<string, { label: string; bg: string; text: string }> = {
  in_review: { label: "In Review", bg: "bg-info/20", text: "text-info" },
  in_progress: { label: "In Progress", bg: "bg-success/20", text: "text-success" },
  judging: { label: "Judging", bg: "bg-warning/20", text: "text-warning" },
  shortlisted: { label: "Shortlisted", bg: "bg-gold/20", text: "text-gold" },
  approved: { label: "Approved", bg: "bg-success/20", text: "text-success" },
  rejected: { label: "Rejected", bg: "bg-danger/20", text: "text-danger" },
};

export function StatusBadge({ status }: { status: BountyStatus }) {
  const c = config[status];
  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${c.bg} ${c.text}`}>
      {c.label}
    </span>
  );
}

export function SubmissionStatusBadge({ status }: { status: string }) {
  const c = submissionConfig[status] ?? submissionConfig.in_review;
  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${c.bg} ${c.text}`}>
      {c.label}
    </span>
  );
}
