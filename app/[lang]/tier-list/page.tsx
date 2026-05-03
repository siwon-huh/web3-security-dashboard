import {
  firmsByTier,
  firmsByTierAndCategory,
  ORDERED_CATEGORIES,
  ORDERED_TIERS,
} from "@/lib/audit-firms";
import { FirmCard } from "@/components/FirmCard";
import { TierBadge } from "@/components/TierBadge";
import { isLang, type Lang } from "@/lib/i18n";
import { notFound } from "next/navigation";
import type { FirmCategory, Tier } from "@/lib/types";

export const metadata = {
  title: "Web3 Audit Firms",
};

const PAGE_DICT: Readonly<
  Record<
    Lang,
    {
      eyebrow: string;
      title: string;
      description: string;
      firmsLabel: string;
    }
  >
> = {
  ko: {
    eyebrow: "Tier List",
    title: "Web3 오딧 펌 티어",
    description:
      "공개된 오딧 보고서, 인시던트 이력, 도구 체인의 깊이, 업계 평판을 종합한 휴리스틱 분류입니다. 같은 티어 안에서도 주력 영역이 다르므로 카테고리별로 함께 분류했습니다.",
    firmsLabel: "firms",
  },
  en: {
    eyebrow: "Tier List",
    title: "Web3 Audit Firm Tiers",
    description:
      "A heuristic ranking based on published audit reports, incident history, depth of tooling, and industry reputation. Within each tier, firms are grouped by their primary focus area.",
    firmsLabel: "firms",
  },
};

const TIER_LABELS: Readonly<Record<Tier, Readonly<Record<Lang, string>>>> = {
  S: { ko: "S Tier", en: "S Tier" },
  "A+": { ko: "A+ Tier", en: "A+ Tier" },
  A: { ko: "A Tier", en: "A Tier" },
  B: { ko: "B Tier", en: "B Tier" },
  C: { ko: "C Tier", en: "C Tier" },
};

const TIER_DESCRIPTIONS: Readonly<
  Record<Tier, Readonly<Record<Lang, string>>>
> = {
  S: {
    ko: "업계 최상위. 대형 프로토콜의 표준이며 비용이 높고 대기열이 길다.",
    en: "Industry top tier. The standard for major protocols. High cost and long queues.",
  },
  "A+": {
    ko: "S에 근접한 강한 평판. 메이저 프로토콜에서 자주 선택된다.",
    en: "Near-S reputation. Frequently chosen by major protocols.",
  },
  A: {
    ko: "검증된 실력. 메이저 디파이 및 체인 프로젝트에서 신뢰받는 펌.",
    en: "Proven capability. Trusted by major DeFi and L1/L2 projects.",
  },
  B: {
    ko: "합리적 가격대로 승부하는 미드티어, 과거 활발했으나 현재는 활동량이 줄어든 펌, 또는 잦은 클라이언트 해킹으로 명성이 떨어진 펌.",
    en: "Mid-tier firms competing on price, formerly active firms with declining output, or firms whose reputation has eroded from frequent client incidents.",
  },
  C: {
    ko: "저가형 양산 오딧이거나, 트랙 레코드가 빈약하고 메이저 프로젝트 오딧 경험이 없는 펌.",
    en: "Low-cost mass-production auditors, or firms with thin track records and no major project audits.",
  },
};

const CATEGORY_LABELS: Readonly<
  Record<FirmCategory, Readonly<Record<Lang, string>>>
> = {
  "smart-contract": {
    ko: "General Smart Contract",
    en: "General Smart Contract",
  },
  cryptography: { ko: "Cryptography & ZK", en: "Cryptography & ZK" },
  "formal-verification": {
    ko: "Formal Verification",
    en: "Formal Verification",
  },
};

export default async function TierListPage({
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

        <div className="mt-6 flex flex-wrap gap-2">
          {ORDERED_CATEGORIES.map((cat) => (
            <span
              key={cat}
              className="text-xs px-2.5 py-1 rounded-md border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300"
            >
              {CATEGORY_LABELS[cat][lang]}
            </span>
          ))}
        </div>
      </header>

      <div className="space-y-14">
        {ORDERED_TIERS.map((tier) => {
          const firms = firmsByTier(tier);
          if (firms.length === 0) return null;
          return (
            <section key={tier}>
              <div className="flex items-center gap-4 mb-6 pb-4 border-b border-neutral-200 dark:border-neutral-800">
                <TierBadge tier={tier} size="lg" />
                <div className="flex-1">
                  <h2 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-50 tracking-tight">
                    {TIER_LABELS[tier][lang]}
                  </h2>
                  <p className="text-sm text-neutral-500 mt-0.5">
                    {TIER_DESCRIPTIONS[tier][lang]}
                  </p>
                </div>
                <span className="text-[11px] uppercase tracking-widest text-neutral-400 dark:text-neutral-600 tabular-nums">
                  {firms.length} {dict.firmsLabel}
                </span>
              </div>

              <div className="space-y-8">
                {ORDERED_CATEGORIES.map((cat) => {
                  const subset = firmsByTierAndCategory(tier, cat);
                  if (subset.length === 0) return null;
                  return (
                    <div key={cat}>
                      <div className="flex items-baseline justify-between mb-3">
                        <h3 className="text-[11px] uppercase tracking-[0.18em] font-medium text-neutral-500">
                          {CATEGORY_LABELS[cat][lang]}
                        </h3>
                        <span className="text-[11px] text-neutral-400 dark:text-neutral-600 tabular-nums">
                          {subset.length}
                        </span>
                      </div>
                      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {subset.map((firm) => (
                          <FirmCard key={firm.name} firm={firm} lang={lang} />
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
