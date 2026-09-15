/**
 * Participants Query Hooks
 *
 * React Query hooks for fetching participants data
 */

import { useTenantQuery } from "@/services/shared/infrastructure";
import { participantsService } from "../participants.service";

/**
 * Hook to list participants
 *
 * Query key: ["participants", "Participant", ]
 */
export function useParticipant(params?: Record<string, any>) {
  return useTenantQuery(
    ["participants", "Participant", ],
    async (orgId: string, signal?: AbortSignal) => {
      return participantsService.getParticipant(params, signal);
    }
  );
}

/**
 * Hook to get participant
 *
 * Query key: ["participants", "Participant", participantId]
 */
export function useParticipant(participantId: string, params?: Record<string, any>) {
  return useTenantQuery(
    ["participants", "Participant", participantId],
    async (orgId: string, signal?: AbortSignal) => {
      return participantsService.getParticipant(participantId, params, signal);
    },
    {
      enabled: !!participantId
    }
  );
}
