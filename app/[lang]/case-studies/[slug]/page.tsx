import { notFound } from "next/navigation";
import Link from "next/link";
import { CASE_STUDIES, getCaseStudy } from "@/lib/case-studies";
import { AUDIT_FIRMS } from "@/lib/audit-firms";
import { firmLogoUrl } from "@/lib/logo";
import { TierBadge } from "@/components/TierBadge";
import { isLang, LANGS, type Lang } from "@/lib/i18n";
import type { Metadata } from "next";

const DICT: Readonly<
  Record<
    Lang,
    {
      back: string;
      eyebrow: string;
      auditsEyebrow: string;
      auditsTitle: (n: number) => string;
      auditsDescription: string;
      opsEyebrow: string;
      opsTitle: string;
      opsDescription: string;
      takeaway: string;
      dateCol: string;
      firmCol: string;
      tierCol: string;
      scopeCol: string;
      reportCol: string;
    }
  >
> = {
  ko: {
    back: "← Best Cases",
    eyebrow: "Security Best Case",
    auditsEyebrow: "Audits",
    auditsTitle: (n) => `${n}건의 독립 오딧`,
    auditsDescription:
      "서로 다른 펌, 서로 다른 방법론(수동, 정형, 컨테스트, invariant)으로 다층 검증.",
    opsEyebrow: "Operational Setup",
    opsTitle: "운영 보안 셋업",
    opsDescription:
      "단일 키 탈취가 즉시 손실로 이어지지 않도록 설계된 다층 통제.",
    takeaway: "Takeaway",
    dateCol: "Date",
    firmCol: "Firm",
    tierCol: "Tier",
    scopeCol: "Scope",
    reportCol: "Report",
  },
  en: {
    back: "← Best Cases",
    eyebrow: "Security Best Case",
    auditsEyebrow: "Audits",
    auditsTitle: (n) => `${n} independent audits`,
    auditsDescription:
      "Layered verification across different firms and methodologies (manual, formal, contest, invariant).",
    opsEyebrow: "Operational Setup",
    opsTitle: "Operational security setup",
    opsDescription:
      "Multi-layer controls designed so a single key compromise does not translate into immediate loss.",
    takeaway: "Takeaway",
    dateCol: "Date",
    firmCol: "Firm",
    tierCol: "Tier",
    scopeCol: "Scope",
    reportCol: "Report",
  },
};

function lookupAuditorWebsite(firmName: string): string | undefined {
  const known = AUDIT_FIRMS.find((f) => f.name === firmName);
  return known?.website;
}

