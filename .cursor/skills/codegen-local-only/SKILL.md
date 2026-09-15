---
name: codegen-local-only
description: >-
  Veridrop rule: .codegen is local-only tooling and must never be committed or
  pushed to GitHub. Use when running zero-codegen, syncing codegen paths, or
  deciding what belongs in git.
---

# Codegen local-only (`.codegen`)

## Hard rule

**Never commit or push `.codegen/`.** It is gitignored. Agents must not force-add it.

## What lives where

| Path | Git? | Role |
|------|------|------|
| `.codegen/` | No | zero-codegen Python tool + `zero-codegen.json` / `.zero-codegen-merged.json` |
| `packages/openapi-core/src/*.yaml` | Yes | OpenAPI source of truth |
| `packages/openapi-core/src/.bundled/` | No | Redocly bundles (regen locally) |

## Bootstrap after clone

Copy `.codegen` from `zero-apps-codegen-scaffold`, set `package_scope` to `@veridrop`, then:

```bash
pnpm codegen:paths
pnpm lint:openapi && pnpm bundle:openapi
```

Package scope for this product is **`@veridrop`**.
