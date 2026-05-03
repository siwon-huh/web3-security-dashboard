"use client";

import type { ScoreResult } from "@/lib/types";
import type { Lang } from "@/lib/i18n";
import { CHECKLIST_CATEGORIES_EN } from "@/lib/i18n/checklist-en";

interface ScorePanelProps {
  readonly score: ScoreResult;
  readonly onReset: () => void;
  readonly lang?: Lang;
}

export function ScorePanel({ score, onReset, lang = "ko" }: ScorePanelProps) {
  const headerLabel =
    lang === "en" ? "Project Security Score" : "Project Security Score";
  const weightedPoints =
    lang === "en" ? "weighted points" : "weighted points";
  const resetLabel = lang === "en" ? "Reset answers" : "Reset answers";

  return (
    <aside className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6 sticky top-24">
      <h2 className="text-[11px] uppercase tracking-widest text-neutral-500 font-medium">
        {headerLabel}
      </h2>
      <div className="flex items-baseline gap-2 mt-3">
        <div className="text-5xl font-bold text-neutral-900 dark:text-neutral-50 tabular-nums tracking-tight">
          {score.percent}
        </div>
        <div className="text-xl text-neutral-400 dark:text-neutral-600">
          / 100
        </div>
        <div className="ml-auto text-3xl font-bold text-neutral-900 dark:text-neutral-50 tabular-nums">
          {score.grade}
        </div>
      </div>

      <div className="mt-4 h-1.5 rounded-full bg-neutral-100 dark:bg-neutral-900 overflow-hidden">
        <div
          className="h-full bg-neutral-900 transition-all"
          style={{ width: `${score.percent}%` }}
        />
      </div>

      <div className="mt-2 text-xs text-neutral-500 tabular-nums">
        {score.totalEarned} / {score.totalPossible} {weightedPoints}
      </div>

      <div className="mt-6 space-y-3">
        {score.categories.map((cat) => {
          const enTitle =
            lang === "en" ? CHECKLIST_CATEGORIES_EN[cat.id]?.title : null;
          return (
            <div key={cat.id}>
              <div className="flex justify-between text-xs">
                <span className="text-neutral-700 dark:text-neutral-300">
                  {enTitle ?? cat.title}
                </span>
                <span className="text-neutral-500 tabular-nums">
                  {cat.earned}
                  <span className="text-neutral-300 dark:text-neutral-700">
                    {" "}
                    / {cat.possible}
                  </span>
                </span>
              </div>
              <div className="mt-1.5 h-1 rounded-full bg-neutral-100 dark:bg-neutral-900 overflow-hidden">
                <div
                  className="h-full bg-neutral-900"
                  style={{ width: `${cat.percent}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>

      <button
        type="button"
        onClick={onReset}
        className="mt-6 w-full text-sm rounded-md border border-neutral-200 dark:border-neutral-800 hover:border-neutral-900 hover:bg-neutral-900 hover:text-neutral-50 py-2 text-neutral-700 dark:text-neutral-300 transition-colors"
      >
        {resetLabel}
      </button>
    </aside>
  );
}
