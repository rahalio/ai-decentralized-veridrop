/**
 * Proofs Domain Types
 *
 * Auto-generated from OpenAPI spec
 * Generator: types-generator v2.0.0
 *
 * This file re-exports types from generated OpenAPI types and adds
 * convenient type aliases for handlers (response types, etc.)
 *
 * ⚠️ DO NOT EDIT MANUALLY - this file is auto-generated
 */

import type { components, operations } from "../openapi/proofs.openapi.types";

// ============================================================================
// Re-export all generated types
// ============================================================================
// Note: components and operations are exported here but should be accessed via namespace
// in main index.ts to avoid duplicate export errors (e.g., blockchain.types.components)

export type { components, operations };


// ============================================================================
// Convenient Type Aliases for Schemas
// ============================================================================

export type DeliveryProof = components["schemas"]["DeliveryProof"];
export type DeliveryProofListData = components["schemas"]["DeliveryProofListData"];
export type ProofId = components["schemas"]["ProofId"];
export type ProofType = components["schemas"]["ProofType"];
export type ProofVerdict = components["schemas"]["ProofVerdict"];
export type DeliveryProofCreateRequest = components["schemas"]["DeliveryProofCreateRequest"];
export type ProofRejectRequest = components["schemas"]["ProofRejectRequest"];
export type ProofSlashRequest = components["schemas"]["ProofSlashRequest"];


// ============================================================================
// Operation Input Types (Request Bodies)
// ============================================================================

// These types represent the input data for create/update operations

export type SubmitDeliveryProofRequestInput = NonNullable<operations["submitDeliveryProof"]["requestBody"]>["content"]["application/json"];
export type RejectDeliveryProofRequestInput = NonNullable<operations["rejectDeliveryProof"]["requestBody"]>["content"]["application/json"];
export type SlashDeliveryProofRequestInput = NonNullable<operations["slashDeliveryProof"]["requestBody"]>["content"]["application/json"];


// ============================================================================
// Operation Parameter Types (Query/Path Parameters)
// ============================================================================

// These types represent parameters for operations without request bodies.
// Aligned with get_input_schema_or_type_name for consistent naming across generators.

export type ListDeliveryProofsParams = NonNullable<operations["listDeliveryProofs"]["parameters"]["query"]>;
export type GetDeliveryProofParams = operations["getDeliveryProof"]["parameters"]["path"];
export type AcceptDeliveryProofParams = operations["acceptDeliveryProof"]["parameters"]["path"];
export type RejectDeliveryProofParams = operations["rejectDeliveryProof"]["parameters"]["path"];
export type SlashDeliveryProofParams = operations["slashDeliveryProof"]["parameters"]["path"];


// ============================================================================
// Operation Response Types
// ============================================================================

// These types are used by handlers for type-safe response envelopes

export type ListDeliveryProofsResponse = operations["listDeliveryProofs"]["responses"]["200"]["content"]["application/json"];
export type SubmitDeliveryProofResponse = operations["submitDeliveryProof"]["responses"]["201"]["content"]["application/json"];
export type GetDeliveryProofResponse = operations["getDeliveryProof"]["responses"]["200"]["content"]["application/json"];
export type AcceptDeliveryProofResponse = operations["acceptDeliveryProof"]["responses"]["200"]["content"]["application/json"];
export type RejectDeliveryProofResponse = operations["rejectDeliveryProof"]["responses"]["200"]["content"]["application/json"];
export type SlashDeliveryProofResponse = operations["slashDeliveryProof"]["responses"]["200"]["content"]["application/json"];


