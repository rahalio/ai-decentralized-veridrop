/**
 * Rewards Domain Facade
 *
 * High-level API for rewards domain operations.
 * Provides simplified interface for components.
 *
 * Architecture:
 * - Facade pattern for domain operations
 * - Components should use facades, not services directly
 * - Hides complexity of domain orchestration
 */

import { rewardsService } from "./rewards.service";
// TODO: Import types
// import type { ... } from "./rewards.api-types";

/**
 * Rewards Facade
 *
 * High-level API for rewards operations.
 * Components should use this facade instead of services directly.
 */
export const rewardsFacade = {
  /**
   * List reward epochs
   */
  async getRewardEpoch(...args: Parameters<typeof rewardsService.getRewardEpoch>): Promise<any> {
    return rewardsService.getRewardEpoch(...args);
  },

  /**
   * Open a reward epoch
   */
  async getRewardEpoch(...args: Parameters<typeof rewardsService.getRewardEpoch>): Promise<any> {
    return rewardsService.getRewardEpoch(...args);
  },

  /**
   * Get reward epoch
   */
  async getRewardEpoch(...args: Parameters<typeof rewardsService.getRewardEpoch>): Promise<any> {
    return rewardsService.getRewardEpoch(...args);
  },

  /**
   * Pause emission for proof class(es)
   */
  async getPause(...args: Parameters<typeof rewardsService.getPause>): Promise<any> {
    return rewardsService.getPause(...args);
  },

  /**
   * Close / finalize an epoch
   */
  async getClose(...args: Parameters<typeof rewardsService.getClose>): Promise<any> {
    return rewardsService.getClose(...args);
  },

  /**
   * Allocate rewards at stake×proof intersection
   */
  async getAllocate(...args: Parameters<typeof rewardsService.getAllocate>): Promise<any> {
    return rewardsService.getAllocate(...args);
  },

  /**
   * Export dual stake+proof audit trail
   */
  async getExportAudit(...args: Parameters<typeof rewardsService.getExportAudit>): Promise<any> {
    return rewardsService.getExportAudit(...args);
  },

  /**
   * Clawback emitted rewards with reason
   */
  async getClawback(...args: Parameters<typeof rewardsService.getClawback>): Promise<any> {
    return rewardsService.getClawback(...args);
  }
};
