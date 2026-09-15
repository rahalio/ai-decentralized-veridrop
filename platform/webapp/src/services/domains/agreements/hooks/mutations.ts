/**
 * Agreements Mutation Hooks
 *
 * React Query hooks for mutating agreements data
 */

import { useTenantMutation } from "@/services/shared/infrastructure";
import { agreementsService } from "../agreements.service";
// TODO: Import types
// import type { ... } from "../agreements.api-types";

/**
 * Hook to create a service agreement
 *
 * Automatically invalidates agreements queries on success.
 */
export function useCreateServiceAgreement() {
  return useTenantMutation(
    async (orgId: string, data: any) => {
      return agreementsService.createServiceAgreement(data);
    },
    {
      invalidateQueries: [["agreements", "ServiceAgreement"]],
    }
  );
}

/**
 * Hook to revoke consumer access
 *
 * Automatically invalidates agreements queries on success.
 */
export function useGetRevokeAccess() {
  return useTenantMutation(
    async (orgId: string, data: any) => {
      return agreementsService.getRevokeAccess(data);
    },
    {
      invalidateQueries: [["agreements", "RevokeAccess"]],
    }
  );
}

/**
 * Hook to accept delivery under an agreement
 *
 * Automatically invalidates agreements queries on success.
 */
export function useGetAcceptDelivery() {
  return useTenantMutation(
    async (orgId: string, data: any) => {
      return agreementsService.getAcceptDelivery(data);
    },
    {
      invalidateQueries: [["agreements", "AcceptDelivery"]],
    }
  );
}
