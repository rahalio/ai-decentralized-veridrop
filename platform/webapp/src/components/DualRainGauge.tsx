type DualRainGaugeProps = {
  stakePct: number;
  proofPct: number;
  paid: boolean;
  withholdReason?: string;
};

export function DualRainGauge({
  stakePct,
  proofPct,
  paid,
  withholdReason,
}: DualRainGaugeProps) {
  const stake = Math.max(0, Math.min(100, stakePct));
  const proof = Math.max(0, Math.min(100, proofPct));
  const intersection = Math.min(stake, proof);

  return (
    <div className="panel">
      <h2>Dual rain gauge</h2>
      <p>Emissions pour only where stake predicted relevance and proofs verified delivery.</p>
      <div className="dual-gauge">
        <div>
          <div className="gauge-tube" aria-label={`Stake ${stake}%`}>
            <div className="gauge-fill stake" style={{ height: `${stake}%` }} />
          </div>
          <div className="gauge-label">Drops (stake) · {stake}%</div>
        </div>
        <div>
          <div className="gauge-tube" aria-label={`Proofs ${proof}%`}>
            <div className="gauge-fill proof" style={{ height: `${proof}%` }} />
          </div>
          <div className="gauge-label">Proofs · {proof}%</div>
        </div>
      </div>
      <div className="intersect-note" role="status">
        Intersection pay zone: {intersection}% —{" "}
        {paid ? (
          <span className="badge badge-proof">paid</span>
        ) : (
          <span className="badge badge-coral">
            withheld{withholdReason ? `: ${withholdReason}` : ""}
          </span>
        )}
      </div>
    </div>
  );
}
