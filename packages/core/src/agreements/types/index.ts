/**
 * Agreements Domain Types
 *
 * Auto-generated from OpenAPI spec
 * Generator: types-generator v2.0.0
 *
 * This file re-exports types from generated OpenAPI types and adds
 * convenient type aliases for handlers (response types, etc.)
 *
 * ⚠️ DO NOT EDIT MANUALLY - this file is auto-generated
 */

import type { components, operations } from "../openapi/agreements.openapi.types";

// ============================================================================
// Re-export all generated types
// ============================================================================
// Note: components and operations are exported here but should be accessed via namespace
// in main index.ts to avoid duplicate export errors (e.g., blockchain.types.components)

export type { components, operations };


// ============================================================================
// Convenient Type Aliases for Schemas
// ============================================================================

export type AgreementId = components["schemas"]["AgreementId"];
export type AgreementStatus = components["schemas"]["AgreementStatus"];
export type ServiceAgreement = components["schemas"]["ServiceAgreement"];
export type ServiceAgreementListData = components["schemas"]["ServiceAgreementListData"];
export type AcceptDeliveryRequest = components["schemas"]["AcceptDeliveryRequest"];
export type RevokeAccessRequest = components["schemas"]["RevokeAccessRequest"];
export type ServiceAgreementCreateRequest = components["schemas"]["ServiceAgreementCreateRequest"];


// ============================================================================
// Operation Input Types (Request Bodies)
// ============================================================================

// These types represent the input data for create/update operations

export type CreateServiceAgreementRequestInput = NonNullable<operations["createServiceAgreement"]["requestBody"]>["content"]["application/json"];
export type RevokeAgreementAccessRequestInput = NonNullable<operations["revokeAgreementAccess"]["requestBody"]>["content"]["application/json"];
export type AcceptAgreementDeliveryRequestInput = NonNullable<operations["acceptAgreementDelivery"]["requestBody"]>["content"]["application/json"];


// ============================================================================
// Operation Parameter Types (Query/Path Parameters)
// ============================================================================

// These types represent parameters for operations without request bodies.
// Aligned with get_input_schema_or_type_name for consistent naming across generators.

export type ListServiceAgreementsParams = NonNullable<operations["listServiceAgreements"]["parameters"]["query"]>;
export type GetServiceAgreementParams = operations["getServiceAgreement"]["parameters"]["path"];
export type RevokeAgreementAccessParams = operations["revokeAgreementAccess"]["parameters"]["path"];
export type AcceptAgreementDeliveryParams = operations["acceptAgreementDelivery"]["parameters"]["path"];


// ============================================================================
// Operation Response Types
// ============================================================================

// These types are used by handlers for type-safe response envelopes

export type ListServiceAgreementsResponse = operations["listServiceAgreements"]["responses"]["200"]["content"]["application/json"];
export type CreateServiceAgreementResponse = operations["createServiceAgreement"]["responses"]["201"]["content"]["application/json"];
export type GetServiceAgreementResponse = operations["getServiceAgreement"]["responses"]["200"]["content"]["application/json"];
export type RevokeAgreementAccessResponse = operations["revokeAgreementAccess"]["responses"]["200"]["content"]["application/json"];
export type AcceptAgreementDeliveryResponse = operations["acceptAgreementDelivery"]["responses"]["200"]["content"]["application/json"];


