/**
 * Governance Mutation Hooks
 *
 * React Query hooks for mutating governance data
 */

import { useTenantMutation } from "@/services/shared/infrastructure";
import { governanceService } from "../governance.service";
// TODO: Import types
// import type { ... } from "../governance.api-types";

/**
 * Hook to propose a parameter change (starts governance delay)
 *
 * Automatically invalidates governance queries on success.
 */
export function useGetParameterVersion() {
  return useTenantMutation(
    async (orgId: string, data: any) => {
      return governanceService.getParameterVersion(data);
    },
    {
      invalidateQueries: [["governance", "ParameterVersion"]],
    }
  );
}

/**
 * Hook to execute parameter change after delay
 *
 * Automatically invalidates governance queries on success.
 */
export function useCreateExecute() {
  return useTenantMutation(
    async (orgId: string, data: any) => {
      return governanceService.createExecute(data);
    },
    {
      invalidateQueries: [["governance", "Execute"]],
    }
  );
}

/**
 * Hook to set network emission pause (circuit breaker)
 *
 * Automatically invalidates governance queries on success.
 */
export function useUpdateEmissionPause() {
  return useTenantMutation(
    async (orgId: string, data: any) => {
      return governanceService.updateEmissionPause(data);
    },
    {
      invalidateQueries: [["governance", "EmissionPause"]],
    }
  );
}
