/**
 * Curation Mutation Hooks
 *
 * React Query hooks for mutating curation data
 */

import { useTenantMutation } from "@/services/shared/infrastructure";
import { curationService } from "../curation.service";
// TODO: Import types
// import type { ... } from "../curation.api-types";

/**
 * Hook to open a staking position on a service drop
 *
 * Automatically invalidates curation queries on success.
 */
export function useGetDropPosition() {
  return useTenantMutation(
    async (orgId: string, data: any) => {
      return curationService.getDropPosition(data);
    },
    {
      invalidateQueries: [["curation", "DropPosition"]],
    }
  );
}

/**
 * Hook to unstake from a drop position
 *
 * Automatically invalidates curation queries on success.
 */
export function useGetUnstake() {
  return useTenantMutation(
    async (orgId: string, data: any) => {
      return curationService.getUnstake(data);
    },
    {
      invalidateQueries: [["curation", "Unstake"]],
    }
  );
}
