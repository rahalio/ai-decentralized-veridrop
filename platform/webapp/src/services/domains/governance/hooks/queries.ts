/**
 * Governance Query Hooks
 *
 * React Query hooks for fetching governance data
 */

import { useTenantQuery } from "@/services/shared/infrastructure";
import { governanceService } from "../governance.service";

/**
 * Hook to list parameter versions
 *
 * Query key: ["governance", "ParameterVersion", ]
 */
export function useParameterVersion(params?: Record<string, any>) {
  return useTenantQuery(
    ["governance", "ParameterVersion", ],
    async (orgId: string, signal?: AbortSignal) => {
      return governanceService.getParameterVersion(params, signal);
    }
  );
}

/**
 * Hook to get parameter version
 *
 * Query key: ["governance", "ParameterVersion", parameterVersionId]
 */
export function useParameterVersion(parameterVersionId: string, params?: Record<string, any>) {
  return useTenantQuery(
    ["governance", "ParameterVersion", parameterVersionId],
    async (orgId: string, signal?: AbortSignal) => {
      return governanceService.getParameterVersion(parameterVersionId, params, signal);
    },
    {
      enabled: !!parameterVersionId
    }
  );
}

/**
 * Hook to get network emission pause state
 *
 * Query key: ["governance", "EmissionPause", ]
 */
export function useEmissionPause(params?: Record<string, any>) {
  return useTenantQuery(
    ["governance", "EmissionPause", ],
    async (orgId: string, signal?: AbortSignal) => {
      return governanceService.getEmissionPause(params, signal);
    }
  );
}
