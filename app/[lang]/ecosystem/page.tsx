import {
  entitiesByCategory,
  ORDERED_ECOSYSTEM_CATEGORIES,
  SECURITY_ENTITIES,
} from "@/lib/ecosystem";
import type { EcosystemCategory } from "@/lib/ecosystem";
import { EntityCard } from "@/components/EntityCard";
import { isLang, type Lang } from "@/lib/i18n";
import { notFound } from "next/navigation";

export const metadata = {
  title: "Web3 Security Ecosystem",
};

const PAGE_DICT: Readonly<
  Record<
    Lang,
    {
      eyebrow: string;
      title: string;
      description: string;
      entities: string;
      categories: string;
      openSource: string;
      monitoring: string;
    }
  >
> = {
  ko: {
    eyebrow: "Security Ecosystem",
    title: "오딧 펌 외 보안 생태계",
    description:
      "모니터링, 버그 바운티, 인시던트 대응, 포렌식, 오픈소스 도구 등 오딧이 아닌 보안 영역의 회사들과 도구를 정리합니다. 점수 평가 시 운영 보안, 바운티, 인시던트 항목과 직접 연결되는 레퍼런스입니다.",
    entities: "Entities",
    categories: "Categories",
    openSource: "Open Source",
    monitoring: "Monitoring",
  },
  en: {
    eyebrow: "Security Ecosystem",
    title: "Beyond audit firms",
    description:
      "A directory of companies and tools across monitoring, bug bounty, incident response, forensics, and open-source tooling. Reference material directly tied to the operational security, bounty, and incident sections of the scoring checklist.",
    entities: "Entities",
    categories: "Categories",
    openSource: "Open Source",
    monitoring: "Monitoring",
  },
};

const CATEGORY_LABELS: Readonly<
  Record<EcosystemCategory, Readonly<Record<Lang, { label: string; description: string }>>>
> = {
  monitoring: {
    ko: {
      label: "Monitoring & Detection",
      description: "온체인 트랜잭션 실시간 모니터링과 위협 탐지를 제공.",
    },
    en: {
      label: "Monitoring & Detection",
      description: "Real-time transaction monitoring and threat detection on-chain.",
    },
  },
  "llm-agent": {
    ko: {
      label: "LLM Audit Agent",
      description: "LLM과 AI 기반의 자동 또는 보조 오딧 에이전트.",
    },
    en: {
      label: "LLM Audit Agent",
      description: "LLM and AI-driven automated or pair-auditor agents.",
    },
  },
  tooling: {
    ko: {
      label: "Open-source Tools",
      description: "정형 분석, 퍼징, 심볼릭 실행 등 오픈소스 보안 도구.",
    },
    en: {
      label: "Open-source Tools",
      description: "Open-source tools for static analysis, fuzzing, and symbolic execution.",
    },
  },
  bounty: {
    ko: {
      label: "Bug Bounty Platform",
      description: "외부 화이트햇과의 협업을 중개하는 바운티 플랫폼.",
    },
    en: {
      label: "Bug Bounty Platform",
      description: "Platforms that broker collaboration with external whitehats.",
    },
  },
  insurance: {
    ko: {
      label: "Coverage & Insurance",
      description: "스마트 컨트랙트 익스플로잇에 대한 보험 또는 커버리지.",
    },
    en: {
      label: "Coverage & Insurance",
      description: "Insurance and cover products for smart contract exploits.",
    },
  },
  wallet: {
    ko: {
      label: "Wallet & UX Security",
      description: "지갑 사용자 보호, 피싱 차단, 트랜잭션 시뮬레이션.",
    },
    en: {
      label: "Wallet & UX Security",
      description: "Wallet user protection, phishing detection, and transaction simulation.",
    },
  },
  incident: {
    ko: {
      label: "Incident Response",
      description: "사고 대응 전용 조직과 화이트햇 연합.",
    },
    en: {
      label: "Incident Response",
      description: "Incident response organizations and whitehat coalitions.",
    },
  },
  forensics: {
    ko: {
      label: "Forensics & Compliance",
      description: "온체인 자금 추적, 컴플라이언스, 자금세탁 분석.",
    },
    en: {
      label: "Forensics & Compliance",
      description: "On-chain fund tracing, compliance, and AML analytics.",
    },
  },
};

export default async function EcosystemPage({
  params,
}: {
  readonly params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  const dict = PAGE_DICT[lang];

  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <header className="mb-12">
        <p className="text-[11px] uppercase tracking-[0.2em] text-neutral-500 font-medium">
          {dict.eyebrow}
        </p>
        <h1 className="mt-3 text-3xl md:text-4xl font-semibold text-neutral-900 dark:text-neutral-50 tracking-tight">
          {dict.title}
        </h1>
        <p className="mt-4 text-neutral-600 dark:text-neutral-400 max-w-3xl leading-relaxed">
          {dict.description}
        </p>

        <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm">
          <Stat label={dict.entities} value={SECURITY_ENTITIES.length} />
          <Stat
            label={dict.categories}
            value={ORDERED_ECOSYSTEM_CATEGORIES.length}
          />
          <Stat
            label={dict.openSource}
            value={SECURITY_ENTITIES.filter((e) => e.openSource).length}
          />
          <Stat
            label={dict.monitoring}
            value={entitiesByCategory("monitoring").length}
          />
        </div>
      </header>

      <div className="space-y-12">
        {ORDERED_ECOSYSTEM_CATEGORIES.map((cat) => {
          const items = entitiesByCategory(cat);
          if (items.length === 0) return null;
          const meta = CATEGORY_LABELS[cat][lang];
          return (
            <section key={cat}>
              <div className="flex items-baseline justify-between mb-4 pb-3 border-b border-neutral-200 dark:border-neutral-800">
                <div>
                  <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-50 tracking-tight">
                    {meta.label}
                  </h2>
                  <p className="text-sm text-neutral-500 mt-0.5">
                    {meta.description}
                  </p>
                </div>
                <span className="text-[11px] uppercase tracking-widest text-neutral-400 dark:text-neutral-600 tabular-nums shrink-0 ml-4">
                  {items.length}
                </span>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((entity) => (
                  <EntityCard key={entity.name} entity={entity} />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}

function Stat({
  label,
  value,
}: {
  readonly label: string;
  readonly value: number;
}) {
  return (
    <div className="rounded-md border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 px-3 py-2">
      <div className="text-[10px] uppercase tracking-widest text-neutral-500">
        {label}
      </div>
      <div className="text-xl font-semibold text-neutral-900 dark:text-neutral-50 tabular-nums mt-0.5">
        {value}
      </div>
    </div>
  );
}
