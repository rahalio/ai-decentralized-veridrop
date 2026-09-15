/**
 * Arbitration Mutation Hooks
 *
 * React Query hooks for mutating arbitration data
 */

import { useTenantMutation } from "@/services/shared/infrastructure";
import { arbitrationService } from "../arbitration.service";
// TODO: Import types
// import type { ... } from "../arbitration.api-types";

/**
 * Hook to open an arbitration case
 *
 * Automatically invalidates arbitration queries on success.
 */
export function useGetArbitrationCase() {
  return useTenantMutation(
    async (orgId: string, data: any) => {
      return arbitrationService.getArbitrationCase(data);
    },
    {
      invalidateQueries: [["arbitration", "ArbitrationCase"]],
    }
  );
}

/**
 * Hook to decide case and set binding effect
 *
 * Automatically invalidates arbitration queries on success.
 */
export function useGetDecide() {
  return useTenantMutation(
    async (orgId: string, data: any) => {
      return arbitrationService.getDecide(data);
    },
    {
      invalidateQueries: [["arbitration", "Decide"]],
    }
  );
}

/**
 * Hook to apply binding entitlement/reward update
 *
 * Automatically invalidates arbitration queries on success.
 */
export function useGetBindOutcome() {
  return useTenantMutation(
    async (orgId: string, data: any) => {
      return arbitrationService.getBindOutcome(data);
    },
    {
      invalidateQueries: [["arbitration", "BindOutcome"]],
    }
  );
}
