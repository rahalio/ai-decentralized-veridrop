/**
 * Rewards Domain Types
 *
 * Auto-generated from OpenAPI spec
 * Generator: types-generator v2.0.0
 *
 * This file re-exports types from generated OpenAPI types and adds
 * convenient type aliases for handlers (response types, etc.)
 *
 * ⚠️ DO NOT EDIT MANUALLY - this file is auto-generated
 */

import type { components, operations } from "../openapi/rewards.openapi.types";

// ============================================================================
// Domain Types Export - Domain-specific types only (excludes components/operations)
// ============================================================================
// This file exports domain-specific types for use in main index.ts
// components and operations are NOT exported here to avoid duplicate export errors
// Access components/operations via namespace: domain.types.components

// ============================================================================
// Convenient Type Aliases for Schemas
// ============================================================================

export type AuditExport = components["schemas"]["AuditExport"];
export type EpochId = components["schemas"]["EpochId"];
export type EpochStatus = components["schemas"]["EpochStatus"];
export type ProofType = components["schemas"]["ProofType"];
export type RewardEpoch = components["schemas"]["RewardEpoch"];
export type RewardEpochListData = components["schemas"]["RewardEpochListData"];
export type AllocateRewardsRequest = components["schemas"]["AllocateRewardsRequest"];
export type ClawbackRequest = components["schemas"]["ClawbackRequest"];
export type PauseEmissionRequest = components["schemas"]["PauseEmissionRequest"];
export type RewardEpochCreateRequest = components["schemas"]["RewardEpochCreateRequest"];
export type ExportAudit = operations["exportRewardEpochAudit"]["responses"]["200"]["content"]["application/json"]["data"];


// ============================================================================
// Operation Input Types (Request Bodies)
// ============================================================================

// These types represent the input data for create/update operations

export type OpenRewardEpochRequestInput = NonNullable<operations["openRewardEpoch"]["requestBody"]>["content"]["application/json"];
export type PauseRewardEpochRequestInput = NonNullable<operations["pauseRewardEpoch"]["requestBody"]>["content"]["application/json"];
export type AllocateRewardEpochRequestInput = NonNullable<operations["allocateRewardEpoch"]["requestBody"]>["content"]["application/json"];
export type ClawbackRewardEpochRequestInput = NonNullable<operations["clawbackRewardEpoch"]["requestBody"]>["content"]["application/json"];


// ============================================================================
// Operation Parameter Types (Query/Path Parameters)
// ============================================================================

// These types represent parameters for operations without request bodies.
// Aligned with get_input_schema_or_type_name for consistent naming across generators.

export type ListRewardEpochsParams = NonNullable<operations["listRewardEpochs"]["parameters"]["query"]>;
export type GetRewardEpochParams = operations["getRewardEpoch"]["parameters"]["path"];
export type PauseRewardEpochParams = operations["pauseRewardEpoch"]["parameters"]["path"];
export type CloseRewardEpochParams = operations["closeRewardEpoch"]["parameters"]["path"];
export type AllocateRewardEpochParams = operations["allocateRewardEpoch"]["parameters"]["path"];
export type ExportRewardEpochAuditParams = operations["exportRewardEpochAudit"]["parameters"]["path"];
export type ClawbackRewardEpochParams = operations["clawbackRewardEpoch"]["parameters"]["path"];


// ============================================================================
// Operation Response Types
// ============================================================================

// These types are used by handlers for type-safe response envelopes

export type ListRewardEpochsResponse = operations["listRewardEpochs"]["responses"]["200"]["content"]["application/json"];
export type OpenRewardEpochResponse = operations["openRewardEpoch"]["responses"]["201"]["content"]["application/json"];
export type GetRewardEpochResponse = operations["getRewardEpoch"]["responses"]["200"]["content"]["application/json"];
export type PauseRewardEpochResponse = operations["pauseRewardEpoch"]["responses"]["200"]["content"]["application/json"];
export type CloseRewardEpochResponse = operations["closeRewardEpoch"]["responses"]["200"]["content"]["application/json"];
export type AllocateRewardEpochResponse = operations["allocateRewardEpoch"]["responses"]["200"]["content"]["application/json"];
export type ExportRewardEpochAuditResponse = operations["exportRewardEpochAudit"]["responses"]["200"]["content"]["application/json"];
export type ClawbackRewardEpochResponse = operations["clawbackRewardEpoch"]["responses"]["200"]["content"]["application/json"];