export function generateStaticParams() {
  return LANGS.flatMap((lang) =>
    CASE_STUDIES.map((c) => ({ lang, slug: c.slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  return {
    title: cs ? `${cs.name} — Security Best Case` : "Case Study",
  };
}

export default async function CaseStudyDetailPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  if (!isLang(lang)) notFound();
  const dict = DICT[lang];
  const cs = getCaseStudy(slug);
  if (!cs) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <Link
        href={`/${lang}/case-studies`}
        className="text-xs text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-50 transition-colors"
      >
        {dict.back}
      </Link>

      <header className="mt-6 mb-10">
        <p className="text-[11px] uppercase tracking-[0.2em] text-neutral-500 font-medium">
          {dict.eyebrow}
        </p>
        <h1 className="mt-3 text-4xl md:text-5xl font-semibold text-neutral-900 dark:text-neutral-50 tracking-tight">
          {cs.name}
        </h1>
        <p className="mt-2 text-lg text-neutral-500">{cs.tagline}</p>

        <div className="mt-6 flex flex-wrap gap-3 text-sm">
          <a
            href={cs.website}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-1.5 rounded-md border border-neutral-300 dark:border-neutral-700 hover:border-neutral-900 text-neutral-900 dark:text-neutral-50 transition-colors"
          >
            Website →
          </a>
          {cs.docsUrl && (
            <a
              href={cs.docsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-1.5 rounded-md border border-neutral-300 dark:border-neutral-700 hover:border-neutral-900 text-neutral-900 dark:text-neutral-50 transition-colors"
            >
              Docs →
            </a>
          )}
          {cs.githubUrl && (
            <a
              href={cs.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-1.5 rounded-md border border-neutral-300 dark:border-neutral-700 hover:border-neutral-900 text-neutral-900 dark:text-neutral-50 transition-colors"
            >
              GitHub →
            </a>
          )}
        </div>

        <p className="mt-8 text-neutral-700 dark:text-neutral-300 max-w-3xl leading-relaxed">
          {cs.summary}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {cs.highlights.map((h) => (
            <span
              key={h}
              className="text-xs px-2.5 py-1 rounded-md border border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200"
            >
              {h}
            </span>
          ))}
        </div>
      </header>

      <section className="mb-14">
        <SectionHeader
          eyebrow={dict.auditsEyebrow}
          title={dict.auditsTitle(cs.audits.length)}
          description={dict.auditsDescription}
        />
        <div className="mt-6 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-neutral-50 dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800">
              <tr>
                <th className="text-left text-[11px] uppercase tracking-widest text-neutral-500 font-medium px-5 py-3">
                  {dict.dateCol}
                </th>
                <th className="text-left text-[11px] uppercase tracking-widest text-neutral-500 font-medium px-5 py-3">
                  {dict.firmCol}
                </th>
                <th className="text-left text-[11px] uppercase tracking-widest text-neutral-500 font-medium px-5 py-3">
                  {dict.tierCol}
                </th>
                <th className="text-left text-[11px] uppercase tracking-widest text-neutral-500 font-medium px-5 py-3">
                  {dict.scopeCol}
                </th>
                <th className="text-left text-[11px] uppercase tracking-widest text-neutral-500 font-medium px-5 py-3">
                  {dict.reportCol}
                </th>
              </tr>
            </thead>
            <tbody>
              {cs.audits.map((a, idx) => (
                <tr
                  key={`${a.firm}-${a.date}`}
                  className={
                    idx === cs.audits.length - 1
                      ? ""
                      : "border-b border-neutral-100 dark:border-neutral-900"
                  }
                >
                  <td className="px-5 py-3 text-neutral-700 dark:text-neutral-300 tabular-nums whitespace-nowrap">
                    {a.date}
                  </td>
                  <td className="px-5 py-3 font-medium text-neutral-900 dark:text-neutral-50">
                    <span className="flex items-center gap-2.5">
                      {(() => {
                        const site = lookupAuditorWebsite(a.firm);
                        if (!site) return null;
                        // eslint-disable-next-line @next/next/no-img-element
                        return (
                          <img
                            src={firmLogoUrl(site, 64, a.firm)}
                            alt=""
                            loading="lazy"
                            className="h-5 w-5 rounded shrink-0 object-contain"
                          />
                        );
                      })()}
                      <span>{a.firm}</span>
                    </span>
                  </td>
                  <td className="px-5 py-3">
                    {a.tier ? (
                      <TierBadge tier={a.tier} />
                    ) : (
                      <span className="text-neutral-400 dark:text-neutral-600 text-xs">
                        —
                      </span>
                    )}
                  </td>
                  <td className="px-5 py-3 text-neutral-600 dark:text-neutral-400">
                    {a.scope ?? ""}
                  </td>
                  <td className="px-5 py-3">
                    {a.reportUrl ? (
                      <a
                        href={a.reportUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-50 underline underline-offset-4 text-xs"
                      >
                        PDF →
                      </a>
                    ) : (
                      <span className="text-neutral-400 dark:text-neutral-600 text-xs">
                        —
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-14 space-y-8">
        <SectionHeader
          eyebrow={dict.opsEyebrow}
          title={dict.opsTitle}
          description={dict.opsDescription}
        />
        {cs.groups.map((g) => (
          <div
            key={g.id}
            className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6"
          >
            <h3 className="font-semibold text-neutral-900 dark:text-neutral-50 tracking-tight">
              {g.title}
            </h3>
            <p className="mt-1 text-sm text-neutral-500">{g.description}</p>
            <ul className="mt-5 space-y-5">
              {g.features.map((f, idx) => (
                <li
                  key={idx}
                  className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-3 md:gap-6 pb-5 border-b border-neutral-100 dark:border-neutral-900 last:border-0 last:pb-0"
                >
                  <h4 className="font-medium text-neutral-900 dark:text-neutral-50 leading-snug">
                    {f.title}
                  </h4>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    {f.detail}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="rounded-xl border border-neutral-900 bg-neutral-900 text-neutral-50 p-8">
        <p className="text-[11px] uppercase tracking-[0.2em] text-neutral-400 dark:text-neutral-600 font-medium">
          {dict.takeaway}
        </p>
        <p className="mt-3 text-lg leading-relaxed">{cs.takeaway}</p>
      </section>
    </div>
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
