import { makeApi, Zodios, type ZodiosOptions } from '@zodios/core';
import { z } from 'zod';

const openArbitrationCase_Body = z
  .object({
    subjectType: z.enum(['service', 'agreement', 'provenance']),
    subjectId: z.string(),
    claim: z.string().min(1).max(4000),
  })
  .passthrough();
const decideArbitrationCase_Body = z
  .object({
    resolution: z.string().min(1).max(4000),
    bindingEffect: z.enum([
      'none',
      'revokeEntitlement',
      'withholdReward',
      'restoreEntitlement',
    ]),
  })
  .passthrough();
const CaseStatus = z.enum(['open', 'resolved', 'dismissed']);
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
const CaseId = z.string();
const SubjectType = z.enum(['service', 'agreement', 'provenance']);
const BindingEffect = z.enum([
  'none',
  'revokeEntitlement',
  'withholdReward',
  'restoreEntitlement',
]);
const ArbitrationCase = z
  .object({
    caseId: z.string().regex(/^case_[0-9A-HJKMNP-TV-Z]{26}$/),
    subjectType: z.enum(['service', 'agreement', 'provenance']),
    subjectId: z.string(),
    status: z.enum(['open', 'resolved', 'dismissed']),
    claim: z.string(),
    resolution: z.string().optional(),
    bindingEffect: z
      .enum([
        'none',
        'revokeEntitlement',
        'withholdReward',
        'restoreEntitlement',
      ])
      .optional(),
    decidedAt: z.string().datetime({ offset: true }).optional(),
    createdAt: z.string().datetime({ offset: true }),
    updatedAt: z.string().datetime({ offset: true }),
  })
  .passthrough();
