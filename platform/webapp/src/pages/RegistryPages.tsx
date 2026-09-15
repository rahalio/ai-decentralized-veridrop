import { useState } from "react";

export function ParticipantsPage() {
  return (
    <div className="stack">
      <header className="page-header">
        <h1>Identity TCR</h1>
        <p>Raise Sybil cost for reward-earning roles — non-listed participants cannot earn.</p>
      </header>
      <div className="row">
        <button type="button" className="btn btn-primary">
          Apply
        </button>
        <button type="button" className="btn btn-ghost">
          Challenge
        </button>
        <button type="button" className="btn btn-ghost">
          Approve role
        </button>
      </div>
      <div className="grid-2">
        <div className="panel">
          <h2>Listed</h2>
          <div className="stack">
            <div>
              <strong>ptc_keeper_01</strong>
              <div className="muted mono">roles: keeper, provider · listed</div>
            </div>
            <div>
              <strong>ptc_curator_09</strong>
              <div className="muted mono">roles: curator · listed</div>
            </div>
          </div>
        </div>
        <div className="panel">
          <h2>Challenged</h2>
          <div>
            <strong>ptc_sybil_x</strong>
            <div className="badge badge-coral" style={{ marginTop: 8 }}>
              challenge open
            </div>
            <p>Insufficient stake-to-list for reward roles.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ProvenancePage() {
  return (
    <div className="stack">
      <header className="page-header">
        <h1>IP provenance</h1>
        <p>Record attribution digests; challenge republication of another’s asset.</p>
      </header>
      <div className="row">
        <button type="button" className="btn btn-primary">
          Record attribution
        </button>
        <button type="button" className="btn btn-danger">
          File data-escape challenge
        </button>
      </div>
      <div className="panel">
        <table className="table">
          <thead>
            <tr>
              <th>Record</th>
              <th>Service</th>
              <th>Digest</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="mono">prv_01</td>
              <td>Fleet telemetry</td>
              <td className="mono">sha256:8f2a…</td>
              <td>
                <span className="badge badge-proof">recorded</span>
              </td>
            </tr>
            <tr>
              <td className="mono">prv_02</td>
              <td>Medical C2D</td>
              <td className="mono">sha256:11bc…</td>
              <td>
                <span className="badge badge-coral">challenged</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export function ArbitrationPage() {
  return (
    <div className="stack">
      <header className="page-header">
        <h1>Arbitration desk</h1>
        <p>Bind IP/delivery dispute outcomes to entitlement and reward state.</p>
      </header>
      <div className="grid-2">
        <div className="panel">
          <h2>Open cases</h2>
          <table className="table">
            <thead>
              <tr>
                <th>Case</th>
                <th>Subject</th>
                <th>Claim</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="mono">case_01</td>
                <td>provenance / prv_02</td>
                <td>Republication of attributed medical feature set</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="panel">
          <h2>Binding preview</h2>
          <p>Decide before applying — updates entitlement and reward eligibility (BR-11).</p>
          <ul className="muted">
            <li>Revoke entitlement on agr_demo_02</li>
            <li>Withhold rewards for epc_2026w13 allocation row</li>
          </ul>
          <div className="row">
            <button type="button" className="btn btn-primary">
              Decide
            </button>
            <button type="button" className="btn btn-ghost">
              Apply binding update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function GovernancePage() {
  const [hoursLeft] = useState(18);

  return (
    <div className="stack">
      <header className="page-header">
        <h1>Governance & circuit breakers</h1>
        <p>Version bonding curves and reward schedules with published delay; pause emissions on exploit.</p>
      </header>
      <div className="grid-2">
        <div className="panel">
          <h2>Parameter delay</h2>
          <p className="mono" style={{ fontSize: "2rem", color: "var(--color-amber)" }}>
            {hoursLeft}h
          </p>
          <p>prm_curve_v4 · bondingCurve · pendingDelay</p>
          <div className="row">
            <button type="button" className="btn btn-primary">
              Propose change
            </button>
            <button type="button" className="btn btn-ghost" disabled>
              Execute after delay
            </button>
          </div>
        </div>
        <div className="panel">
          <h2>Network emission pause</h2>
          <p>Circuit breaker retains history — no silent wipe.</p>
          <div className="row">
            <button type="button" className="btn btn-sluice">
              Pause availability
            </button>
            <button type="button" className="btn btn-sluice">
              Pause zkCompute
            </button>
            <button type="button" className="btn btn-primary">
              Resume
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function SignalsPage() {
  return (
    <div className="stack">
      <header className="page-header">
        <h1>Marketplace signal browser</h1>
        <p>Read-only proof and stake signals for catalogue ranking — not a storefront.</p>
      </header>
      <div className="panel">
        <table className="table">
          <thead>
            <tr>
              <th>Service</th>
              <th>Verified relevance</th>
              <th>Stake</th>
              <th>Accepted proofs</th>
              <th>Commons</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Fleet telemetry commons</td>
              <td>
                <span className="badge badge-proof">0.91</span>
              </td>
              <td className="mono" style={{ color: "var(--color-stake)" }}>
                12.4k
              </td>
              <td className="mono" style={{ color: "var(--color-proof)" }}>
                420
              </td>
              <td>yes</td>
            </tr>
            <tr>
              <td>Hospital compute-to-data</td>
              <td>
                <span className="badge badge-stake">0.74</span>
              </td>
              <td className="mono">8.1k</td>
              <td className="mono">188</td>
              <td>no</td>
            </tr>
          </tbody>
        </table>
        <pre className="mono muted" style={{ marginTop: 16, fontSize: "0.8rem" }}>
{`GET /v0/services?pricingMode=commons
X-API-Key: <integrator-key>`}
        </pre>
      </div>
    </div>
  );
}
