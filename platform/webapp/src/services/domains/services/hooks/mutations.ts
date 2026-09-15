/**
 * Services Mutation Hooks
 *
 * React Query hooks for mutating services data
 */

import { useTenantMutation } from "@/services/shared/infrastructure";
import { servicesService } from "../services.service";
// TODO: Import types
// import type { ... } from "../services.api-types";

/**
 * Hook to register a service
 *
 * Automatically invalidates services queries on success.
 */
export function useCreateService() {
  return useTenantMutation(
    async (orgId: string, data: any) => {
      return servicesService.createService(data);
    },
    {
      invalidateQueries: [["services", "Service"]],
    }
  );
}

/**
 * Hook to set required proof type for rewards
 *
 * Automatically invalidates services queries on success.
 */
export function useUpdateProofPolicy() {
  return useTenantMutation(
    async (orgId: string, data: any) => {
      return servicesService.updateProofPolicy(data);
    },
    {
      invalidateQueries: [["services", "ProofPolicy"]],
    }
  );
}

/**
 * Hook to suspend a spam or compromised service
 *
 * Automatically invalidates services queries on success.
 */
export function useGetSuspend() {
  return useTenantMutation(
    async (orgId: string, data: any) => {
      return servicesService.getSuspend(data);
    },
    {
      invalidateQueries: [["services", "Suspend"]],
    }
  );
}
