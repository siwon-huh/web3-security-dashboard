export type Lang = "ko" | "en";

export const LANGS: ReadonlyArray<Lang> = ["ko", "en"];

export const DEFAULT_LANG: Lang = "ko";

export function isLang(value: string | undefined): value is Lang {
  return value === "ko" || value === "en";
}

export type Localized<T = string> = Readonly<Record<Lang, T>>;

export function pick<T>(value: Localized<T>, lang: Lang): T {
  return value[lang];
}
