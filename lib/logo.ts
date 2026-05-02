const LOGO_OVERRIDES: Readonly<Record<string, string>> = {
  "Sigma Prime":
    "https://pbs.twimg.com/profile_images/1106229297151303681/EuqfU4v4_400x400.png",
  Securr:
    "https://pbs.twimg.com/profile_images/1637710098452627459/QvN9dsCg_400x400.jpg",
  BlockApex:
    "https://pbs.twimg.com/profile_images/1737861055899107328/5In51neT_400x400.jpg",
  "Blaize.security":
    "https://pbs.twimg.com/profile_images/1707354809731301376/O1X2kTTy_400x400.jpg",
};

export function firmLogoUrl(
  websiteUrl: string,
  size: 32 | 64 | 128 = 64,
  name?: string,
): string {
  if (name && LOGO_OVERRIDES[name]) return LOGO_OVERRIDES[name];
  try {
    const url = new URL(websiteUrl);
    const hostname = url.hostname.replace(/^www\./, "");
    return `https://www.google.com/s2/favicons?domain=${hostname}&sz=${size}`;
  } catch {
    return "";
  }
}
