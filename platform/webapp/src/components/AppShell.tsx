import { NavLink, Outlet } from "react-router-dom";
import { useAuth } from "@/lib/auth";

const NAV = [
  { to: "/", label: "Operator home", end: true },
  { to: "/services", label: "Services" },
  { to: "/drops", label: "Drop positions" },
  { to: "/gauge", label: "Dual rain gauge" },
  { to: "/agreements", label: "Agreements" },
  { to: "/proofs", label: "Delivery proofs" },
  { to: "/rewards", label: "Reward epochs" },
  { to: "/participants", label: "Identity TCR" },
  { to: "/provenance", label: "IP provenance" },
  { to: "/arbitration", label: "Arbitration" },
  { to: "/governance", label: "Governance" },
  { to: "/signals", label: "Marketplace signals" },
];

export function AppShell() {
  const { session, logout } = useAuth();

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand">
          <span className="brand-mark" aria-hidden />
          Veridrop
        </div>
        <nav className="nav" aria-label="Primary">
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="muted mono" style={{ marginTop: "auto", fontSize: "0.75rem" }}>
          {session?.role ?? "guest"} · {session?.orgId}
          <div style={{ marginTop: 8 }}>
            <button type="button" className="btn btn-ghost" onClick={logout}>
              Sign out
            </button>
          </div>
        </div>
      </aside>
      <main className="main">
        <Outlet />
      </main>
    </div>
  );
}
