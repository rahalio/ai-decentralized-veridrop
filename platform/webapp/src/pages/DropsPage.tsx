import { DualRainGauge } from "@/components/DualRainGauge";

const DEMO_POSITIONS = [
  {
    id: "pos_01",
    service: "Fleet telemetry commons",
    drops: 1200,
    curve: "prm_curve_v3",
    predicted: 0.62,
    proofs: 48,
  },
  {
    id: "pos_02",
    service: "Hospital compute-to-data",
    drops: 800,
    curve: "prm_curve_v3",
    predicted: 0.41,
    proofs: 12,
  },
];

export function DropsPage() {
  return (
    <div className="stack">
      <header className="page-header">
        <h1>Drop staking</h1>
        <p>Stake into per-service drops on a published bonding curve — early correct stake earns more.</p>
      </header>
      <div className="panel">
        <div className="row" style={{ marginBottom: 16 }}>
          <span className="badge badge-stake">Curve {DEMO_POSITIONS[0].curve}</span>
          <button type="button" className="btn btn-primary">
            Open stake
          </button>
          <button type="button" className="btn btn-ghost">
            Un-stake
          </button>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>Position</th>
              <th>Service</th>
              <th>Drops</th>
              <th>Predicted</th>
              <th>Proofs</th>
            </tr>
          </thead>
          <tbody>
            {DEMO_POSITIONS.map((p) => (
              <tr key={p.id}>
                <td className="mono">{p.id}</td>
                <td>{p.service}</td>
                <td className="mono" style={{ color: "var(--color-stake)" }}>
                  {p.drops}
                </td>
                <td className="mono">{(p.predicted * 100).toFixed(0)}%</td>
                <td className="mono" style={{ color: "var(--color-proof)" }}>
                  {p.proofs}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <DualRainGauge stakePct={68} proofPct={55} paid={false} withholdReason="proof lag" />
    </div>
  );
}

export function GaugeDetailPage() {
  return (
    <div className="stack">
      <header className="page-header">
        <h1>Dual rain-gauge detail</h1>
        <p>Explain why a reward paid or withheld — drops vs proofs on one screen.</p>
      </header>
      <DualRainGauge stakePct={80} proofPct={35} paid={false} withholdReason="insufficient accepted proofs" />
      <div className="panel">
        <h2>Withhold reason codes</h2>
        <ul className="muted">
          <li>
            <span className="badge badge-coral">PROOF_REJECTED</span> verifier failed integrity check
          </li>
          <li>
            <span className="badge badge-sluice">EMISSION_PAUSED</span> proof class sluiced
          </li>
          <li>
            <span className="badge badge-amber">STAKE_TOO_LATE</span> outside bonding-curve window
          </li>
        </ul>
      </div>
    </div>
  );
}
