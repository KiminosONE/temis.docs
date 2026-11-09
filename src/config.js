export const REPOSITORY_URL = "https://github.com/KiminosONE/temis";
export const ISSUES_URL = `${REPOSITORY_URL}/issues/new`;

export function siteUrl(path = "") {
  const base = import.meta.env.BASE_URL;
  const cleanPath = String(path).replace(/^\/+|\/+$/g, "");
  return cleanPath ? `${base}${cleanPath}/` : base;
}
