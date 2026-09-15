import { useState } from "react";
import { Link } from "react-router-dom";
import { DualRainGauge } from "@/components/DualRainGauge";

export function OperatorHomePage() {
  const [paused, setPaused] = useState(false);

  return (
    <div className="stack">
      <header className="page-header">
        <div className="brand" style={{ marginBottom: 12 }}>
          <span className="brand-mark" aria-hidden />
          <span style={{ color: "var(--color-brand)" }}>Veridrop</span>
        </div>
        <h1>Operator home</h1>
        <p>Are emissions proof-gated, and is any proof type compromised?</p>
      </header>

      {paused && (
        <div className="banner-sluice" role="status">
          <strong className="mono">Emission paused</strong>
          <span className="muted">zkCompute class sluiced — history retained.</span>
        </div>
      )}

      <div className="grid-3">
        <div className="panel stat">
          <div className="label">Dual-linkage rewards</div>
          <div className="value" style={{ color: "var(--color-proof)" }}>
            86%
          </div>
        </div>
        <div className="panel stat">
          <div className="label">Spam publish rate</div>
          <div className="value" style={{ color: "var(--color-coral)" }}>
            2.1%
          </div>
        </div>
        <div className="panel stat">
          <div className="label">Slash volume (epoch)</div>
          <div className="value" style={{ color: "var(--color-stake)" }}>
            14.2k
          </div>
        </div>
      </div>

      <DualRainGauge stakePct={72} proofPct={64} paid />

      <div className="panel">
        <h2>Emission sluice</h2>
        <p>Pause by proof class without wiping historical proofs (BR-10).</p>
        <div className="row">
          <button
            type="button"
            className={paused ? "btn btn-primary" : "btn btn-sluice"}
            onClick={() => setPaused((v) => !v)}
          >
            {paused ? "Resume zkCompute" : "Pause zkCompute emission"}
          </button>
          <Link className="btn btn-ghost" to="/rewards">
            Open epoch
          </Link>
          <Link className="btn btn-ghost" to="/governance">
            Governance delay queue
          </Link>
        </div>
      </div>
    </div>
  );
}
