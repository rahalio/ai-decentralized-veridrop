/**
 * Agreements Query Hooks
 *
 * React Query hooks for fetching agreements data
 */

import { useTenantQuery } from "@/services/shared/infrastructure";
import { agreementsService } from "../agreements.service";

/**
 * Hook to list service agreements
 *
 * Query key: ["agreements", "ServiceAgreement", ]
 */
export function useServiceAgreement(params?: Record<string, any>) {
  return useTenantQuery(
    ["agreements", "ServiceAgreement", ],
    async (orgId: string, signal?: AbortSignal) => {
      return agreementsService.getServiceAgreement(params, signal);
    }
  );
}

/**
 * Hook to get service agreement
 *
 * Query key: ["agreements", "ServiceAgreement", agreementId]
 */
export function useServiceAgreement(agreementId: string, params?: Record<string, any>) {
  return useTenantQuery(
    ["agreements", "ServiceAgreement", agreementId],
    async (orgId: string, signal?: AbortSignal) => {
      return agreementsService.getServiceAgreement(agreementId, params, signal);
    },
    {
      enabled: !!agreementId
    }
  );
}
