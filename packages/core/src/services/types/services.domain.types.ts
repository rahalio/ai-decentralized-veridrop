/**
 * Services Domain Types
 *
 * Auto-generated from OpenAPI spec
 * Generator: types-generator v2.0.0
 *
 * This file re-exports types from generated OpenAPI types and adds
 * convenient type aliases for handlers (response types, etc.)
 *
 * ⚠️ DO NOT EDIT MANUALLY - this file is auto-generated
 */

import type { components, operations } from "../openapi/services.openapi.types";

// ============================================================================
// Domain Types Export - Domain-specific types only (excludes components/operations)
// ============================================================================
// This file exports domain-specific types for use in main index.ts
// components and operations are NOT exported here to avoid duplicate export errors
// Access components/operations via namespace: domain.types.components

// ============================================================================
// Convenient Type Aliases for Schemas
// ============================================================================

export type PricingMode = components["schemas"]["PricingMode"];
export type ProofType = components["schemas"]["ProofType"];
export type Service = components["schemas"]["Service"];
export type ServiceId = components["schemas"]["ServiceId"];
export type ServiceListData = components["schemas"]["ServiceListData"];
export type ServiceStatus = components["schemas"]["ServiceStatus"];
export type ServiceType = components["schemas"]["ServiceType"];
export type ServiceCreateRequest = components["schemas"]["ServiceCreateRequest"];
export type ServiceProofPolicyRequest = components["schemas"]["ServiceProofPolicyRequest"];
export type ServiceSuspendRequest = components["schemas"]["ServiceSuspendRequest"];


// ============================================================================
// Operation Input Types (Request Bodies)
// ============================================================================

// These types represent the input data for create/update operations

export type RegisterServiceRequestInput = NonNullable<operations["registerService"]["requestBody"]>["content"]["application/json"];
export type SetServiceProofPolicyRequestInput = NonNullable<operations["setServiceProofPolicy"]["requestBody"]>["content"]["application/json"];
export type SuspendServiceRequestInput = NonNullable<operations["suspendService"]["requestBody"]>["content"]["application/json"];


// ============================================================================
// Operation Parameter Types (Query/Path Parameters)
// ============================================================================

// These types represent parameters for operations without request bodies.
// Aligned with get_input_schema_or_type_name for consistent naming across generators.

export type ListServicesParams = NonNullable<operations["listServices"]["parameters"]["query"]>;
export type GetServiceParams = operations["getService"]["parameters"]["path"];
export type SetServiceProofPolicyParams = operations["setServiceProofPolicy"]["parameters"]["path"];
export type SuspendServiceParams = operations["suspendService"]["parameters"]["path"];


// ============================================================================
// Operation Response Types
// ============================================================================

// These types are used by handlers for type-safe response envelopes

export type ListServicesResponse = operations["listServices"]["responses"]["200"]["content"]["application/json"];
export type RegisterServiceResponse = operations["registerService"]["responses"]["201"]["content"]["application/json"];
export type GetServiceResponse = operations["getService"]["responses"]["200"]["content"]["application/json"];
export type SetServiceProofPolicyResponse = operations["setServiceProofPolicy"]["responses"]["200"]["content"]["application/json"];
export type SuspendServiceResponse = operations["suspendService"]["responses"]["200"]["content"]["application/json"];


