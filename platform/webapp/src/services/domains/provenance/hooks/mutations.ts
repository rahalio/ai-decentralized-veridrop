/**
 * Provenance Mutation Hooks
 *
 * React Query hooks for mutating provenance data
 */

import { useTenantMutation } from "@/services/shared/infrastructure";
import { provenanceService } from "../provenance.service";
// TODO: Import types
// import type { ... } from "../provenance.api-types";

/**
 * Hook to record attribution provenance
 *
 * Automatically invalidates provenance queries on success.
 */
export function useGetProvenanceRecord() {
  return useTenantMutation(
    async (orgId: string, data: any) => {
      return provenanceService.getProvenanceRecord(data);
    },
    {
      invalidateQueries: [["provenance", "ProvenanceRecord"]],
    }
  );
}

/**
 * Hook to file a data-escape / republication challenge
 *
 * Automatically invalidates provenance queries on success.
 */
export function useGetChallengeEscape() {
  return useTenantMutation(
    async (orgId: string, data: any) => {
      return provenanceService.getChallengeEscape(data);
    },
    {
      invalidateQueries: [["provenance", "ChallengeEscape"]],
    }
  );
}
