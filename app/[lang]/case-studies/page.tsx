import Link from "next/link";
import { CASE_STUDIES } from "@/lib/case-studies";
import { isLang, type Lang } from "@/lib/i18n";
import { CASE_STUDY_EN } from "@/lib/i18n/case-studies-en";
import { notFound } from "next/navigation";

export const metadata = {
  title: "Security Best Cases",
};

const PAGE_DICT: Readonly<
  Record<
    Lang,
    {
      eyebrow: string;
      title: string;
      description: string;
    }
  >
> = {
  ko: {
    eyebrow: "Best Cases",
    title: "보안 모범 사례",
    description:
      "오딧, 운영 보안, 바운티, 투명성을 모두 갖추고 출범한 프로토콜들의 실제 셋업을 정리합니다. 신규 프로젝트가 따라할 수 있는 베이스라인 레퍼런스입니다.",
  },
  en: {
    eyebrow: "Best Cases",
    title: "Security best cases",
    description:
      "Real security setups from protocols that launched with audits, operational security, bug bounties, and transparency in place. A baseline reference that new projects can model after.",
  },
};

export default async function CaseStudiesIndexPage({
  params,
}: {
  readonly params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  const dict = PAGE_DICT[lang];

  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <header className="mb-10">
        <p className="text-[11px] uppercase tracking-[0.2em] text-neutral-500 font-medium">
          {dict.eyebrow}
        </p>
        <h1 className="mt-3 text-3xl md:text-4xl font-semibold text-neutral-900 dark:text-neutral-50 tracking-tight">
          {dict.title}
        </h1>
        <p className="mt-4 text-neutral-600 dark:text-neutral-400 max-w-3xl leading-relaxed">
          {dict.description}
        </p>
      </header>

      <div className="grid gap-4 md:grid-cols-2">
        {CASE_STUDIES.map((cs) => {
          const enContent = lang === "en" ? CASE_STUDY_EN[cs.slug] : null;
          const tagline = enContent?.tagline ?? cs.tagline;
          const summary = enContent?.summary ?? cs.summary;
          const highlights = enContent?.highlights ?? cs.highlights;
          return (
            <Link
              key={cs.slug}
              href={`/${lang}/case-studies/${cs.slug}`}
              className="group block rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6 hover:border-neutral-900 hover:shadow-sm transition-all"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-50 tracking-tight">
                    {cs.name}
                  </h2>
                  <p className="text-sm text-neutral-500 mt-0.5">{tagline}</p>
                </div>
                <span className="text-neutral-300 dark:text-neutral-700 group-hover:text-neutral-900 dark:group-hover:text-neutral-50 transition-colors text-sm">
                  →
                </span>
              </div>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {highlights.slice(0, 4).map((h) => (
                  <span
                    key={h}
                    className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded border border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 bg-neutral-50 dark:bg-neutral-900"
                  >
                    {h}
                  </span>
                ))}
              </div>
              <p className="mt-4 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed line-clamp-3">
                {summary}
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
