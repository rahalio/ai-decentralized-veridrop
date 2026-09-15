import { makeApi, Zodios, type ZodiosOptions } from '@zodios/core';
import { z } from 'zod';

const openRewardEpoch_Body = z
  .object({
    periodStart: z.string().datetime({ offset: true }),
    periodEnd: z.string().datetime({ offset: true }),
  })
  .passthrough();
const pauseRewardEpoch_Body = z
  .object({
    proofTypes: z
      .array(z.enum(['availability', 'zkCompute', 'replication']))
      .min(1),
    reason: z.string().max(500).optional(),
  })
  .passthrough();
const clawbackRewardEpoch_Body = z
  .object({
    reason: z.string().min(1).max(500),
    amount: z.number().gt(0).optional(),
  })
  .passthrough();
const Problem = z
  .object({
    type: z.string().url(),
    title: z.string(),
    status: z.number().int(),
    detail: z.string(),
    instance: z.string().url(),
    code: z.string(),
  })
  .partial()
  .passthrough();
const EpochId = z.string();
const EpochStatus = z.enum(['open', 'finalizing', 'paid', 'paused']);
const ProofType = z.enum(['availability', 'zkCompute', 'replication']);
const RewardEpoch = z
  .object({
    epochId: z.string().regex(/^epc_[0-9A-HJKMNP-TV-Z]{26}$/),
    periodStart: z.string().datetime({ offset: true }),
    periodEnd: z.string().datetime({ offset: true }),
    status: z.enum(['open', 'finalizing', 'paid', 'paused']),
    totalEmitted: z.number().gte(0),
    dualLinkagePct: z.number(),
    pausedProofTypes: z
      .array(z.enum(['availability', 'zkCompute', 'replication']))
      .optional(),
    createdAt: z.string().datetime({ offset: true }),
    updatedAt: z.string().datetime({ offset: true }),
  })
  .passthrough();
const RewardEpochListData = z
  .object({
    items: z.array(
      z
        .object({
          epochId: z.string().regex(/^epc_[0-9A-HJKMNP-TV-Z]{26}$/),
          periodStart: z.string().datetime({ offset: true }),
          periodEnd: z.string().datetime({ offset: true }),
          status: z.enum(['open', 'finalizing', 'paid', 'paused']),
          totalEmitted: z.number().gte(0),
          dualLinkagePct: z.number(),
          pausedProofTypes: z
            .array(z.enum(['availability', 'zkCompute', 'replication']))
            .optional(),
          createdAt: z.string().datetime({ offset: true }),
          updatedAt: z.string().datetime({ offset: true }),
        })
        .passthrough()
    ),
    nextCursor: z.string().optional(),
  })
  .passthrough();
const ResponseMeta = z
  .object({
    requestId: z.string().uuid(),
    correlationId: z.string(),
    generatedAt: z.string().datetime({ offset: true }),
  })
  .partial()
  .passthrough();
const RewardEpochListResponse = z
  .object({
    data: z
      .object({
        items: z.array(
          z
            .object({
              epochId: z.string().regex(/^epc_[0-9A-HJKMNP-TV-Z]{26}$/),
              periodStart: z.string().datetime({ offset: true }),
              periodEnd: z.string().datetime({ offset: true }),
              status: z.enum(['open', 'finalizing', 'paid', 'paused']),
              totalEmitted: z.number().gte(0),
              dualLinkagePct: z.number(),
              pausedProofTypes: z
                .array(z.enum(['availability', 'zkCompute', 'replication']))
                .optional(),
              createdAt: z.string().datetime({ offset: true }),
              updatedAt: z.string().datetime({ offset: true }),
            })
            .passthrough()
        ),
        nextCursor: z.string().optional(),
      })
      .passthrough(),
    meta: z
      .object({
        requestId: z.string().uuid(),
        correlationId: z.string(),
        generatedAt: z.string().datetime({ offset: true }),
      })
      .partial()
      .passthrough()
      .optional(),
  })
  .passthrough();
const RewardEpochCreateRequest = z
  .object({
    periodStart: z.string().datetime({ offset: true }),
    periodEnd: z.string().datetime({ offset: true }),
  })
  .passthrough();
const RewardEpochResponse = z
  .object({
    data: z
      .object({
        epochId: z.string().regex(/^epc_[0-9A-HJKMNP-TV-Z]{26}$/),
        periodStart: z.string().datetime({ offset: true }),
        periodEnd: z.string().datetime({ offset: true }),
        status: z.enum(['open', 'finalizing', 'paid', 'paused']),
        totalEmitted: z.number().gte(0),
        dualLinkagePct: z.number(),
        pausedProofTypes: z
          .array(z.enum(['availability', 'zkCompute', 'replication']))
          .optional(),
        createdAt: z.string().datetime({ offset: true }),
        updatedAt: z.string().datetime({ offset: true }),
      })
      .passthrough(),
    meta: z
      .object({
        requestId: z.string().uuid(),
        correlationId: z.string(),
        generatedAt: z.string().datetime({ offset: true }),
      })
      .partial()
      .passthrough()
      .optional(),
  })
  .passthrough();
