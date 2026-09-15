/**
 * Agreements Domain Facade
 *
 * High-level API for agreements domain operations.
 * Provides simplified interface for components.
 *
 * Architecture:
 * - Facade pattern for domain operations
 * - Components should use facades, not services directly
 * - Hides complexity of domain orchestration
 */

import { agreementsService } from "./agreements.service";
// TODO: Import types
// import type { ... } from "./agreements.api-types";

/**
 * Agreements Facade
 *
 * High-level API for agreements operations.
 * Components should use this facade instead of services directly.
 */
export const agreementsFacade = {
  /**
   * List service agreements
   */
  async getServiceAgreement(...args: Parameters<typeof agreementsService.getServiceAgreement>): Promise<any> {
    return agreementsService.getServiceAgreement(...args);
  },

  /**
   * Create a service agreement
   */
  async createServiceAgreement(...args: Parameters<typeof agreementsService.createServiceAgreement>): Promise<any> {
    return agreementsService.createServiceAgreement(...args);
  },

  /**
   * Get service agreement
   */
  async getServiceAgreement(...args: Parameters<typeof agreementsService.getServiceAgreement>): Promise<any> {
    return agreementsService.getServiceAgreement(...args);
  },

  /**
   * Revoke consumer access
   */
  async getRevokeAccess(...args: Parameters<typeof agreementsService.getRevokeAccess>): Promise<any> {
    return agreementsService.getRevokeAccess(...args);
  },

  /**
   * Accept delivery under an agreement
   */
  async getAcceptDelivery(...args: Parameters<typeof agreementsService.getAcceptDelivery>): Promise<any> {
    return agreementsService.getAcceptDelivery(...args);
  }
};
