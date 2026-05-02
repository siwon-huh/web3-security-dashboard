import type { Tier } from "@/lib/types";

const TIER_STYLES: Readonly<Record<Tier, string>> = {
  S: "bg-neutral-900 text-neutral-50 border-neutral-900",
  "A+": "bg-neutral-800 text-neutral-50 border-neutral-800",
  A: "bg-neutral-600 text-neutral-50 border-neutral-600",
  B: "bg-neutral-300 text-neutral-900 dark:text-neutral-50 border-neutral-300 dark:border-neutral-700",
  C: "bg-neutral-50 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 border-neutral-300 dark:border-neutral-700",
};

interface TierBadgeProps {
  readonly tier: Tier;
  readonly size?: "sm" | "lg";
}

export function TierBadge({ tier, size = "sm" }: TierBadgeProps) {
  const isWide = tier.length > 1;
  const dim =
    size === "lg"
      ? `h-14 w-14 ${isWide ? "text-lg" : "text-xl"}`
      : `h-7 w-7 ${isWide ? "text-[10px]" : "text-xs"}`;
  return (
    <div
      className={[
        "shrink-0 rounded-md flex items-center justify-center font-semibold border tabular-nums",
        dim,
        TIER_STYLES[tier],
      ].join(" ")}
    >
      {tier}
    </div>
  );
}
