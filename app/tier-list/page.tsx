import {
  CATEGORY_META,
  firmsByTier,
  firmsByTierAndCategory,
  ORDERED_CATEGORIES,
  ORDERED_TIERS,
  TIER_META,
} from "@/lib/audit-firms";
import { FirmCard } from "@/components/FirmCard";
import { TierBadge } from "@/components/TierBadge";

export const metadata = {
  title: "Web3 Audit Firms",
};

export default function TierListPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <header className="mb-12">
        <p className="text-[11px] uppercase tracking-[0.2em] text-neutral-500 font-medium">
          Tier List
        </p>
        <h1 className="mt-3 text-3xl md:text-4xl font-semibold text-neutral-900 tracking-tight">
          Web3 오딧 펌 티어
        </h1>
        <p className="mt-4 text-neutral-600 max-w-3xl leading-relaxed">
          공개된 오딧 보고서, 인시던트 이력, 도구 체인의 깊이, 업계 평판을 종합한 휴리스틱 분류입니다.
          같은 티어 안에서도 주력 영역이 다르므로 카테고리별로 함께 분류했습니다.
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {ORDERED_CATEGORIES.map((cat) => (
            <span
              key={cat}
              className="text-xs px-2.5 py-1 rounded-md border border-neutral-200 bg-white text-neutral-700"
            >
              {CATEGORY_META[cat].label}
            </span>
          ))}
        </div>
      </header>

      <div className="space-y-14">
        {ORDERED_TIERS.map((tier) => {
          const firms = firmsByTier(tier);
          if (firms.length === 0) return null;
          const meta = TIER_META[tier];
          return (
            <section key={tier}>
              <div className="flex items-center gap-4 mb-6 pb-4 border-b border-neutral-200">
                <TierBadge tier={tier} size="lg" />
                <div className="flex-1">
                  <h2 className="text-2xl font-semibold text-neutral-900 tracking-tight">
                    {meta.label}
                  </h2>
                  <p className="text-sm text-neutral-500 mt-0.5">
                    {meta.description}
                  </p>
                </div>
                <span className="text-[11px] uppercase tracking-widest text-neutral-400 tabular-nums">
                  {firms.length} firms
                </span>
              </div>

              <div className="space-y-8">
                {ORDERED_CATEGORIES.map((cat) => {
                  const subset = firmsByTierAndCategory(tier, cat);
                  if (subset.length === 0) return null;
                  const catMeta = CATEGORY_META[cat];
                  return (
                    <div key={cat}>
                      <div className="flex items-baseline justify-between mb-3">
                        <h3 className="text-[11px] uppercase tracking-[0.18em] font-medium text-neutral-500">
                          {catMeta.label}
                        </h3>
                        <span className="text-[11px] text-neutral-400 tabular-nums">
                          {subset.length}
                        </span>
                      </div>
                      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {subset.map((firm) => (
                          <FirmCard key={firm.name} firm={firm} />
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
