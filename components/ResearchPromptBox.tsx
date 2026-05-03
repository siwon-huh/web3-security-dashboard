"use client";

import { useState } from "react";
import { RESEARCH_PROMPT } from "@/lib/research-prompt";
import type { Lang } from "@/lib/i18n";

const DICT: Readonly<
  Record<
    Lang,
    {
      eyebrow: string;
      headline: string;
      sub: string;
      characters: string;
      copy: string;
      copied: string;
      usage: (project: string) => React.ReactNode;
    }
  >
> = {
  ko: {
    eyebrow: "Research Prompt",
    headline:
      "정보를 직접 못 찾겠다면, 이 프롬프트로 LLM(ChatGPT, Claude, Gemini 등)에 위임하세요",
    sub: "24개 항목을 우리 체크리스트 옵션값과 매핑된 형식으로 답해주도록 설계됨",
    characters: "characters",
    copy: "Copy prompt",
    copied: "Copied",
    usage: (project) => (
      <>
        사용법: 위 프롬프트를 복사하고 첫 줄의{" "}
        <code className="px-1 py-0.5 rounded bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
          {project}
        </code>{" "}
        라인을 평가할 프로젝트 이름과 URL로 채운 뒤, 웹 검색이 가능한 LLM에게 붙여넣으세요. 결과를 받아 위 체크리스트 옵션을 같은 값으로 선택하면 됩니다.
      </>
    ),
  },
  en: {
    eyebrow: "Research Prompt",
    headline:
      "If you can not gather the data yourself, hand this prompt to an LLM (ChatGPT, Claude, Gemini, etc.)",
    sub: "Designed so the 24 answers come back mapped exactly to the checklist option values.",
    characters: "characters",
    copy: "Copy prompt",
    copied: "Copied",
    usage: (project) => (
      <>
        How to use: copy the prompt, fill in the{" "}
        <code className="px-1 py-0.5 rounded bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
          {project}
        </code>{" "}
        line on the first row with the target project's name and URL, then paste it into a web-search-capable LLM. Take the results and pick the matching options on the checklist above.
      </>
    ),
  },
};

export function ResearchPromptBox({ lang = "ko" }: { readonly lang?: Lang }) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const dict = DICT[lang];

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(RESEARCH_PROMPT);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <section className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-3 px-5 py-4 text-left"
      >
        <div>
          <div className="flex items-center gap-2">
            <span className="text-[11px] uppercase tracking-[0.18em] font-medium text-neutral-500">
              {dict.eyebrow}
            </span>
            <span className="text-[10px] uppercase tracking-wider px-1.5 py-0.5 rounded border border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 bg-neutral-50 dark:bg-neutral-900">
              LLM
            </span>
          </div>
          <p className="mt-1.5 text-sm text-neutral-700 dark:text-neutral-300 font-medium">
            {dict.headline}
          </p>
          <p className="mt-0.5 text-xs text-neutral-500">{dict.sub}</p>
        </div>
        <span
          className={[
            "shrink-0 text-neutral-400 dark:text-neutral-600 transition-transform text-lg",
            open ? "rotate-180" : "",
          ].join(" ")}
        >
          ⌄
        </span>
      </button>

      {open && (
        <div className="border-t border-neutral-100 dark:border-neutral-900 px-5 py-4">
          <div className="flex items-center justify-between mb-3">
            <span className="text-[11px] uppercase tracking-widest text-neutral-500">
              {RESEARCH_PROMPT.length.toLocaleString()} {dict.characters}
            </span>
            <button
              type="button"
              onClick={handleCopy}
              className={[
                "text-xs font-medium px-3 py-1.5 rounded-md border transition-colors",
                copied
                  ? "border-neutral-900 bg-neutral-900 text-neutral-50"
                  : "border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 hover:border-neutral-900 hover:bg-neutral-900 hover:text-neutral-50",
              ].join(" ")}
            >
              {copied ? dict.copied : dict.copy}
            </button>
          </div>
          <pre className="text-[11px] leading-relaxed text-neutral-700 dark:text-neutral-300 bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-md p-4 max-h-[420px] overflow-auto whitespace-pre-wrap font-mono">
            {RESEARCH_PROMPT}
          </pre>
          <p className="mt-3 text-xs text-neutral-500 leading-relaxed">
            {dict.usage("PROJECT:")}
          </p>
        </div>
      )}
    </section>
  );
}
