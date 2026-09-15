/**
 * Provenance Query Hooks
 *
 * React Query hooks for fetching provenance data
 */

import { useTenantQuery } from "@/services/shared/infrastructure";
import { provenanceService } from "../provenance.service";

/**
 * Hook to list provenance records
 *
 * Query key: ["provenance", "ProvenanceRecord", ]
 */
export function useProvenanceRecord(params?: Record<string, any>) {
  return useTenantQuery(
    ["provenance", "ProvenanceRecord", ],
    async (orgId: string, signal?: AbortSignal) => {
      return provenanceService.getProvenanceRecord(params, signal);
    }
  );
}

/**
 * Hook to get provenance record
 *
 * Query key: ["provenance", "ProvenanceRecord", provenanceId]
 */
export function useProvenanceRecord(provenanceId: string, params?: Record<string, any>) {
  return useTenantQuery(
    ["provenance", "ProvenanceRecord", provenanceId],
    async (orgId: string, signal?: AbortSignal) => {
      return provenanceService.getProvenanceRecord(provenanceId, params, signal);
    },
    {
      enabled: !!provenanceId
    }
  );
}
