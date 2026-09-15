export function AgreementsPage() {
  return (
    <div className="stack">
      <header className="page-header">
        <h1>Service agreements</h1>
        <p>Machine-enforceable consumer–provider agreements for access grant/revoke and delivery acceptance.</p>
      </header>
      <div className="row">
        <button type="button" className="btn btn-primary">
          Form agreement
        </button>
        <button type="button" className="btn btn-ghost">
          Accept delivery
        </button>
        <button type="button" className="btn btn-danger">
          Revoke access
        </button>
      </div>
      <div className="panel">
        <table className="table">
          <thead>
            <tr>
              <th>Agreement</th>
              <th>Service</th>
              <th>Consumer</th>
              <th>Access</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="mono">agr_demo_01</td>
              <td>Fleet telemetry commons</td>
              <td className="mono">ptc_consumer_a</td>
              <td>
                <span className="badge badge-proof">granted</span>
              </td>
              <td>active</td>
            </tr>
            <tr>
              <td className="mono">agr_demo_02</td>
              <td>Hospital compute-to-data</td>
              <td className="mono">ptc_consumer_b</td>
              <td>
                <span className="badge badge-coral">revoked</span>
              </td>
              <td>cancelled</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export function ProofsPage() {
  return (
    <div className="stack">
      <header className="page-header">
        <div className="brand" style={{ marginBottom: 12 }}>
          <span className="brand-mark" aria-hidden />
          <span style={{ color: "var(--color-brand)" }}>Veridrop</span>
        </div>
        <h1>Delivery proof inbox</h1>
        <p>Ingest and verify availability, replication, or compute-integrity proofs — digests only, never payloads.</p>
      </header>
      <div className="row">
        <button type="button" className="btn btn-primary">
          Submit proof
        </button>
        <button type="button" className="btn btn-ghost">
          Retry
        </button>
      </div>
      <div className="panel">
        <table className="table">
          <thead>
            <tr>
              <th>Proof</th>
              <th>Type</th>
              <th>Service</th>
              <th>Verdict</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="mono">prf_a1</td>
              <td>availability</td>
              <td>Fleet telemetry</td>
              <td>
                <span className="badge badge-amber">pending</span>
              </td>
              <td className="row">
                <button type="button" className="btn btn-primary">
                  Accept
                </button>
                <button type="button" className="btn btn-danger">
                  Reject
                </button>
              </td>
            </tr>
            <tr>
              <td className="mono">prf_b2</td>
              <td>zkCompute</td>
              <td>Hospital C2D</td>
              <td>
                <span className="badge badge-coral">rejected</span>
              </td>
              <td className="muted mono">INTEGRITY_MISMATCH</td>
            </tr>
            <tr>
              <td className="mono">prf_c3</td>
              <td>replication</td>
              <td>Commons store</td>
              <td>
                <span className="badge badge-proof">accepted</span>
              </td>
              <td className="muted">—</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export function RewardsPage() {
  return (
    <div className="stack">
      <header className="page-header">
        <div className="brand" style={{ marginBottom: 12 }}>
          <span className="brand-mark" aria-hidden />
          <span style={{ color: "var(--color-brand)" }}>Veridrop</span>
        </div>
        <h1>Reward epochs</h1>
        <p>Allocate emissions from proofed popularity × stake; audit trail for the board.</p>
      </header>
      <div className="row">
        <button type="button" className="btn btn-primary">
          Close epoch
        </button>
        <button type="button" className="btn btn-ghost">
          Export audit
        </button>
        <button type="button" className="btn btn-danger">
          Clawback
        </button>
      </div>
      <div className="panel">
        <table className="table">
          <thead>
            <tr>
              <th>Epoch</th>
              <th>Status</th>
              <th>Emitted</th>
              <th>Dual-linkage</th>
              <th>Commons share</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="mono">epc_2026w12</td>
              <td>
                <span className="badge badge-proof">paid</span>
              </td>
              <td className="mono">1.2M</td>
              <td className="mono">91%</td>
              <td className="mono">18%</td>
            </tr>
            <tr>
              <td className="mono">epc_2026w13</td>
              <td>
                <span className="badge badge-sluice">paused</span>
              </td>
              <td className="mono">0</td>
              <td className="mono">—</td>
              <td className="muted">zkCompute sluiced</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
