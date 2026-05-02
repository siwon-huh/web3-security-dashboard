import Link from "next/link";
import { CHECKLIST } from "@/lib/checklist";
import { AUDIT_FIRMS, ORDERED_TIERS } from "@/lib/audit-firms";
import { isLang, type Lang } from "@/lib/i18n";
import { notFound } from "next/navigation";

const HOME_DICT: Readonly<
  Record<
    Lang,
    {
      eyebrow: string;
      title: ReadonlyArray<string>;
      titleAccent: string;
      description: (totalItems: number) => string;
      ctaScore: string;
      ctaTier: string;
      atGlance: string;
      auditFirms: string;
      tierLevels: string;
      checklistItems: string;
      totalWeight: string;
      categoriesEyebrow: string;
      categoriesTitle: string;
      itemsLabel: string;
      weightLabel: string;
    }
  >
> = {
  ko: {
    eyebrow: "Web3 Security",
    title: ["오딧 펌 티어와", "보안 체크리스트로"],
    titleAccent: "프로젝트 점수화",
    description: (n) =>
      `Web3 프로젝트의 보안 성숙도를 빠르게 평가하기 위한 도구입니다. 주요 오딧 펌들의 티어 리스트와, 6개 카테고리 / ${n}개 항목의 체크리스트로 0-100점 점수와 등급을 산출합니다.`,
    ctaScore: "점수 매기기 시작 →",
    ctaTier: "오딧 펌 티어 보기",
    atGlance: "At a glance",
    auditFirms: "Audit firms",
    tierLevels: "Tier levels",
    checklistItems: "Checklist items",
    totalWeight: "Total weight",
    categoriesEyebrow: "Categories",
    categoriesTitle: "6개 보안 평가 영역",
    itemsLabel: "items",
    weightLabel: "weight",
  },
  en: {
    eyebrow: "Web3 Security",
    title: ["Score your project", "with audit firm tiers"],
    titleAccent: "and a security checklist",
    description: (n) =>
      `A tool to quickly assess the security maturity of Web3 projects. Combines a tier list of major audit firms with a checklist of ${n} items across 6 categories to produce a 0-100 score and grade.`,
    ctaScore: "Start scoring →",
    ctaTier: "Browse audit firm tiers",
    atGlance: "At a glance",
    auditFirms: "Audit firms",
    tierLevels: "Tier levels",
    checklistItems: "Checklist items",
    totalWeight: "Total weight",
    categoriesEyebrow: "Categories",
    categoriesTitle: "Six evaluation domains",
    itemsLabel: "items",
    weightLabel: "weight",
  },
};

const CHECKLIST_TITLES: Readonly<
  Record<string, Readonly<Record<Lang, string>>>
> = {
  audit: { ko: "스마트 컨트랙트 오딧", en: "Smart contract audits" },
  "code-quality": { ko: "코드 품질", en: "Code quality" },
  ops: { ko: "운영 보안", en: "Operational security" },
  bounty: { ko: "버그 바운티", en: "Bug bounty" },
  decentralization: {
    ko: "탈중앙화 / 의존성",
    en: "Decentralization / dependencies",
  },
  incident: { ko: "인시던트 대응", en: "Incident response" },
};

const CHECKLIST_DESCRIPTIONS: Readonly<
  Record<string, Readonly<Record<Lang, string>>>
> = {
  audit: {
    ko: "외부 보안 감사 수행 여부와 품질을 평가합니다.",
    en: "Evaluates whether external security audits exist and how rigorous they are.",
  },
  "code-quality": {
    ko: "테스트, 문서화, 정형 검증 등 엔지니어링 성숙도.",
    en: "Engineering maturity: tests, documentation, formal verification.",
  },
  ops: {
    ko: "관리자 키, 업그레이드, 타임락 등 거버넌스/운영 통제.",
    en: "Admin keys, upgrade paths, timelocks, and operational controls.",
  },
  bounty: {
    ko: "외부 화이트햇 인센티브의 규모와 운영.",
    en: "Size and operation of external whitehat incentives.",
  },
  decentralization: {
    ko: "오라클, 브릿지, 거버넌스 등 외부 의존성 리스크.",
    en: "Oracle, bridge, and governance dependency risks.",
  },
  incident: {
    ko: "사고 이력과 대응 투명성.",
    en: "Incident history and response transparency.",
  },
};

export default async function HomePage({
  params,
}: {
  readonly params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  const dict = HOME_DICT[lang];

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
            {dict.eyebrow}
          </p>
          <h1 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-50 leading-[1.1]">
            {dict.title.map((line, i) => (
              <span key={i}>
                {line}
                <br />
              </span>
            ))}
            <span className="text-neutral-400 dark:text-neutral-600">
              {dict.titleAccent}
            </span>
          </h1>
          <p className="mt-6 text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-lg">
            {dict.description(totalItems)}
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href={`/${lang}/scoring`}
              className="px-5 py-2.5 rounded-md bg-neutral-900 hover:bg-neutral-700 text-neutral-50 font-medium transition-colors"
            >
              {dict.ctaScore}
            </Link>
            <Link
              href={`/${lang}/tier-list`}
              className="px-5 py-2.5 rounded-md border border-neutral-300 dark:border-neutral-700 hover:border-neutral-900 text-neutral-900 dark:text-neutral-50 font-medium transition-colors"
            >
              {dict.ctaTier}
            </Link>
          </div>
        </div>

        <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6">
          <h2 className="text-[11px] uppercase tracking-widest text-neutral-500 font-medium">
            {dict.atGlance}
          </h2>
          <dl className="mt-5 grid grid-cols-2 gap-y-6 gap-x-4">
            <Stat
              label={dict.auditFirms}
              value={AUDIT_FIRMS.length.toString()}
            />
            <Stat
              label={dict.tierLevels}
              value={ORDERED_TIERS.length.toString()}
            />
            <Stat label={dict.checklistItems} value={totalItems.toString()} />
            <Stat label={dict.totalWeight} value={totalWeight.toString()} />
          </dl>
        </div>
      </section>

      <section className="mt-24">
        <p className="text-[11px] uppercase tracking-widest text-neutral-500 font-medium">
          {dict.categoriesEyebrow}
        </p>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-50">
          {dict.categoriesTitle}
        </h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {CHECKLIST.map((cat, idx) => (
            <div
              key={cat.id}
              className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6 hover:border-neutral-900 transition-colors"
            >
              <div className="flex items-start justify-between">
                <h3 className="font-semibold text-neutral-900 dark:text-neutral-50 tracking-tight">
                  {CHECKLIST_TITLES[cat.id]?.[lang] ?? cat.title}
                </h3>
                <span className="text-[11px] tabular-nums text-neutral-400 dark:text-neutral-600">
                  0{idx + 1}
                </span>
              </div>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                {CHECKLIST_DESCRIPTIONS[cat.id]?.[lang] ?? cat.description}
              </p>
              <p className="mt-5 text-[11px] uppercase tracking-wider text-neutral-500">
                {cat.items.length} {dict.itemsLabel} /{" "}
                {cat.items.reduce((a, i) => a + i.weight, 0)}{" "}
                {dict.weightLabel}
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
      <dd className="text-3xl font-semibold text-neutral-900 dark:text-neutral-50 tabular-nums mt-1 tracking-tight">
        {value}
      </dd>
    </div>
  );
}
