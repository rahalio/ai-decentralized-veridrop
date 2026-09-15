/**
 * Curation Domain Facade
 *
 * High-level API for curation domain operations.
 * Provides simplified interface for components.
 *
 * Architecture:
 * - Facade pattern for domain operations
 * - Components should use facades, not services directly
 * - Hides complexity of domain orchestration
 */

import { curationService } from "./curation.service";
// TODO: Import types
// import type { ... } from "./curation.api-types";

/**
 * Curation Facade
 *
 * High-level API for curation operations.
 * Components should use this facade instead of services directly.
 */
export const curationFacade = {
  /**
   * List drop positions
   */
  async getDropPosition(...args: Parameters<typeof curationService.getDropPosition>): Promise<any> {
    return curationService.getDropPosition(...args);
  },

  /**
   * Open a staking position on a service drop
   */
  async getDropPosition(...args: Parameters<typeof curationService.getDropPosition>): Promise<any> {
    return curationService.getDropPosition(...args);
  },

  /**
   * Get drop position
   */
  async getDropPosition(...args: Parameters<typeof curationService.getDropPosition>): Promise<any> {
    return curationService.getDropPosition(...args);
  },

  /**
   * Unstake from a drop position
   */
  async getUnstake(...args: Parameters<typeof curationService.getUnstake>): Promise<any> {
    return curationService.getUnstake(...args);
  },

  /**
   * List stake events for a position
   */
  async getStakeEvent(...args: Parameters<typeof curationService.getStakeEvent>): Promise<any> {
    return curationService.getStakeEvent(...args);
  }
};
