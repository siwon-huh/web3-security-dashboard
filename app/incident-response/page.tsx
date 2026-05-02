"use client";

import { useState } from "react";
import {
  getContent,
  PROJECT_CONTENT,
  INDIVIDUAL_CONTENT,
  SEAL_PROGRAMS,
} from "@/lib/incident-response";
import type {
  FlowStep,
  PrepGroup,
  PrepItem,
  ResponderView,
} from "@/lib/incident-response";

export default function IncidentResponsePage() {
  const [view, setView] = useState<ResponderView>("project");
  const content = getContent(view);

  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <header className="mb-10">
        <p className="text-[11px] uppercase tracking-[0.2em] text-neutral-500 font-medium">
          Operational Security & Incident Response
        </p>
        <h1 className="mt-3 text-3xl md:text-4xl font-semibold text-neutral-900 dark:text-neutral-50 tracking-tight">
          운영 보안과 사고 대응
        </h1>
        <p className="mt-4 text-neutral-600 dark:text-neutral-400 max-w-3xl leading-relaxed">
          사고는 막을 수 없지만 손실은 줄일 수 있습니다. 사전 준비, 사고 발생 시
          플로우, 그리고 회수 전략을 정리합니다. 프로젝트 운영자와 개인 사용자의
          시각이 다르므로 토글로 전환해서 보세요.
        </p>

        <div className="mt-8 inline-flex rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 p-1">
          <ToggleButton
            active={view === "project"}
            onClick={() => setView("project")}
            label="프로젝트 단위"
            sub={`${PROJECT_CONTENT.preparation.length} groups / ${PROJECT_CONTENT.flow.length} steps`}
          />
          <ToggleButton
            active={view === "individual"}
            onClick={() => setView("individual")}
            label="개인 단위"
            sub={`${INDIVIDUAL_CONTENT.preparation.length} groups / ${INDIVIDUAL_CONTENT.flow.length} steps`}
          />
        </div>
      </header>

      <SealSection currentView={view} />

      <section className="mt-16">
        <SectionHeader
          eyebrow="Preparation"
          title={
            view === "project" ? "사전 준비 (프로젝트)" : "사전 준비 (개인)"
          }
          description={
            view === "project"
              ? "사고는 첫 5분 안에 결정됩니다. 그 5분이 자동화되어 있어야 합니다."
              : "사고가 터지면 30분 안에 회수 가능성이 거의 결정됩니다. 그 30분을 사기 위해 평소에 준비합니다."
          }
        />
        <div className="mt-6 space-y-8">
          {content.preparation.map((group) => (
            <PrepGroupCard key={group.id} group={group} />
          ))}
        </div>
      </section>

      <section className="mt-16">
        <SectionHeader
          eyebrow="Response Flow"
          title={
            view === "project"
              ? "사고 대응 플로우 (프로젝트)"
              : "사고 대응 플로우 (개인)"
          }
          description={
            view === "project"
              ? "Detect → Triage → Contain → Investigate → Communicate → Recover → Post-mortem"
              : "인지 → 잔여 자산 이동 → 신고 → 추적 → 침해 분석 → 공식 신고"
          }
        />
        <ol className="mt-8 relative">
          <div className="absolute left-3 top-2 bottom-2 w-px bg-neutral-200" />
          {content.flow.map((step, idx) => (
            <FlowStepCard key={step.id} step={step} index={idx} />
          ))}
        </ol>
      </section>
    </div>
  );
}

function ToggleButton({
  active,
  onClick,
  label,
  sub,
}: {
  readonly active: boolean;
  readonly onClick: () => void;
  readonly label: string;
  readonly sub: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "px-5 py-2 rounded text-sm font-medium transition-colors text-left",
        active
          ? "bg-neutral-900 text-neutral-50"
          : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-50",
      ].join(" ")}
    >
      <div>{label}</div>
      <div
        className={[
          "text-[10px] uppercase tracking-wider mt-0.5",
          active
            ? "text-neutral-400 dark:text-neutral-600"
            : "text-neutral-400 dark:text-neutral-600",
        ].join(" ")}
      >
        {sub}
      </div>
    </button>
  );
}

