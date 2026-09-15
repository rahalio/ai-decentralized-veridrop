/**
 * Provenance Domain Contracts
 *
 * Re-exports Zod schemas from @veridrop/core for runtime validation.
 * This avoids duplication and ensures alignment with the API contract.
 *
 * Architecture:
 * - Single source of truth: @veridrop/core
 * - No code duplication or drift
 * - Runtime validation of API responses
 * - Used in services to validate responses
 *
 * @see @veridrop/core/provenance for the source schemas
 */

import { provenanceSchemas as coreProvenanceSchemas } from "@veridrop/core/provenance";
import type { z } from "zod";

/**
 * Re-export schemas from core
 * These are the same schemas used by the api-server, ensuring perfect alignment
 */
export const {
  // TODO: Add specific schema exports based on OpenAPI spec
  // ResponseMeta,
  // PageInfo,
  // etc.
} = coreProvenanceSchemas;

/**
 * Export all schemas as a namespace for convenience
 */
export const provenanceSchemas = coreProvenanceSchemas;