const PauseEmissionRequest = z
  .object({
    proofTypes: z
      .array(z.enum(['availability', 'zkCompute', 'replication']))
      .min(1),
    reason: z.string().max(500).optional(),
  })
  .passthrough();
const AllocateRewardsRequest = z
  .object({ dryRun: z.boolean().default(false) })
  .partial()
  .passthrough();
const AuditExport = z
  .object({
    epochId: z.string().regex(/^epc_[0-9A-HJKMNP-TV-Z]{26}$/),
    exportedAt: z.string().datetime({ offset: true }),
    entryCount: z.number().int().gte(0),
    downloadUrl: z.string().url().optional(),
  })
  .passthrough();
const AuditExportResponse = z
  .object({
    data: z
      .object({
        epochId: z.string().regex(/^epc_[0-9A-HJKMNP-TV-Z]{26}$/),
        exportedAt: z.string().datetime({ offset: true }),
        entryCount: z.number().int().gte(0),
        downloadUrl: z.string().url().optional(),
      })
      .passthrough(),
    meta: z
      .object({
        requestId: z.string().uuid(),
        correlationId: z.string(),
        generatedAt: z.string().datetime({ offset: true }),
      })
      .partial()
      .passthrough()
      .optional(),
  })
  .passthrough();
const ClawbackRequest = z
  .object({
    reason: z.string().min(1).max(500),
    amount: z.number().gt(0).optional(),
  })
  .passthrough();

export const schemas: any = {
  openRewardEpoch_Body,
  pauseRewardEpoch_Body,
  clawbackRewardEpoch_Body,
  Problem,
  EpochId,
  EpochStatus,
  ProofType,
  RewardEpoch,
  RewardEpochListData,
  ResponseMeta,
  RewardEpochListResponse,
  RewardEpochCreateRequest,
  RewardEpochResponse,
  PauseEmissionRequest,
  AllocateRewardsRequest,
  AuditExport,
  AuditExportResponse,
  ClawbackRequest,
};