function SealSection({ currentView }: { readonly currentView: ResponderView }) {
  const visible = SEAL_PROGRAMS.filter(
    (p) => p.audience === "both" || p.audience === currentView,
  );
  return (
    <section className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6">
      <div className="flex items-baseline justify-between">
        <div>
          <p className="text-[11px] uppercase tracking-[0.2em] text-neutral-500 font-medium">
            Security Alliance
          </p>
          <h2 className="mt-2 text-xl font-semibold text-neutral-900 dark:text-neutral-50 tracking-tight">
            SEAL Alliance
          </h2>
          <p className="mt-1.5 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-3xl">
            samczsun과 다수의 화이트햇이 주축인 비영리 보안 연합. 사고 시 가장
            빠르게 도달 가능한 화이트햇 풀이며, 프로젝트와 개인 모두에 무료로
            열려 있습니다.
          </p>
        </div>
        <a
          href="https://www.securityalliance.org"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-50 underline underline-offset-4 shrink-0 ml-4"
        >
          securityalliance.org →
        </a>
      </div>
      <div className="mt-5 grid gap-3 md:grid-cols-2">
        {visible.map((p) => (
          <a
            key={p.name}
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group block rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 p-4 hover:border-neutral-900 transition-colors"
          >
            <div className="flex items-start justify-between gap-2">
              <div className="flex items-center gap-2.5 min-w-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={p.logoLight}
                  alt=""
                  loading="lazy"
                  className="h-6 w-6 shrink-0 object-contain dark:hidden"
                />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={p.logoDark}
                  alt=""
                  loading="lazy"
                  className="h-6 w-6 shrink-0 object-contain hidden dark:block"
                />
                <h3 className="font-semibold text-neutral-900 dark:text-neutral-50 truncate">
                  {p.name}
                </h3>
              </div>
              <span className="text-neutral-300 dark:text-neutral-700 group-hover:text-neutral-900 dark:group-hover:text-neutral-50 transition-colors text-sm shrink-0">
                →
              </span>
            </div>
            <p className="mt-2 text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
              {p.description}
            </p>
          </a>
        ))}
      </div>
    </section>
  );
}

function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  readonly eyebrow: string;
  readonly title: string;
  readonly description: string;
}) {
  return (
    <div className="border-b border-neutral-200 dark:border-neutral-800 pb-3">
      <p className="text-[11px] uppercase tracking-[0.2em] text-neutral-500 font-medium">
        {eyebrow}
      </p>
      <h2 className="mt-2 text-2xl font-semibold text-neutral-900 dark:text-neutral-50 tracking-tight">
        {title}
      </h2>
      <p className="mt-1 text-sm text-neutral-500 leading-relaxed">
        {description}
      </p>
    </div>
  );
}

function PrepGroupCard({ group }: { readonly group: PrepGroup }) {
  return (
    <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6">
      <h3 className="font-semibold text-neutral-900 dark:text-neutral-50 tracking-tight">
        {group.title}
      </h3>
      <p className="mt-1 text-sm text-neutral-500">{group.description}</p>

      <ul className="mt-5 space-y-5">
        {group.items.map((item, idx) => (
          <PrepItemRow key={`${group.id}-${idx}`} item={item} />
        ))}
      </ul>
    </div>
  );
}

function PrepItemRow({ item }: { readonly item: PrepItem }) {
  return (
    <li className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-3 md:gap-6 pb-5 border-b border-neutral-100 dark:border-neutral-900 last:border-0 last:pb-0">
      <div>
        <h4 className="font-medium text-neutral-900 dark:text-neutral-50 leading-snug">
          {item.title}
        </h4>
        {item.tools && item.tools.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1.5">
            {item.tools.map((t) => (
              <a
                key={t.name}
                href={t.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded border border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 bg-neutral-50 dark:bg-neutral-900 hover:border-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-50 transition-colors"
              >
                {t.name}
              </a>
            ))}
          </div>
        )}
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
        {item.detail}
      </p>
    </li>
  );
}

function FlowStepCard({
  step,
  index,
}: {
  readonly step: FlowStep;
  readonly index: number;
}) {
  return (
    <li className="relative pl-12 pb-8 last:pb-0">
      <div className="absolute left-0 top-0 h-7 w-7 rounded-full bg-neutral-900 text-neutral-50 text-xs font-semibold flex items-center justify-center tabular-nums z-10">
        {index + 1}
      </div>
      <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-5">
        <div className="flex items-baseline justify-between gap-3 flex-wrap">
          <h3 className="font-semibold text-neutral-900 dark:text-neutral-50 tracking-tight">
            {step.phase}
          </h3>
          <span className="text-[11px] uppercase tracking-widest text-neutral-500 tabular-nums">
            {step.timing}
          </span>
        </div>
        <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
          {step.summary}
        </p>
        <ul className="mt-4 space-y-2">
          {step.actions.map((action, idx) => (
            <li
              key={idx}
              className={[
                "text-sm leading-relaxed pl-4 relative",
                action.emphasis
                  ? "text-neutral-900 dark:text-neutral-50 font-medium"
                  : "text-neutral-700 dark:text-neutral-300",
              ].join(" ")}
            >
              <span
                className={[
                  "absolute left-0 top-2 h-1 w-1 rounded-full",
                  action.emphasis ? "bg-neutral-900" : "bg-neutral-400",
                ].join(" ")}
              />
              {action.text}
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
}
