/**
 * Proofs Query Hooks
 *
 * React Query hooks for fetching proofs data
 */

import { useTenantQuery } from "@/services/shared/infrastructure";
import { proofsService } from "../proofs.service";

/**
 * Hook to list delivery proofs (inbox)
 *
 * Query key: ["proofs", "DeliveryProof", ]
 */
export function useDeliveryProof(params?: Record<string, any>) {
  return useTenantQuery(
    ["proofs", "DeliveryProof", ],
    async (orgId: string, signal?: AbortSignal) => {
      return proofsService.getDeliveryProof(params, signal);
    }
  );
}

/**
 * Hook to get delivery proof
 *
 * Query key: ["proofs", "DeliveryProof", proofId]
 */
export function useDeliveryProof(proofId: string, params?: Record<string, any>) {
  return useTenantQuery(
    ["proofs", "DeliveryProof", proofId],
    async (orgId: string, signal?: AbortSignal) => {
      return proofsService.getDeliveryProof(proofId, params, signal);
    },
    {
      enabled: !!proofId
    }
  );
}
