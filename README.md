# Veridrop

Proofed Curation Market control plane: stake drops, verify delivery proofs, allocate rewards.

OpenAPI-first DDD monorepo using local `zero-codegen` (from `.codegen/`, **never committed**).

## Specs

- [PRODUCT.md](./PRODUCT.md) — domain, BRs, entities
- [WEBAPP.md](./WEBAPP.md) — IA, screens, design system
- [USER_STORIES.md](./USER_STORIES.md) — role stories

## Layout

| Area | Path |
|------|------|
| OpenAPI | `packages/openapi-core/src/` |
| Core | `packages/core` (`@veridrop/core`) |
| Services / adapters / API | `platform/{services,adapters,api-server}` |
| Webapp | `platform/webapp` (`@veridrop/webapp`) |
| Codegen tool (local only) | `.codegen/` — gitignored |
| Agent skills | `.cursor/skills/` |

## Prerequisites

- Node ≥ 20, pnpm ≥ 9
- Python 3 for codegen
- After clone, copy `.codegen` from the scaffold (see `.cursor/skills/codegen-local-only`)

## Quick start

```bash
pnpm install
pnpm codegen:paths
pnpm lint:openapi && pnpm bundle:openapi
pnpm build
pnpm dev:api
# Health: curl http://127.0.0.1:4000/health
# Demo key: X-API-Key: veridrop_demo_local_dev_key
```

## Codegen modes

- **New domain (Mode A):** register YAML → lint/bundle → full multi-layer generate once.
- **YAML edit (Mode B):** lint/bundle → `pnpm codegen:core` only → handwrite services/adapters/api-server/webapp.

Never commit `.codegen/` or `packages/openapi-core/src/.bundled/`.
