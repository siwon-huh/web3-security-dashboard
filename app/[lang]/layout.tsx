import { notFound } from "next/navigation";
import { isLang, LANGS } from "@/lib/i18n";

export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }));
}

export default async function LangLayout({
  children,
  params,
}: {
  readonly children: React.ReactNode;
  readonly params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  return <>{children}</>;
}
