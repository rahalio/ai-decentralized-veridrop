/**
 * Proofs Domain Facade
 *
 * High-level API for proofs domain operations.
 * Provides simplified interface for components.
 *
 * Architecture:
 * - Facade pattern for domain operations
 * - Components should use facades, not services directly
 * - Hides complexity of domain orchestration
 */

import { proofsService } from "./proofs.service";
// TODO: Import types
// import type { ... } from "./proofs.api-types";

/**
 * Proofs Facade
 *
 * High-level API for proofs operations.
 * Components should use this facade instead of services directly.
 */
export const proofsFacade = {
  /**
   * List delivery proofs (inbox)
   */
  async getDeliveryProof(...args: Parameters<typeof proofsService.getDeliveryProof>): Promise<any> {
    return proofsService.getDeliveryProof(...args);
  },

  /**
   * Submit a delivery proof digest
   */
  async createDeliveryProof(...args: Parameters<typeof proofsService.createDeliveryProof>): Promise<any> {
    return proofsService.createDeliveryProof(...args);
  },

  /**
   * Get delivery proof
   */
  async getDeliveryProof(...args: Parameters<typeof proofsService.getDeliveryProof>): Promise<any> {
    return proofsService.getDeliveryProof(...args);
  },

  /**
   * Accept a delivery proof
   */
  async getAccept(...args: Parameters<typeof proofsService.getAccept>): Promise<any> {
    return proofsService.getAccept(...args);
  },

  /**
   * Reject a delivery proof with reason
   */
  async createReject(...args: Parameters<typeof proofsService.createReject>): Promise<any> {
    return proofsService.createReject(...args);
  },

  /**
   * Slash linked stake with reason
   */
  async getSlash(...args: Parameters<typeof proofsService.getSlash>): Promise<any> {
    return proofsService.getSlash(...args);
  }
};
