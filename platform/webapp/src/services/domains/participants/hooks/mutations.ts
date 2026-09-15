/**
 * Participants Mutation Hooks
 *
 * React Query hooks for mutating participants data
 */

import { useTenantMutation } from "@/services/shared/infrastructure";
import { participantsService } from "../participants.service";
// TODO: Import types
// import type { ... } from "../participants.api-types";

/**
 * Hook to apply to the identity tcr
 *
 * Automatically invalidates participants queries on success.
 */
export function useGetParticipant() {
  return useTenantMutation(
    async (orgId: string, data: any) => {
      return participantsService.getParticipant(data);
    },
    {
      invalidateQueries: [["participants", "Participant"]],
    }
  );
}

/**
 * Hook to challenge a tcr listing
 *
 * Automatically invalidates participants queries on success.
 */
export function useGetChallenge() {
  return useTenantMutation(
    async (orgId: string, data: any) => {
      return participantsService.getChallenge(data);
    },
    {
      invalidateQueries: [["participants", "Challenge"]],
    }
  );
}

/**
 * Hook to approve role eligibility after tcr listing
 *
 * Automatically invalidates participants queries on success.
 */
export function useCreateApproveRole() {
  return useTenantMutation(
    async (orgId: string, data: any) => {
      return participantsService.createApproveRole(data);
    },
    {
      invalidateQueries: [["participants", "ApproveRole"]],
    }
  );
}