const ArbitrationCaseListData = z
  .object({
    items: z.array(
      z
        .object({
          caseId: z.string().regex(/^case_[0-9A-HJKMNP-TV-Z]{26}$/),
          subjectType: z.enum(['service', 'agreement', 'provenance']),
          subjectId: z.string(),
          status: z.enum(['open', 'resolved', 'dismissed']),
          claim: z.string(),
          resolution: z.string().optional(),
          bindingEffect: z
            .enum([
              'none',
              'revokeEntitlement',
              'withholdReward',
              'restoreEntitlement',
            ])
            .optional(),
          decidedAt: z.string().datetime({ offset: true }).optional(),
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
const ArbitrationCaseListResponse = z
  .object({
    data: z
      .object({
        items: z.array(
          z
            .object({
              caseId: z.string().regex(/^case_[0-9A-HJKMNP-TV-Z]{26}$/),
              subjectType: z.enum(['service', 'agreement', 'provenance']),
              subjectId: z.string(),
              status: z.enum(['open', 'resolved', 'dismissed']),
              claim: z.string(),
              resolution: z.string().optional(),
              bindingEffect: z
                .enum([
                  'none',
                  'revokeEntitlement',
                  'withholdReward',
                  'restoreEntitlement',
                ])
                .optional(),
              decidedAt: z.string().datetime({ offset: true }).optional(),
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
const ArbitrationCaseCreateRequest = z
  .object({
    subjectType: z.enum(['service', 'agreement', 'provenance']),
    subjectId: z.string(),
    claim: z.string().min(1).max(4000),
  })
  .passthrough();
const ArbitrationCaseResponse = z
  .object({
    data: z
      .object({
        caseId: z.string().regex(/^case_[0-9A-HJKMNP-TV-Z]{26}$/),
        subjectType: z.enum(['service', 'agreement', 'provenance']),
        subjectId: z.string(),
        status: z.enum(['open', 'resolved', 'dismissed']),
        claim: z.string(),
        resolution: z.string().optional(),
        bindingEffect: z
          .enum([
            'none',
            'revokeEntitlement',
            'withholdReward',
            'restoreEntitlement',
          ])
          .optional(),
        decidedAt: z.string().datetime({ offset: true }).optional(),
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
const DecideCaseRequest = z
  .object({
    resolution: z.string().min(1).max(4000),
    bindingEffect: z.enum([
      'none',
      'revokeEntitlement',
      'withholdReward',
      'restoreEntitlement',
    ]),
  })
  .passthrough();

export const schemas: any = {
  openArbitrationCase_Body,
  decideArbitrationCase_Body,
  CaseStatus,
  Problem,
  CaseId,
  SubjectType,
  BindingEffect,
  ArbitrationCase,
  ArbitrationCaseListData,
  ResponseMeta,
  ArbitrationCaseListResponse,
  ArbitrationCaseCreateRequest,
  ArbitrationCaseResponse,
  DecideCaseRequest,
};

const endpoints = makeApi([
  {
    method: 'get',
    path: '/v0/arbitration-cases',
    alias: 'listArbitrationCases',
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
      {
        name: 'status',
        type: 'Query',
        schema: z.enum(['open', 'resolved', 'dismissed']).optional(),
      },
    ],
    response: z
      .object({
        data: z
          .object({
            items: z.array(
              z
                .object({
                  caseId: z.string().regex(/^case_[0-9A-HJKMNP-TV-Z]{26}$/),
                  subjectType: z.enum(['service', 'agreement', 'provenance']),
                  subjectId: z.string(),
                  status: z.enum(['open', 'resolved', 'dismissed']),
                  claim: z.string(),
                  resolution: z.string().optional(),
                  bindingEffect: z
                    .enum([
                      'none',
                      'revokeEntitlement',
                      'withholdReward',
                      'restoreEntitlement',
                    ])
                    .optional(),
                  decidedAt: z.string().datetime({ offset: true }).optional(),
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
    path: '/v0/arbitration-cases',
    alias: 'openArbitrationCase',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: openArbitrationCase_Body,
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
            caseId: z.string().regex(/^case_[0-9A-HJKMNP-TV-Z]{26}$/),
            subjectType: z.enum(['service', 'agreement', 'provenance']),
            subjectId: z.string(),
            status: z.enum(['open', 'resolved', 'dismissed']),
            claim: z.string(),
            resolution: z.string().optional(),
            bindingEffect: z
              .enum([
                'none',
                'revokeEntitlement',
                'withholdReward',
                'restoreEntitlement',
              ])
              .optional(),
            decidedAt: z.string().datetime({ offset: true }).optional(),
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
    path: '/v0/arbitration-cases/:caseId',
    alias: 'getArbitrationCase',
    requestFormat: 'json',
    parameters: [
      {
        name: 'caseId',
        type: 'Path',
        schema: z.string().regex(/^case_[0-9A-HJKMNP-TV-Z]{26}$/),
      },
    ],
    response: z
      .object({
        data: z
          .object({
            caseId: z.string().regex(/^case_[0-9A-HJKMNP-TV-Z]{26}$/),
            subjectType: z.enum(['service', 'agreement', 'provenance']),
            subjectId: z.string(),
            status: z.enum(['open', 'resolved', 'dismissed']),
            claim: z.string(),
            resolution: z.string().optional(),
            bindingEffect: z
              .enum([
                'none',
                'revokeEntitlement',
                'withholdReward',
                'restoreEntitlement',
              ])
              .optional(),
            decidedAt: z.string().datetime({ offset: true }).optional(),
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
    path: '/v0/arbitration-cases/:caseId/bind-outcome',
    alias: 'bindArbitrationOutcome',
    requestFormat: 'json',
    parameters: [
      {
        name: 'caseId',
        type: 'Path',
        schema: z.string().regex(/^case_[0-9A-HJKMNP-TV-Z]{26}$/),
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
            caseId: z.string().regex(/^case_[0-9A-HJKMNP-TV-Z]{26}$/),
            subjectType: z.enum(['service', 'agreement', 'provenance']),
            subjectId: z.string(),
            status: z.enum(['open', 'resolved', 'dismissed']),
            claim: z.string(),
            resolution: z.string().optional(),
            bindingEffect: z
              .enum([
                'none',
                'revokeEntitlement',
                'withholdReward',
                'restoreEntitlement',
              ])
              .optional(),
            decidedAt: z.string().datetime({ offset: true }).optional(),
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
    path: '/v0/arbitration-cases/:caseId/decide',
    alias: 'decideArbitrationCase',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: decideArbitrationCase_Body,
      },
      {
        name: 'caseId',
        type: 'Path',
        schema: z.string().regex(/^case_[0-9A-HJKMNP-TV-Z]{26}$/),
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
            caseId: z.string().regex(/^case_[0-9A-HJKMNP-TV-Z]{26}$/),
            subjectType: z.enum(['service', 'agreement', 'provenance']),
            subjectId: z.string(),
            status: z.enum(['open', 'resolved', 'dismissed']),
            claim: z.string(),
            resolution: z.string().optional(),
            bindingEffect: z
              .enum([
                'none',
                'revokeEntitlement',
                'withholdReward',
                'restoreEntitlement',
              ])
              .optional(),
            decidedAt: z.string().datetime({ offset: true }).optional(),
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
