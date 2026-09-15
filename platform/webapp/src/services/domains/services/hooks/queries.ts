/**
 * Services Query Hooks
 *
 * React Query hooks for fetching services data
 */

import { useTenantQuery } from "@/services/shared/infrastructure";
import { servicesService } from "../services.service";

/**
 * Hook to list services
 *
 * Query key: ["services", "Service", ]
 */
export function useService(params?: Record<string, any>) {
  return useTenantQuery(
    ["services", "Service", ],
    async (orgId: string, signal?: AbortSignal) => {
      return servicesService.getService(params, signal);
    }
  );
}

/**
 * Hook to get service
 *
 * Query key: ["services", "Service", serviceId]
 */
export function useService(serviceId: string, params?: Record<string, any>) {
  return useTenantQuery(
    ["services", "Service", serviceId],
    async (orgId: string, signal?: AbortSignal) => {
      return servicesService.getService(serviceId, params, signal);
    },
    {
      enabled: !!serviceId
    }
  );
}
