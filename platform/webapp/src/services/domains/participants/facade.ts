/**
 * Participants Domain Facade
 *
 * High-level API for participants domain operations.
 * Provides simplified interface for components.
 *
 * Architecture:
 * - Facade pattern for domain operations
 * - Components should use facades, not services directly
 * - Hides complexity of domain orchestration
 */

import { participantsService } from "./participants.service";
// TODO: Import types
// import type { ... } from "./participants.api-types";

/**
 * Participants Facade
 *
 * High-level API for participants operations.
 * Components should use this facade instead of services directly.
 */
export const participantsFacade = {
  /**
   * List participants
   */
  async getParticipant(...args: Parameters<typeof participantsService.getParticipant>): Promise<any> {
    return participantsService.getParticipant(...args);
  },

  /**
   * Apply to the identity TCR
   */
  async getParticipant(...args: Parameters<typeof participantsService.getParticipant>): Promise<any> {
    return participantsService.getParticipant(...args);
  },

  /**
   * Get participant
   */
  async getParticipant(...args: Parameters<typeof participantsService.getParticipant>): Promise<any> {
    return participantsService.getParticipant(...args);
  },

  /**
   * Challenge a TCR listing
   */
  async getChallenge(...args: Parameters<typeof participantsService.getChallenge>): Promise<any> {
    return participantsService.getChallenge(...args);
  },

  /**
   * Approve role eligibility after TCR listing
   */
  async createApproveRole(...args: Parameters<typeof participantsService.createApproveRole>): Promise<any> {
    return participantsService.createApproveRole(...args);
  }
};
