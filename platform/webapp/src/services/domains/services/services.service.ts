/**
 * Services Service — hand-fitted after Mode A scaffold.
 */

import { apiClient } from "@/services/shared/infrastructure";
import { makeService } from "@/services/shared/infrastructure/service-wrapper";
import { getEffectiveOrgId } from "@/services/shared/infrastructure/tenant-state";

const rawServicesService = {
  async listServices(params?: Record<string, string | number>, signal?: AbortSignal) {
    if (!getEffectiveOrgId()) throw new Error("Organization ID is required");
    const qs = params ? `?${new URLSearchParams(params as Record<string, string>)}` : "";
    const response = await apiClient.get<{ items?: unknown[]; nextCursor?: string }>(
      `/v0/services${qs}`,
      { signal },
    );
    return response.data;
  },

  async registerService(data: Record<string, unknown>, signal?: AbortSignal) {
    if (!getEffectiveOrgId()) throw new Error("Organization ID is required");
    const response = await apiClient.post(`/v0/services`, {
      body: data,
      signal,
      headers: { "Idempotency-Key": crypto.randomUUID() },
    });
    return response.data;
  },

  async getService(serviceId: string, signal?: AbortSignal) {
    if (!getEffectiveOrgId()) throw new Error("Organization ID is required");
    const response = await apiClient.get(`/v0/services/${serviceId}`, { signal });
    return response.data;
  },

  async setProofPolicy(
    serviceId: string,
    data: Record<string, unknown>,
    signal?: AbortSignal,
  ) {
    if (!getEffectiveOrgId()) throw new Error("Organization ID is required");
    const response = await apiClient.post(`/v0/services/${serviceId}/proof-policy`, {
      body: data,
      signal,
      headers: { "Idempotency-Key": crypto.randomUUID() },
    });
    return response.data;
  },

  async suspendService(
    serviceId: string,
    data?: Record<string, unknown>,
    signal?: AbortSignal,
  ) {
    if (!getEffectiveOrgId()) throw new Error("Organization ID is required");
    const response = await apiClient.post(`/v0/services/${serviceId}/suspend`, {
      body: data,
      signal,
      headers: { "Idempotency-Key": crypto.randomUUID() },
    });
    return response.data;
  },
};

export const servicesService = makeService(rawServicesService, "services");
