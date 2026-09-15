import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { servicesFacade } from "@/services/domains/services";

export function ServicesPage() {
  const qc = useQueryClient();
  const list = useQuery({
    queryKey: ["services"],
    queryFn: () => servicesFacade.listServices({ limit: 25 }),
    retry: false,
  });

  const register = useMutation({
    mutationFn: () =>
      servicesFacade.registerService({
        providerParticipantId: "ptc_demo_provider",
        serviceType: "dataAvailability",
        proofTypeRequired: "availability",
        pricingMode: "commons",
        title: "Fleet telemetry commons",
      }),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["services"] }),
  });

  const items = (list.data as { items?: unknown[] } | undefined)?.items ?? [];

  return (
    <div className="stack">
      <header className="page-header">
        <h1>Service registry</h1>
        <p>Register data availability and compute services with required proof types.</p>
      </header>
      <div className="row">
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => register.mutate()}
          disabled={register.isPending}
        >
          Register service
        </button>
      </div>
      {list.isError && (
        <div className="panel">
          <p className="badge badge-amber">API unreachable or empty sandbox — showing shell.</p>
        </div>
      )}
      <div className="panel">
        <table className="table">
          <thead>
            <tr>
              <th>Service</th>
              <th>Type</th>
              <th>Proof</th>
              <th>Pricing</th>
              <th>Signal</th>
            </tr>
          </thead>
          <tbody>
            {items.length === 0 ? (
              <tr>
                <td colSpan={5} className="muted">
                  No services yet — register first service to unlock network emissions.
                </td>
              </tr>
            ) : (
              items.map((raw, i) => {
                const s = raw as Record<string, unknown>;
                return (
                  <tr key={String(s.serviceId ?? i)}>
                    <td className="mono">{String(s.title ?? s.serviceId)}</td>
                    <td>{String(s.serviceType)}</td>
                    <td>
                      <span className="badge badge-proof">{String(s.proofTypeRequired)}</span>
                    </td>
                    <td>{String(s.pricingMode)}</td>
                    <td className="mono">{String(s.rankingScore ?? "—")}</td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
