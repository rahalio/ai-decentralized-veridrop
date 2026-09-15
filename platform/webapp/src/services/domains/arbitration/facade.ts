/**
 * Arbitration Domain Facade
 *
 * High-level API for arbitration domain operations.
 * Provides simplified interface for components.
 *
 * Architecture:
 * - Facade pattern for domain operations
 * - Components should use facades, not services directly
 * - Hides complexity of domain orchestration
 */

import { arbitrationService } from "./arbitration.service";
// TODO: Import types
// import type { ... } from "./arbitration.api-types";

/**
 * Arbitration Facade
 *
 * High-level API for arbitration operations.
 * Components should use this facade instead of services directly.
 */
export const arbitrationFacade = {
  /**
   * List arbitration cases
   */
  async getArbitrationCase(...args: Parameters<typeof arbitrationService.getArbitrationCase>): Promise<any> {
    return arbitrationService.getArbitrationCase(...args);
  },

  /**
   * Open an arbitration case
   */
  async getArbitrationCase(...args: Parameters<typeof arbitrationService.getArbitrationCase>): Promise<any> {
    return arbitrationService.getArbitrationCase(...args);
  },

  /**
   * Get arbitration case
   */
  async getArbitrationCase(...args: Parameters<typeof arbitrationService.getArbitrationCase>): Promise<any> {
    return arbitrationService.getArbitrationCase(...args);
  },

  /**
   * Decide case and set binding effect
   */
  async getDecide(...args: Parameters<typeof arbitrationService.getDecide>): Promise<any> {
    return arbitrationService.getDecide(...args);
  },

  /**
   * Apply binding entitlement/reward update
   */
  async getBindOutcome(...args: Parameters<typeof arbitrationService.getBindOutcome>): Promise<any> {
    return arbitrationService.getBindOutcome(...args);
  }
};
