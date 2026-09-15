/**
 * Rewards Query Hooks
 *
 * React Query hooks for fetching rewards data
 */

import { useTenantQuery } from "@/services/shared/infrastructure";
import { rewardsService } from "../rewards.service";

/**
 * Hook to list reward epochs
 *
 * Query key: ["rewards", "RewardEpoch", ]
 */
export function useRewardEpoch(params?: Record<string, any>) {
  return useTenantQuery(
    ["rewards", "RewardEpoch", ],
    async (orgId: string, signal?: AbortSignal) => {
      return rewardsService.getRewardEpoch(params, signal);
    }
  );
}

/**
 * Hook to get reward epoch
 *
 * Query key: ["rewards", "RewardEpoch", epochId]
 */
export function useRewardEpoch(epochId: string, params?: Record<string, any>) {
  return useTenantQuery(
    ["rewards", "RewardEpoch", epochId],
    async (orgId: string, signal?: AbortSignal) => {
      return rewardsService.getRewardEpoch(epochId, params, signal);
    },
    {
      enabled: !!epochId
    }
  );
}
