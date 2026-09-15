/**
 * Proofs Mutation Hooks
 *
 * React Query hooks for mutating proofs data
 */

import { useTenantMutation } from "@/services/shared/infrastructure";
import { proofsService } from "../proofs.service";
// TODO: Import types
// import type { ... } from "../proofs.api-types";

/**
 * Hook to submit a delivery proof digest
 *
 * Automatically invalidates proofs queries on success.
 */
export function useCreateDeliveryProof() {
  return useTenantMutation(
    async (orgId: string, data: any) => {
      return proofsService.createDeliveryProof(data);
    },
    {
      invalidateQueries: [["proofs", "DeliveryProof"]],
    }
  );
}

/**
 * Hook to accept a delivery proof
 *
 * Automatically invalidates proofs queries on success.
 */
export function useGetAccept() {
  return useTenantMutation(
    async (orgId: string, data: any) => {
      return proofsService.getAccept(data);
    },
    {
      invalidateQueries: [["proofs", "Accept"]],
    }
  );
}

/**
 * Hook to reject a delivery proof with reason
 *
 * Automatically invalidates proofs queries on success.
 */
export function useCreateReject() {
  return useTenantMutation(
    async (orgId: string, data: any) => {
      return proofsService.createReject(data);
    },
    {
      invalidateQueries: [["proofs", "Reject"]],
    }
  );
}

/**
 * Hook to slash linked stake with reason
 *
 * Automatically invalidates proofs queries on success.
 */
export function useGetSlash() {
  return useTenantMutation(
    async (orgId: string, data: any) => {
      return proofsService.getSlash(data);
    },
    {
      invalidateQueries: [["proofs", "Slash"]],
    }
  );
}
