"use client";

import { useState } from "react";
import { RESEARCH_PROMPT } from "@/lib/research-prompt";

export function ResearchPromptBox() {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

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
              Research Prompt
            </span>
            <span className="text-[10px] uppercase tracking-wider px-1.5 py-0.5 rounded border border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 bg-neutral-50 dark:bg-neutral-900">
              LLM
            </span>
          </div>
          <p className="mt-1.5 text-sm text-neutral-700 dark:text-neutral-300 font-medium">
            정보를 직접 못 찾겠다면, 이 프롬프트로 LLM(ChatGPT, Claude, Gemini 등)에 위임하세요
          </p>
          <p className="mt-0.5 text-xs text-neutral-500">
            24개 항목을 우리 체크리스트 옵션값과 매핑된 형식으로 답해주도록 설계됨
          </p>
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
              {RESEARCH_PROMPT.length.toLocaleString()} characters
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
              {copied ? "Copied" : "Copy prompt"}
            </button>
          </div>
          <pre className="text-[11px] leading-relaxed text-neutral-700 dark:text-neutral-300 bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-md p-4 max-h-[420px] overflow-auto whitespace-pre-wrap font-mono">
            {RESEARCH_PROMPT}
          </pre>
          <p className="mt-3 text-xs text-neutral-500 leading-relaxed">
            사용법: 위 프롬프트를 복사하고 첫 줄의{" "}
            <code className="px-1 py-0.5 rounded bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
              PROJECT:
            </code>{" "}
            라인을 평가할 프로젝트 이름과 URL로 채운 뒤, 웹 검색이 가능한 LLM에게 붙여넣으세요. 결과를 받아 위 체크리스트 옵션을 같은 값으로 선택하면 됩니다.
          </p>
        </div>
      )}
    </section>
  );
}
