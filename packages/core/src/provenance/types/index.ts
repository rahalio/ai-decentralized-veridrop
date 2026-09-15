/**
 * Provenance Domain Types
 *
 * Auto-generated from OpenAPI spec
 * Generator: types-generator v2.0.0
 *
 * This file re-exports types from generated OpenAPI types and adds
 * convenient type aliases for handlers (response types, etc.)
 *
 * ⚠️ DO NOT EDIT MANUALLY - this file is auto-generated
 */

import type { components, operations } from "../openapi/provenance.openapi.types";

// ============================================================================
// Re-export all generated types
// ============================================================================
// Note: components and operations are exported here but should be accessed via namespace
// in main index.ts to avoid duplicate export errors (e.g., blockchain.types.components)

export type { components, operations };


// ============================================================================
// Convenient Type Aliases for Schemas
// ============================================================================

export type ProvenanceId = components["schemas"]["ProvenanceId"];
export type ProvenanceListData = components["schemas"]["ProvenanceListData"];
export type ProvenanceRecord = components["schemas"]["ProvenanceRecord"];
export type ProvenanceStatus = components["schemas"]["ProvenanceStatus"];
export type EscapeChallengeRequest = components["schemas"]["EscapeChallengeRequest"];
export type ProvenanceRecordRequest = components["schemas"]["ProvenanceRecordRequest"];


// ============================================================================
// Operation Input Types (Request Bodies)
// ============================================================================

// These types represent the input data for create/update operations

export type RecordProvenanceRequestInput = NonNullable<operations["recordProvenance"]["requestBody"]>["content"]["application/json"];
export type ChallengeDataEscapeRequestInput = NonNullable<operations["challengeDataEscape"]["requestBody"]>["content"]["application/json"];


// ============================================================================
// Operation Parameter Types (Query/Path Parameters)
// ============================================================================

// These types represent parameters for operations without request bodies.
// Aligned with get_input_schema_or_type_name for consistent naming across generators.

export type ListProvenanceRecordsParams = NonNullable<operations["listProvenanceRecords"]["parameters"]["query"]>;
export type GetProvenanceRecordParams = operations["getProvenanceRecord"]["parameters"]["path"];
export type ChallengeDataEscapeParams = operations["challengeDataEscape"]["parameters"]["path"];


// ============================================================================
// Operation Response Types
// ============================================================================

// These types are used by handlers for type-safe response envelopes

export type ListProvenanceRecordsResponse = operations["listProvenanceRecords"]["responses"]["200"]["content"]["application/json"];
export type RecordProvenanceResponse = operations["recordProvenance"]["responses"]["201"]["content"]["application/json"];
export type GetProvenanceRecordResponse = operations["getProvenanceRecord"]["responses"]["200"]["content"]["application/json"];
export type ChallengeDataEscapeResponse = operations["challengeDataEscape"]["responses"]["200"]["content"]["application/json"];


