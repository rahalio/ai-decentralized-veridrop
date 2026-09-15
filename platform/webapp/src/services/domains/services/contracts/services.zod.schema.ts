/**
 * Services Domain Contracts
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
 * @see @veridrop/core/services for the source schemas
 */

import { servicesSchemas as coreServicesSchemas } from "@veridrop/core/services";
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
} = coreServicesSchemas;

/**
 * Export all schemas as a namespace for convenience
 */
export const servicesSchemas = coreServicesSchemas;
