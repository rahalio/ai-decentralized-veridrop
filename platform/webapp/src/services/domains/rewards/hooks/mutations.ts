/**
 * Rewards Mutation Hooks
 *
 * React Query hooks for mutating rewards data
 */

import { useTenantMutation } from "@/services/shared/infrastructure";
import { rewardsService } from "../rewards.service";
// TODO: Import types
// import type { ... } from "../rewards.api-types";

/**
 * Hook to open a reward epoch
 *
 * Automatically invalidates rewards queries on success.
 */
export function useGetRewardEpoch() {
  return useTenantMutation(
    async (orgId: string, data: any) => {
      return rewardsService.getRewardEpoch(data);
    },
    {
      invalidateQueries: [["rewards", "RewardEpoch"]],
    }
  );
}

/**
 * Hook to pause emission for proof class(es)
 *
 * Automatically invalidates rewards queries on success.
 */
export function useGetPause() {
  return useTenantMutation(
    async (orgId: string, data: any) => {
      return rewardsService.getPause(data);
    },
    {
      invalidateQueries: [["rewards", "Pause"]],
    }
  );
}

/**
 * Hook to close / finalize an epoch
 *
 * Automatically invalidates rewards queries on success.
 */
export function useGetClose() {
  return useTenantMutation(
    async (orgId: string, data: any) => {
      return rewardsService.getClose(data);
    },
    {
      invalidateQueries: [["rewards", "Close"]],
    }
  );
}

/**
 * Hook to allocate rewards at stake×proof intersection
 *
 * Automatically invalidates rewards queries on success.
 */
export function useGetAllocate() {
  return useTenantMutation(
    async (orgId: string, data: any) => {
      return rewardsService.getAllocate(data);
    },
    {
      invalidateQueries: [["rewards", "Allocate"]],
    }
  );
}

/**
 * Hook to export dual stake+proof audit trail
 *
 * Automatically invalidates rewards queries on success.
 */
export function useListExportAudit() {
  return useTenantMutation(
    async (orgId: string, data: any) => {
      return rewardsService.getExportAudit(data);
    },
    {
      invalidateQueries: [["rewards", "ExportAudit"]],
    }
  );
}

/**
 * Hook to clawback emitted rewards with reason
 *
 * Automatically invalidates rewards queries on success.
 */
export function useGetClawback() {
  return useTenantMutation(
    async (orgId: string, data: any) => {
      return rewardsService.getClawback(data);
    },
    {
      invalidateQueries: [["rewards", "Clawback"]],
    }
  );
}
