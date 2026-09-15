import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useAuth, type OperatorRole } from "@/lib/auth";

const ROLES: { id: OperatorRole; label: string }[] = [
  { id: "operator", label: "Network operator" },
  { id: "keeper", label: "Keeper / provider" },
  { id: "curator", label: "Curator" },
  { id: "integrator", label: "Marketplace integrator" },
  { id: "auditor", label: "Auditor" },
  { id: "arbitrator", label: "Arbitrator" },
];

export function LoginPage() {
  const { session, login, homeForRole } = useAuth();
  const navigate = useNavigate();
  const [role, setRole] = useState<OperatorRole>("operator");
  const [apiKey, setApiKey] = useState("veridrop_demo_local_dev_key");

  if (session) {
    return <Navigate to={homeForRole(session.role)} replace />;
  }

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="brand">
          <span className="brand-mark" aria-hidden />
          Veridrop
        </div>
        <h1>Stake predicts. Proofs pay.</h1>
        <p>Proofed Curation Market control plane — incentive kernel for AI data networks.</p>
        <div className="role-pills" role="group" aria-label="Role">
          {ROLES.map((r) => (
            <button
              key={r.id}
              type="button"
              className={`role-pill ${role === r.id ? "active" : ""}`}
              onClick={() => setRole(r.id)}
            >
              {r.label}
            </button>
          ))}
        </div>
        <div className="field" style={{ textAlign: "left" }}>
          <label htmlFor="apiKey">API key</label>
          <input
            id="apiKey"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            autoComplete="off"
          />
        </div>
        <button
          type="button"
          className="btn btn-primary"
          style={{ width: "100%" }}
          onClick={() => {
            login(role, apiKey);
            navigate(homeForRole(role));
          }}
        >
          Enter control plane
        </button>
      </div>
    </div>
  );
}
