/**
 * Tenant / org state for non-React callers (generated services).
 */

let currentOrgId: string | null = null;
let authOrgId: string | null = null;

export function setCurrentOrgId(orgId: string | null) {
  currentOrgId = orgId;
}

export function setAuthOrgId(orgId: string | null) {
  authOrgId = orgId;
}

export function getEffectiveOrgId(): string | null {
  if (currentOrgId || authOrgId) {
    return currentOrgId || authOrgId;
  }
  if (typeof window === "undefined") return null;
  return (
    localStorage.getItem("orgId") ||
    localStorage.getItem("org_id") ||
    null
  );
}