const endpoints = makeApi([
  {
    method: 'get',
    path: '/v0/reward-epochs',
    alias: 'listRewardEpochs',
    requestFormat: 'json',
    parameters: [
      {
        name: 'cursor',
        type: 'Query',
        schema: z.string().optional(),
      },
      {
        name: 'limit',
        type: 'Query',
        schema: z.number().int().gte(1).lte(100).optional().default(25),
      },
    ],
    response: z
      .object({
        data: z
          .object({
            items: z.array(
              z
                .object({
                  epochId: z.string().regex(/^epc_[0-9A-HJKMNP-TV-Z]{26}$/),
                  periodStart: z.string().datetime({ offset: true }),
                  periodEnd: z.string().datetime({ offset: true }),
                  status: z.enum(['open', 'finalizing', 'paid', 'paused']),
                  totalEmitted: z.number().gte(0),
                  dualLinkagePct: z.number(),
                  pausedProofTypes: z
                    .array(z.enum(['availability', 'zkCompute', 'replication']))
                    .optional(),
                  createdAt: z.string().datetime({ offset: true }),
                  updatedAt: z.string().datetime({ offset: true }),
                })
                .passthrough()
            ),
            nextCursor: z.string().optional(),
          })
          .passthrough(),
        meta: z
          .object({
            requestId: z.string().uuid(),
            correlationId: z.string(),
            generatedAt: z.string().datetime({ offset: true }),
          })
          .partial()
          .passthrough()
          .optional(),
      })
      .passthrough(),
  },
  {
    method: 'post',
    path: '/v0/reward-epochs',
    alias: 'openRewardEpoch',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: openRewardEpoch_Body,
      },
      {
        name: 'Idempotency-Key',
        type: 'Header',
        schema: z.string().min(1).max(128),
      },
    ],
    response: z
      .object({
        data: z
          .object({
            epochId: z.string().regex(/^epc_[0-9A-HJKMNP-TV-Z]{26}$/),
            periodStart: z.string().datetime({ offset: true }),
            periodEnd: z.string().datetime({ offset: true }),
            status: z.enum(['open', 'finalizing', 'paid', 'paused']),
            totalEmitted: z.number().gte(0),
            dualLinkagePct: z.number(),
            pausedProofTypes: z
              .array(z.enum(['availability', 'zkCompute', 'replication']))
              .optional(),
            createdAt: z.string().datetime({ offset: true }),
            updatedAt: z.string().datetime({ offset: true }),
          })
          .passthrough(),
        meta: z
          .object({
            requestId: z.string().uuid(),
            correlationId: z.string(),
            generatedAt: z.string().datetime({ offset: true }),
          })
          .partial()
          .passthrough()
          .optional(),
      })
      .passthrough(),
    errors: [
      {
        status: 400,
        description: `Malformed request`,
        schema: z
          .object({
            type: z.string().url(),
            title: z.string(),
            status: z.number().int(),
            detail: z.string(),
            instance: z.string().url(),
            code: z.string(),
          })
          .partial()
          .passthrough(),
      },
    ],
  },
  {
    method: 'get',
    path: '/v0/reward-epochs/:epochId',
    alias: 'getRewardEpoch',
    requestFormat: 'json',
    parameters: [
      {
        name: 'epochId',
        type: 'Path',
        schema: z.string().regex(/^epc_[0-9A-HJKMNP-TV-Z]{26}$/),
      },
    ],
    response: z
      .object({
        data: z
          .object({
            epochId: z.string().regex(/^epc_[0-9A-HJKMNP-TV-Z]{26}$/),
            periodStart: z.string().datetime({ offset: true }),
            periodEnd: z.string().datetime({ offset: true }),
            status: z.enum(['open', 'finalizing', 'paid', 'paused']),
            totalEmitted: z.number().gte(0),
            dualLinkagePct: z.number(),
            pausedProofTypes: z
              .array(z.enum(['availability', 'zkCompute', 'replication']))
              .optional(),
            createdAt: z.string().datetime({ offset: true }),
            updatedAt: z.string().datetime({ offset: true }),
          })
          .passthrough(),
        meta: z
          .object({
            requestId: z.string().uuid(),
            correlationId: z.string(),
            generatedAt: z.string().datetime({ offset: true }),
          })
          .partial()
          .passthrough()
          .optional(),
      })
      .passthrough(),
    errors: [
      {
        status: 404,
        description: `Resource not found`,
        schema: z
          .object({
            type: z.string().url(),
            title: z.string(),
            status: z.number().int(),
            detail: z.string(),
            instance: z.string().url(),
            code: z.string(),
          })
          .partial()
          .passthrough(),
      },
    ],
  },
  {
    method: 'post',
    path: '/v0/reward-epochs/:epochId/allocate',
    alias: 'allocateRewardEpoch',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: z
          .object({ dryRun: z.boolean().default(false) })
          .partial()
          .passthrough(),
      },
      {
        name: 'epochId',
        type: 'Path',
        schema: z.string().regex(/^epc_[0-9A-HJKMNP-TV-Z]{26}$/),
      },
      {
        name: 'Idempotency-Key',
        type: 'Header',
        schema: z.string().min(1).max(128),
      },
    ],
    response: z
      .object({
        data: z
          .object({
            epochId: z.string().regex(/^epc_[0-9A-HJKMNP-TV-Z]{26}$/),
            periodStart: z.string().datetime({ offset: true }),
            periodEnd: z.string().datetime({ offset: true }),
            status: z.enum(['open', 'finalizing', 'paid', 'paused']),
            totalEmitted: z.number().gte(0),
            dualLinkagePct: z.number(),
            pausedProofTypes: z
              .array(z.enum(['availability', 'zkCompute', 'replication']))
              .optional(),
            createdAt: z.string().datetime({ offset: true }),
            updatedAt: z.string().datetime({ offset: true }),
          })
          .passthrough(),
        meta: z
          .object({
            requestId: z.string().uuid(),
            correlationId: z.string(),
            generatedAt: z.string().datetime({ offset: true }),
          })
          .partial()
          .passthrough()
          .optional(),
      })
      .passthrough(),
  },
  {
    method: 'post',
    path: '/v0/reward-epochs/:epochId/clawback',
    alias: 'clawbackRewardEpoch',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: clawbackRewardEpoch_Body,
      },
      {
        name: 'epochId',
        type: 'Path',
        schema: z.string().regex(/^epc_[0-9A-HJKMNP-TV-Z]{26}$/),
      },
      {
        name: 'Idempotency-Key',
        type: 'Header',
        schema: z.string().min(1).max(128),
      },
    ],
    response: z
      .object({
        data: z
          .object({
            epochId: z.string().regex(/^epc_[0-9A-HJKMNP-TV-Z]{26}$/),
            periodStart: z.string().datetime({ offset: true }),
            periodEnd: z.string().datetime({ offset: true }),
            status: z.enum(['open', 'finalizing', 'paid', 'paused']),
            totalEmitted: z.number().gte(0),
            dualLinkagePct: z.number(),
            pausedProofTypes: z
              .array(z.enum(['availability', 'zkCompute', 'replication']))
              .optional(),
            createdAt: z.string().datetime({ offset: true }),
            updatedAt: z.string().datetime({ offset: true }),
          })
          .passthrough(),
        meta: z
          .object({
            requestId: z.string().uuid(),
            correlationId: z.string(),
            generatedAt: z.string().datetime({ offset: true }),
          })
          .partial()
          .passthrough()
          .optional(),
      })
      .passthrough(),
  },
  {
    method: 'post',
    path: '/v0/reward-epochs/:epochId/close',
    alias: 'closeRewardEpoch',
    requestFormat: 'json',
    parameters: [
      {
        name: 'epochId',
        type: 'Path',
        schema: z.string().regex(/^epc_[0-9A-HJKMNP-TV-Z]{26}$/),
      },
      {
        name: 'Idempotency-Key',
        type: 'Header',
        schema: z.string().min(1).max(128),
      },
    ],
    response: z
      .object({
        data: z
          .object({
            epochId: z.string().regex(/^epc_[0-9A-HJKMNP-TV-Z]{26}$/),
            periodStart: z.string().datetime({ offset: true }),
            periodEnd: z.string().datetime({ offset: true }),
            status: z.enum(['open', 'finalizing', 'paid', 'paused']),
            totalEmitted: z.number().gte(0),
            dualLinkagePct: z.number(),
            pausedProofTypes: z
              .array(z.enum(['availability', 'zkCompute', 'replication']))
              .optional(),
            createdAt: z.string().datetime({ offset: true }),
            updatedAt: z.string().datetime({ offset: true }),
          })
          .passthrough(),
        meta: z
          .object({
            requestId: z.string().uuid(),
            correlationId: z.string(),
            generatedAt: z.string().datetime({ offset: true }),
          })
          .partial()
          .passthrough()
          .optional(),
      })
      .passthrough(),
  },
  {
    method: 'post',
    path: '/v0/reward-epochs/:epochId/export-audit',
    alias: 'exportRewardEpochAudit',
    requestFormat: 'json',
    parameters: [
      {
        name: 'epochId',
        type: 'Path',
        schema: z.string().regex(/^epc_[0-9A-HJKMNP-TV-Z]{26}$/),
      },
      {
        name: 'Idempotency-Key',
        type: 'Header',
        schema: z.string().min(1).max(128),
      },
    ],
    response: z
      .object({
        data: z
          .object({
            epochId: z.string().regex(/^epc_[0-9A-HJKMNP-TV-Z]{26}$/),
            exportedAt: z.string().datetime({ offset: true }),
            entryCount: z.number().int().gte(0),
            downloadUrl: z.string().url().optional(),
          })
          .passthrough(),
        meta: z
          .object({
            requestId: z.string().uuid(),
            correlationId: z.string(),
            generatedAt: z.string().datetime({ offset: true }),
          })
          .partial()
          .passthrough()
          .optional(),
      })
      .passthrough(),
  },
  {
    method: 'post',
    path: '/v0/reward-epochs/:epochId/pause',
    alias: 'pauseRewardEpoch',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: pauseRewardEpoch_Body,
      },
      {
        name: 'epochId',
        type: 'Path',
        schema: z.string().regex(/^epc_[0-9A-HJKMNP-TV-Z]{26}$/),
      },
      {
        name: 'Idempotency-Key',
        type: 'Header',
        schema: z.string().min(1).max(128),
      },
    ],
    response: z
      .object({
        data: z
          .object({
            epochId: z.string().regex(/^epc_[0-9A-HJKMNP-TV-Z]{26}$/),
            periodStart: z.string().datetime({ offset: true }),
            periodEnd: z.string().datetime({ offset: true }),
            status: z.enum(['open', 'finalizing', 'paid', 'paused']),
            totalEmitted: z.number().gte(0),
            dualLinkagePct: z.number(),
            pausedProofTypes: z
              .array(z.enum(['availability', 'zkCompute', 'replication']))
              .optional(),
            createdAt: z.string().datetime({ offset: true }),
            updatedAt: z.string().datetime({ offset: true }),
          })
          .passthrough(),
        meta: z
          .object({
            requestId: z.string().uuid(),
            correlationId: z.string(),
            generatedAt: z.string().datetime({ offset: true }),
          })
          .partial()
          .passthrough()
          .optional(),
      })
      .passthrough(),
  },
]);

export const api: any = new Zodios('https://api.veridrop.local/v1', endpoints);

export function createApiClient(baseUrl: string, options?: ZodiosOptions): any {
  return new Zodios(baseUrl, endpoints, options);
}
