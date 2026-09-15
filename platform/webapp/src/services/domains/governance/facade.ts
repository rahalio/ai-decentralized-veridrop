/**
 * Governance Domain Facade
 *
 * High-level API for governance domain operations.
 * Provides simplified interface for components.
 *
 * Architecture:
 * - Facade pattern for domain operations
 * - Components should use facades, not services directly
 * - Hides complexity of domain orchestration
 */

import { governanceService } from "./governance.service";
// TODO: Import types
// import type { ... } from "./governance.api-types";

/**
 * Governance Facade
 *
 * High-level API for governance operations.
 * Components should use this facade instead of services directly.
 */
export const governanceFacade = {
  /**
   * List parameter versions
   */
  async getParameterVersion(...args: Parameters<typeof governanceService.getParameterVersion>): Promise<any> {
    return governanceService.getParameterVersion(...args);
  },

  /**
   * Propose a parameter change (starts governance delay)
   */
  async getParameterVersion(...args: Parameters<typeof governanceService.getParameterVersion>): Promise<any> {
    return governanceService.getParameterVersion(...args);
  },

  /**
   * Get parameter version
   */
  async getParameterVersion(...args: Parameters<typeof governanceService.getParameterVersion>): Promise<any> {
    return governanceService.getParameterVersion(...args);
  },

  /**
   * Execute parameter change after delay
   */
  async createExecute(...args: Parameters<typeof governanceService.createExecute>): Promise<any> {
    return governanceService.createExecute(...args);
  },

  /**
   * Get network emission pause state
   */
  async getEmissionPause(...args: Parameters<typeof governanceService.getEmissionPause>): Promise<any> {
    return governanceService.getEmissionPause(...args);
  },

  /**
   * Set network emission pause (circuit breaker)
   */
  async updateEmissionPause(...args: Parameters<typeof governanceService.updateEmissionPause>): Promise<any> {
    return governanceService.updateEmissionPause(...args);
  }
};
