/**
 * Curation Query Hooks
 *
 * React Query hooks for fetching curation data
 */

import { useTenantQuery } from "@/services/shared/infrastructure";
import { curationService } from "../curation.service";

/**
 * Hook to list drop positions
 *
 * Query key: ["curation", "DropPosition", ]
 */
export function useDropPosition(params?: Record<string, any>) {
  return useTenantQuery(
    ["curation", "DropPosition", ],
    async (orgId: string, signal?: AbortSignal) => {
      return curationService.getDropPosition(params, signal);
    }
  );
}

/**
 * Hook to get drop position
 *
 * Query key: ["curation", "DropPosition", positionId]
 */
export function useDropPosition(positionId: string, params?: Record<string, any>) {
  return useTenantQuery(
    ["curation", "DropPosition", positionId],
    async (orgId: string, signal?: AbortSignal) => {
      return curationService.getDropPosition(positionId, params, signal);
    },
    {
      enabled: !!positionId
    }
  );
}

/**
 * Hook to list stake events for a position
 *
 * Query key: ["curation", "StakeEvent", positionId]
 */
export function useStakeEvent(positionId: string, params?: Record<string, any>) {
  return useTenantQuery(
    ["curation", "StakeEvent", positionId],
    async (orgId: string, signal?: AbortSignal) => {
      return curationService.getStakeEvent(positionId, params, signal);
    },
    {
      enabled: !!positionId
    }
  );
}
