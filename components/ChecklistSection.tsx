"use client";

import type {
  AnswerMap,
  AnswerValue,
  CategoryScore,
  ChecklistCategory,
  ChecklistItem,
} from "@/lib/types";

interface ChecklistSectionProps {
  readonly category: ChecklistCategory;
  readonly answers: AnswerMap;
  readonly score: CategoryScore;
  readonly onChange: (id: string, value: AnswerValue) => void;
}

export function ChecklistSection({
  category,
  answers,
  score,
  onChange,
}: ChecklistSectionProps) {
  return (
    <section className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6">
      <header className="flex items-start justify-between gap-4 border-b border-neutral-100 dark:border-neutral-900 pb-4 mb-5">
        <div>
          <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50 tracking-tight">
            {category.title}
          </h2>
          <p className="text-sm text-neutral-500 mt-1">{category.description}</p>
        </div>
        <div className="text-right shrink-0">
          <div className="text-xl font-semibold text-neutral-900 dark:text-neutral-50 tabular-nums">
            {score.earned}
            <span className="text-neutral-400 dark:text-neutral-600 text-sm"> / {score.possible}</span>
          </div>
          <div className="text-xs text-neutral-500 tabular-nums">
            {score.percent}%
          </div>
        </div>
      </header>

      <div className="flex flex-col divide-y divide-neutral-100">
        {category.items.map((item) => (
          <ChecklistRow
            key={item.id}
            item={item}
            value={answers[item.id]}
            onChange={onChange}
          />
        ))}
      </div>
    </section>
  );
}

interface ChecklistRowProps {
  readonly item: ChecklistItem;
  readonly value: AnswerValue | undefined;
  readonly onChange: (id: string, value: AnswerValue) => void;
}

function ChecklistRow({ item, value, onChange }: ChecklistRowProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-3 md:gap-6 items-start py-4 first:pt-0 last:pb-0">
      <div>
        <div className="flex items-center gap-2">
          <span className="font-medium text-neutral-900 dark:text-neutral-50">{item.label}</span>
          <span className="text-[10px] uppercase tracking-wider px-1.5 py-0.5 rounded border border-neutral-200 dark:border-neutral-800 text-neutral-500">
            w{item.weight}
          </span>
        </div>
        <p className="text-xs text-neutral-500 mt-1 leading-relaxed">
          {item.description}
        </p>
      </div>
      <div className="md:min-w-[260px]">
        {item.type === "boolean" ? (
          <BooleanToggle
            id={item.id}
            value={value === true ? "yes" : value === false ? "no" : undefined}
            onChange={onChange}
          />
        ) : (
          <SelectInput
            item={item}
            value={value as string | undefined}
            onChange={onChange}
          />
        )}
      </div>
    </div>
  );
}

function BooleanToggle({
  id,
  value,
  onChange,
}: {
  readonly id: string;
  readonly value: "yes" | "no" | undefined;
  readonly onChange: (id: string, value: AnswerValue) => void;
}) {
  return (
    <div className="grid grid-cols-2 gap-2">
      {[
        { label: "Yes", val: true, key: "yes" as const },
        { label: "No", val: false, key: "no" as const },
      ].map((opt) => {
        const active = value === opt.key;
        return (
          <button
            key={opt.label}
            type="button"
            onClick={() => onChange(id, opt.val)}
            className={[
              "px-4 py-2 rounded-md text-sm font-medium transition-colors border",
              active
                ? "bg-neutral-900 border-neutral-900 text-neutral-50"
                : "bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 hover:border-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-50",
            ].join(" ")}
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );
}

function SelectInput({
  item,
  value,
  onChange,
}: {
  readonly item: ChecklistItem;
  readonly value: string | undefined;
  readonly onChange: (id: string, value: AnswerValue) => void;
}) {
  return (
    <select
      value={value ?? ""}
      onChange={(e) => onChange(item.id, e.target.value)}
      className="w-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-md px-3 py-2 text-sm text-neutral-900 dark:text-neutral-50 hover:border-neutral-400 focus:border-neutral-900 focus:outline-none transition-colors"
    >
      <option value="" disabled>
        선택…
      </option>
      {item.options?.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  );
}
