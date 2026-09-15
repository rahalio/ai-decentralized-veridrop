/**
 * Provenance Domain Facade
 *
 * High-level API for provenance domain operations.
 * Provides simplified interface for components.
 *
 * Architecture:
 * - Facade pattern for domain operations
 * - Components should use facades, not services directly
 * - Hides complexity of domain orchestration
 */

import { provenanceService } from "./provenance.service";
// TODO: Import types
// import type { ... } from "./provenance.api-types";

/**
 * Provenance Facade
 *
 * High-level API for provenance operations.
 * Components should use this facade instead of services directly.
 */
export const provenanceFacade = {
  /**
   * List provenance records
   */
  async getProvenanceRecord(...args: Parameters<typeof provenanceService.getProvenanceRecord>): Promise<any> {
    return provenanceService.getProvenanceRecord(...args);
  },

  /**
   * Record attribution provenance
   */
  async getProvenanceRecord(...args: Parameters<typeof provenanceService.getProvenanceRecord>): Promise<any> {
    return provenanceService.getProvenanceRecord(...args);
  },

  /**
   * Get provenance record
   */
  async getProvenanceRecord(...args: Parameters<typeof provenanceService.getProvenanceRecord>): Promise<any> {
    return provenanceService.getProvenanceRecord(...args);
  },

  /**
   * File a data-escape / republication challenge
   */
  async getChallengeEscape(...args: Parameters<typeof provenanceService.getChallengeEscape>): Promise<any> {
    return provenanceService.getChallengeEscape(...args);
  }
};
