/**
 * Curation Domain Types
 *
 * Auto-generated from OpenAPI spec
 * Generator: types-generator v2.0.0
 *
 * This file re-exports types from generated OpenAPI types and adds
 * convenient type aliases for handlers (response types, etc.)
 *
 * ⚠️ DO NOT EDIT MANUALLY - this file is auto-generated
 */

import type { components, operations } from "../openapi/curation.openapi.types";

// ============================================================================
// Re-export all generated types
// ============================================================================
// Note: components and operations are exported here but should be accessed via namespace
// in main index.ts to avoid duplicate export errors (e.g., blockchain.types.components)

export type { components, operations };


// ============================================================================
// Convenient Type Aliases for Schemas
// ============================================================================

export type DropPosition = components["schemas"]["DropPosition"];
export type DropPositionListData = components["schemas"]["DropPositionListData"];
export type DropPositionStatus = components["schemas"]["DropPositionStatus"];
export type PositionId = components["schemas"]["PositionId"];
export type StakeEvent = components["schemas"]["StakeEvent"];
export type StakeEventId = components["schemas"]["StakeEventId"];
export type StakeEventListData = components["schemas"]["StakeEventListData"];
export type StakeEventType = components["schemas"]["StakeEventType"];
export type DropPositionCreateRequest = components["schemas"]["DropPositionCreateRequest"];
export type UnstakeRequest = components["schemas"]["UnstakeRequest"];


// ============================================================================
// Operation Input Types (Request Bodies)
// ============================================================================

// These types represent the input data for create/update operations

export type OpenDropPositionRequestInput = NonNullable<operations["openDropPosition"]["requestBody"]>["content"]["application/json"];
export type UnstakeDropPositionRequestInput = NonNullable<operations["unstakeDropPosition"]["requestBody"]>["content"]["application/json"];


// ============================================================================
// Operation Parameter Types (Query/Path Parameters)
// ============================================================================

// These types represent parameters for operations without request bodies.
// Aligned with get_input_schema_or_type_name for consistent naming across generators.

export type ListDropPositionsParams = NonNullable<operations["listDropPositions"]["parameters"]["query"]>;
export type GetDropPositionParams = operations["getDropPosition"]["parameters"]["path"];
export type UnstakeDropPositionParams = operations["unstakeDropPosition"]["parameters"]["path"];
export type ListStakeEventsParams = NonNullable<operations["listStakeEvents"]["parameters"]["query"]>;


// ============================================================================
// Operation Response Types
// ============================================================================

// These types are used by handlers for type-safe response envelopes

export type ListDropPositionsResponse = operations["listDropPositions"]["responses"]["200"]["content"]["application/json"];
export type OpenDropPositionResponse = operations["openDropPosition"]["responses"]["201"]["content"]["application/json"];
export type GetDropPositionResponse = operations["getDropPosition"]["responses"]["200"]["content"]["application/json"];
export type UnstakeDropPositionResponse = operations["unstakeDropPosition"]["responses"]["200"]["content"]["application/json"];
export type ListStakeEventsResponse = operations["listStakeEvents"]["responses"]["200"]["content"]["application/json"];


