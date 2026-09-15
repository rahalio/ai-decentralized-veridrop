/**
 * Governance Domain Types
 *
 * Auto-generated from OpenAPI spec
 * Generator: types-generator v2.0.0
 *
 * This file re-exports types from generated OpenAPI types and adds
 * convenient type aliases for handlers (response types, etc.)
 *
 * ⚠️ DO NOT EDIT MANUALLY - this file is auto-generated
 */

import type { components, operations } from "../openapi/governance.openapi.types";

// ============================================================================
// Re-export all generated types
// ============================================================================
// Note: components and operations are exported here but should be accessed via namespace
// in main index.ts to avoid duplicate export errors (e.g., blockchain.types.components)

export type { components, operations };


// ============================================================================
// Convenient Type Aliases for Schemas
// ============================================================================

export type EmissionPauseState = components["schemas"]["EmissionPauseState"];
export type ParameterKind = components["schemas"]["ParameterKind"];
export type ParameterStatus = components["schemas"]["ParameterStatus"];
export type ParameterVersion = components["schemas"]["ParameterVersion"];
export type ParameterVersionId = components["schemas"]["ParameterVersionId"];
export type ParameterVersionListData = components["schemas"]["ParameterVersionListData"];
export type EmissionPauseControlRequest = components["schemas"]["EmissionPauseControlRequest"];
export type ProposeParameterRequest = components["schemas"]["ProposeParameterRequest"];


// ============================================================================
// Operation Input Types (Request Bodies)
// ============================================================================

// These types represent the input data for create/update operations

export type ProposeParameterVersionRequestInput = NonNullable<operations["proposeParameterVersion"]["requestBody"]>["content"]["application/json"];
export type SetEmissionPauseStateRequestInput = NonNullable<operations["setEmissionPauseState"]["requestBody"]>["content"]["application/json"];


// ============================================================================
// Operation Parameter Types (Query/Path Parameters)
// ============================================================================

// These types represent parameters for operations without request bodies.
// Aligned with get_input_schema_or_type_name for consistent naming across generators.

export type ListParameterVersionsParams = NonNullable<operations["listParameterVersions"]["parameters"]["query"]>;
export type GetParameterVersionParams = operations["getParameterVersion"]["parameters"]["path"];
export type ExecuteParameterVersionParams = operations["executeParameterVersion"]["parameters"]["path"];


// ============================================================================
// Operation Response Types
// ============================================================================

// These types are used by handlers for type-safe response envelopes

export type ListParameterVersionsResponse = operations["listParameterVersions"]["responses"]["200"]["content"]["application/json"];
export type ProposeParameterVersionResponse = operations["proposeParameterVersion"]["responses"]["201"]["content"]["application/json"];
export type GetParameterVersionResponse = operations["getParameterVersion"]["responses"]["200"]["content"]["application/json"];
export type ExecuteParameterVersionResponse = operations["executeParameterVersion"]["responses"]["200"]["content"]["application/json"];
export type GetEmissionPauseStateResponse = operations["getEmissionPauseState"]["responses"]["200"]["content"]["application/json"];
export type SetEmissionPauseStateResponse = operations["setEmissionPauseState"]["responses"]["200"]["content"]["application/json"];


