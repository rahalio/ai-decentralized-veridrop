/**
 * Rewards Domain Contracts
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
 * @see @veridrop/core/rewards for the source schemas
 */

import { rewardsSchemas as coreRewardsSchemas } from "@veridrop/core/rewards";
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
} = coreRewardsSchemas;

/**
 * Export all schemas as a namespace for convenience
 */
export const rewardsSchemas = coreRewardsSchemas;
