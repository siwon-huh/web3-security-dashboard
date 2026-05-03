"use client";

import { use, useMemo, useState } from "react";
import { CHECKLIST, computeScore } from "@/lib/checklist";
import { ChecklistSection } from "@/components/ChecklistSection";
import { ScorePanel } from "@/components/ScorePanel";
import { ResearchPromptBox } from "@/components/ResearchPromptBox";
import type { AnswerMap, AnswerValue } from "@/lib/types";
import { isLang, type Lang } from "@/lib/i18n";
import { notFound } from "next/navigation";

const PAGE_DICT: Readonly<
  Record<
    Lang,
    {
      eyebrow: string;
      title: string;
      description: string;
    }
  >
> = {
  ko: {
    eyebrow: "Security Score",
    title: "프로젝트 보안 점수 체크리스트",
    description:
      "각 항목에 답하면 가중치 기반으로 0-100점이 실시간 계산됩니다. 답하지 않은 항목은 0점으로 처리되니, 모든 항목을 채워야 신뢰할 만한 점수가 나옵니다.",
  },
  en: {
    eyebrow: "Security Score",
    title: "Project security checklist",
    description:
      "Answer each item and a weighted 0-100 score is calculated in real time. Unanswered items count as zero, so a complete checklist is needed for a reliable result.",
  },
};

export default function ScoringPage({
  params,
}: {
  readonly params: Promise<{ lang: string }>;
}) {
  const { lang } = use(params);
  if (!isLang(lang)) notFound();
  const dict = PAGE_DICT[lang];

  const [answers, setAnswers] = useState<AnswerMap>({});
  const score = useMemo(() => computeScore(answers), [answers]);

  function handleChange(id: string, value: AnswerValue) {
    setAnswers((prev) => ({ ...prev, [id]: value }));
  }

  function handleReset() {
    setAnswers({});
  }

  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <header className="mb-10">
        <p className="text-[11px] uppercase tracking-[0.2em] text-neutral-500 font-medium">
          {dict.eyebrow}
        </p>
        <h1 className="mt-3 text-3xl md:text-4xl font-semibold text-neutral-900 dark:text-neutral-50 tracking-tight">
          {dict.title}
        </h1>
        <p className="mt-4 text-neutral-600 dark:text-neutral-400 max-w-3xl leading-relaxed">
          {dict.description}
        </p>
      </header>

      <div className="grid gap-8 lg:grid-cols-[1fr_320px] items-start">
        <div className="flex flex-col gap-6 min-w-0">
          <ResearchPromptBox lang={lang} />
          {CHECKLIST.map((category) => {
            const cs = score.categories.find((c) => c.id === category.id);
            if (!cs) return null;
            return (
              <ChecklistSection
                key={category.id}
                category={category}
                answers={answers}
                score={cs}
                onChange={handleChange}
                lang={lang}
              />
            );
          })}
        </div>
        <ScorePanel score={score} onReset={handleReset} lang={lang} />
      </div>
    </div>
  );
}
