import {
  ECOSYSTEM_CATEGORY_META,
  entitiesByCategory,
  ORDERED_ECOSYSTEM_CATEGORIES,
  SECURITY_ENTITIES,
} from "@/lib/ecosystem";
import { EntityCard } from "@/components/EntityCard";

export const metadata = {
  title: "Web3 Security Ecosystem",
};

export default function EcosystemPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <header className="mb-12">
        <p className="text-[11px] uppercase tracking-[0.2em] text-neutral-500 font-medium">
          Security Ecosystem
        </p>
        <h1 className="mt-3 text-3xl md:text-4xl font-semibold text-neutral-900 tracking-tight">
          오딧 펌 외 보안 생태계
        </h1>
        <p className="mt-4 text-neutral-600 max-w-3xl leading-relaxed">
          모니터링, 버그 바운티, 인시던트 대응, 포렌식, 오픈소스 도구 등 오딧이
          아닌 보안 영역의 회사들과 도구를 정리합니다. 점수 평가 시 운영 보안,
          바운티, 인시던트 항목과 직접 연결되는 레퍼런스입니다.
        </p>

        <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm">
          <Stat label="Entities" value={SECURITY_ENTITIES.length} />
          <Stat
            label="Categories"
            value={ORDERED_ECOSYSTEM_CATEGORIES.length}
          />
          <Stat
            label="Open Source"
            value={SECURITY_ENTITIES.filter((e) => e.openSource).length}
          />
          <Stat
            label="Monitoring"
            value={entitiesByCategory("monitoring").length}
          />
        </div>
      </header>

      <div className="space-y-12">
        {ORDERED_ECOSYSTEM_CATEGORIES.map((cat) => {
          const items = entitiesByCategory(cat);
          if (items.length === 0) return null;
          const meta = ECOSYSTEM_CATEGORY_META[cat];
          return (
            <section key={cat}>
              <div className="flex items-baseline justify-between mb-4 pb-3 border-b border-neutral-200">
                <div>
                  <h2 className="text-xl font-semibold text-neutral-900 tracking-tight">
                    {meta.label}
                  </h2>
                  <p className="text-sm text-neutral-500 mt-0.5">
                    {meta.description}
                  </p>
                </div>
                <span className="text-[11px] uppercase tracking-widest text-neutral-400 tabular-nums shrink-0 ml-4">
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
    <div className="rounded-md border border-neutral-200 bg-white px-3 py-2">
      <div className="text-[10px] uppercase tracking-widest text-neutral-500">
        {label}
      </div>
      <div className="text-xl font-semibold text-neutral-900 tabular-nums mt-0.5">
        {value}
      </div>
    </div>
  );
}
