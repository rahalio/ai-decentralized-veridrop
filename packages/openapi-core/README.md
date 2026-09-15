# OpenAPI (`@veridrop/openapi-core`)

Domain contracts for Veridrop. One YAML (+ optional `.schemas.yaml`) per domain under `src/`.

| Domain | File | Notes |
|--------|------|--------|
| identity | `identity.yaml` | Shared auth blueprint (API keys, users) |
| services | `services.yaml` | Service registry |
| curation | `curation.yaml` | Drop positions + stake events |
| agreements | `agreements.yaml` | Service agreements |
| proofs | `proofs.yaml` | Delivery proofs |
| rewards | `rewards.yaml` | Reward epochs |
| arbitration | `arbitration.yaml` | Dispute desk |
| participants | `participants.yaml` | Identity TCR |
| provenance | `provenance.yaml` | IP / data-escape |
| governance | `governance.yaml` | Parameter versions + emission pause |

```bash
pnpm lint:openapi
pnpm bundle:openapi
```

Bundles land in `src/.bundled/` (gitignored). After YAML edits: regenerate **core only**, then handwrite lower layers.
