import Link from "next/link";
import { CHECKLIST } from "@/lib/checklist";
import { AUDIT_FIRMS, ORDERED_TIERS } from "@/lib/audit-firms";

export default function HomePage() {
  const totalWeight = CHECKLIST.reduce(
    (acc, cat) => acc + cat.items.reduce((a, i) => a + i.weight, 0),
    0,
  );
  const totalItems = CHECKLIST.reduce((acc, cat) => acc + cat.items.length, 0);

  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <section className="grid gap-12 md:grid-cols-[1.5fr_1fr] items-start">
        <div>
          <p className="text-[11px] uppercase tracking-[0.2em] text-neutral-500 font-medium">
            Web3 Security
          </p>
          <h1 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight text-neutral-900 leading-[1.1]">
            오딧 펌 티어와
            <br />
            보안 체크리스트로
            <br />
            <span className="text-neutral-400">프로젝트 점수화</span>
          </h1>
          <p className="mt-6 text-neutral-600 leading-relaxed max-w-lg">
            Web3 프로젝트의 보안 성숙도를 빠르게 평가하기 위한 도구입니다. 주요
            오딧 펌들의 티어 리스트와, 6개 카테고리 / {totalItems}개 항목의
            체크리스트로 0-100점 점수와 등급을 산출합니다.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/scoring"
              className="px-5 py-2.5 rounded-md bg-neutral-900 hover:bg-neutral-700 text-neutral-50 font-medium transition-colors"
            >
              점수 매기기 시작 →
            </Link>
            <Link
              href="/tier-list"
              className="px-5 py-2.5 rounded-md border border-neutral-300 hover:border-neutral-900 text-neutral-900 font-medium transition-colors"
            >
              오딧 펌 티어 보기
            </Link>
          </div>
        </div>

        <div className="rounded-xl border border-neutral-200 bg-white p-6">
          <h2 className="text-[11px] uppercase tracking-widest text-neutral-500 font-medium">
            At a glance
          </h2>
          <dl className="mt-5 grid grid-cols-2 gap-y-6 gap-x-4">
            <Stat label="Audit firms" value={AUDIT_FIRMS.length.toString()} />
            <Stat label="Tier levels" value={ORDERED_TIERS.length.toString()} />
            <Stat label="Checklist items" value={totalItems.toString()} />
            <Stat label="Total weight" value={totalWeight.toString()} />
          </dl>
        </div>
      </section>

      <section className="mt-24">
        <p className="text-[11px] uppercase tracking-widest text-neutral-500 font-medium">
          Categories
        </p>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight text-neutral-900">
          6개 보안 평가 영역
        </h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {CHECKLIST.map((cat, idx) => (
            <div
              key={cat.id}
              className="rounded-xl border border-neutral-200 bg-white p-6 hover:border-neutral-900 transition-colors"
            >
              <div className="flex items-start justify-between">
                <h3 className="font-semibold text-neutral-900 tracking-tight">
                  {cat.title}
                </h3>
                <span className="text-[11px] tabular-nums text-neutral-400">
                  0{idx + 1}
                </span>
              </div>
              <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
                {cat.description}
              </p>
              <p className="mt-5 text-[11px] uppercase tracking-wider text-neutral-500">
                {cat.items.length} items /{" "}
                {cat.items.reduce((a, i) => a + i.weight, 0)} weight
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function Stat({
  label,
  value,
}: {
  readonly label: string;
  readonly value: string;
}) {
  return (
    <div>
      <dt className="text-[11px] uppercase tracking-widest text-neutral-500">
        {label}
      </dt>
      <dd className="text-3xl font-semibold text-neutral-900 tabular-nums mt-1 tracking-tight">
        {value}
      </dd>
    </div>
  );
}
