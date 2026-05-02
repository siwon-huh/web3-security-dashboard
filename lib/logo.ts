const LOGO_OVERRIDES: Readonly<Record<string, string>> = {
  "Sigma Prime":
    "https://pbs.twimg.com/profile_images/1106229297151303681/EuqfU4v4_400x400.png",
  Securr:
    "https://pbs.twimg.com/profile_images/1637710098452627459/QvN9dsCg_400x400.jpg",
  BlockApex:
    "https://pbs.twimg.com/profile_images/1737861055899107328/5In51neT_400x400.jpg",
  "Blaize.security":
    "https://pbs.twimg.com/profile_images/1707354809731301376/O1X2kTTy_400x400.jpg",
  Hexagate:
    "https://pbs.twimg.com/profile_images/1600934745742970912/gfT0YQNX_400x400.jpg",
  "Zellic V12": "https://v12.sh/v12-logo.svg",
  QuillShield:
    "https://www.google.com/s2/favicons?domain=quillaudits.com&sz=64",
  Slither:
    "https://storage.ghost.io/c/a6/22/a6222a4e-2e35-45bd-99bd-553de64e73e7/content/images/wju3mxmhzaofzb38d5j-am9-pepcc6urjlnx_y0grwxtzjzop3zuc2ty_0wkqyj980s4klm1_fealengzs6-khrw1bjdgqwldo69m0dbawq65onewegzgoaaczgdcufdlwdg49zh.png",
  Mythril:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSChcIEOjj_WU4c2tASuRfDI-86XTc2DXwQuQ&s",
  Echidna:
    "https://repository-images.githubusercontent.com/101585932/6e367ef5-4986-43a6-8c64-b3b0f2b7456c",
  Halmos: "https://avatars.githubusercontent.com/u/745163?s=48&v=4",
  Aderyn: "https://avatars.githubusercontent.com/u/66713957?s=48&v=4",
  "Neptune Mutual":
    "https://www.alchemy.com/dapps/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Falchemy-website%2Fimage%2Fupload%2Fv1694675707%2Fdapp-store%2Fdapp-logos%2FNeptune%2520Mutual.png&w=256&q=75",
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
