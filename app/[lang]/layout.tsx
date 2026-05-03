import { notFound } from "next/navigation";
import { isLang, LANGS, type Lang } from "@/lib/i18n";

export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }));
}

const FOOTER_TEXT: Readonly<Record<Lang, string>> = {
  ko: "티어와 가중치는 의견에 기반한 휴리스틱입니다. 신뢰하기 전에 직접 검증하세요.",
  en: "Tier list and weights are opinionated heuristics. Verify before relying on them.",
};

export default async function LangLayout({
  children,
  params,
}: {
  readonly children: React.ReactNode;
  readonly params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  return (
    <>
      {children}
      <footer className="border-t border-neutral-200 dark:border-neutral-800 py-8 text-center text-xs text-neutral-500">
        {FOOTER_TEXT[lang]}
      </footer>
    </>
  );
}
