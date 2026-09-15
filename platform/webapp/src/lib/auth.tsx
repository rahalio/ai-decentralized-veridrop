import { createContext, useContext, useMemo, useState, type ReactNode } from "react";
import { apiClient } from "@/services/shared/infrastructure";

export type OperatorRole =
  | "operator"
  | "keeper"
  | "curator"
  | "integrator"
  | "auditor"
  | "arbitrator";

const ROLE_HOME: Record<OperatorRole, string> = {
  operator: "/",
  keeper: "/proofs",
  curator: "/drops",
  integrator: "/signals",
  auditor: "/rewards",
  arbitrator: "/arbitration",
};

type Session = {
  role: OperatorRole;
  apiKey: string;
  orgId: string;
};

type AuthContextValue = {
  session: Session | null;
  login: (role: OperatorRole, apiKey?: string) => void;
  logout: () => void;
  homeForRole: (role: OperatorRole) => string;
};

const AuthContext = createContext<AuthContextValue | null>(null);

const DEMO_KEY = "veridrop_demo_local_dev_key";
const DEMO_ORG = "tnt_demo";

export function AuthProvider({ children }: { children: ReactNode }) {
  const [session, setSession] = useState<Session | null>(() => {
    if (typeof window === "undefined") return null;
    const raw = localStorage.getItem("veridrop_session");
    if (!raw) return null;
    try {
      return JSON.parse(raw) as Session;
    } catch {
      return null;
    }
  });

  const value = useMemo<AuthContextValue>(
    () => ({
      session,
      homeForRole: (role) => ROLE_HOME[role],
      login: (role, apiKey = DEMO_KEY) => {
        const next = { role, apiKey, orgId: DEMO_ORG };
        apiClient.setApiKey(apiKey);
        apiClient.setOrgId(DEMO_ORG);
        localStorage.setItem("veridrop_session", JSON.stringify(next));
        setSession(next);
      },
      logout: () => {
        apiClient.clearApiKey();
        apiClient.clearToken();
        apiClient.setOrgId(null);
        localStorage.removeItem("veridrop_session");
        setSession(null);
      },
    }),
    [session],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth requires AuthProvider");
  return ctx;
}
