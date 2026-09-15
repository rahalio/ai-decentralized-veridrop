/**
 * Arbitration Query Hooks
 *
 * React Query hooks for fetching arbitration data
 */

import { useTenantQuery } from "@/services/shared/infrastructure";
import { arbitrationService } from "../arbitration.service";

/**
 * Hook to list arbitration cases
 *
 * Query key: ["arbitration", "ArbitrationCase", ]
 */
export function useArbitrationCase(params?: Record<string, any>) {
  return useTenantQuery(
    ["arbitration", "ArbitrationCase", ],
    async (orgId: string, signal?: AbortSignal) => {
      return arbitrationService.getArbitrationCase(params, signal);
    }
  );
}

/**
 * Hook to get arbitration case
 *
 * Query key: ["arbitration", "ArbitrationCase", caseId]
 */
export function useArbitrationCase(caseId: string, params?: Record<string, any>) {
  return useTenantQuery(
    ["arbitration", "ArbitrationCase", caseId],
    async (orgId: string, signal?: AbortSignal) => {
      return arbitrationService.getArbitrationCase(caseId, params, signal);
    },
    {
      enabled: !!caseId
    }
  );
}
