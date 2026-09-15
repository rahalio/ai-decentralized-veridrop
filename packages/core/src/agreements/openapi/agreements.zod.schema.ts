import { makeApi, Zodios, type ZodiosOptions } from '@zodios/core';
import { z } from 'zod';

const createServiceAgreement_Body = z
  .object({
    serviceId: z.string(),
    consumerParticipantId: z.string(),
    accessPolicyRef: z.string().optional(),
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
const AgreementId = z.string();
const AgreementStatus = z.enum([
  'proposed',
  'active',
  'fulfilled',
  'disputed',
  'cancelled',
  'revoked',
]);
const ServiceAgreement = z
  .object({
    agreementId: z.string().regex(/^agr_[0-9A-HJKMNP-TV-Z]{26}$/),
    serviceId: z.string(),
    consumerParticipantId: z.string(),
    status: z.enum([
      'proposed',
      'active',
      'fulfilled',
      'disputed',
      'cancelled',
      'revoked',
    ]),
    accessPolicyRef: z.string().optional(),
    deliveryAcceptedAt: z.string().datetime({ offset: true }).optional(),
    revokedAt: z.string().datetime({ offset: true }).optional(),
    revokeReason: z.string().optional(),
    createdAt: z.string().datetime({ offset: true }),
    updatedAt: z.string().datetime({ offset: true }),
  })
  .passthrough();
const ServiceAgreementListData = z
  .object({
    items: z.array(
      z
        .object({
          agreementId: z.string().regex(/^agr_[0-9A-HJKMNP-TV-Z]{26}$/),
          serviceId: z.string(),
          consumerParticipantId: z.string(),
          status: z.enum([
            'proposed',
            'active',
            'fulfilled',
            'disputed',
            'cancelled',
            'revoked',
          ]),
          accessPolicyRef: z.string().optional(),
          deliveryAcceptedAt: z.string().datetime({ offset: true }).optional(),
          revokedAt: z.string().datetime({ offset: true }).optional(),
          revokeReason: z.string().optional(),
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
const ServiceAgreementListResponse = z
  .object({
    data: z
      .object({
        items: z.array(
          z
            .object({
              agreementId: z.string().regex(/^agr_[0-9A-HJKMNP-TV-Z]{26}$/),
              serviceId: z.string(),
              consumerParticipantId: z.string(),
              status: z.enum([
                'proposed',
                'active',
                'fulfilled',
                'disputed',
                'cancelled',
                'revoked',
              ]),
              accessPolicyRef: z.string().optional(),
              deliveryAcceptedAt: z
                .string()
                .datetime({ offset: true })
                .optional(),
              revokedAt: z.string().datetime({ offset: true }).optional(),
              revokeReason: z.string().optional(),
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
const ServiceAgreementCreateRequest = z
  .object({
    serviceId: z.string(),
    consumerParticipantId: z.string(),
    accessPolicyRef: z.string().optional(),
  })
  .passthrough();
const ServiceAgreementResponse = z
  .object({
    data: z
      .object({
        agreementId: z.string().regex(/^agr_[0-9A-HJKMNP-TV-Z]{26}$/),
        serviceId: z.string(),
        consumerParticipantId: z.string(),
        status: z.enum([
          'proposed',
          'active',
          'fulfilled',
          'disputed',
          'cancelled',
          'revoked',
        ]),
        accessPolicyRef: z.string().optional(),
        deliveryAcceptedAt: z.string().datetime({ offset: true }).optional(),
        revokedAt: z.string().datetime({ offset: true }).optional(),
        revokeReason: z.string().optional(),
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
const RevokeAccessRequest = z
  .object({ reason: z.string().max(500) })
  .partial()
  .passthrough();
const AcceptDeliveryRequest = z
  .object({ note: z.string().max(500) })
  .partial()
  .passthrough();

export const schemas: any = {
  createServiceAgreement_Body,
  Problem,
  AgreementId,
  AgreementStatus,
  ServiceAgreement,
  ServiceAgreementListData,
  ResponseMeta,
  ServiceAgreementListResponse,
  ServiceAgreementCreateRequest,
  ServiceAgreementResponse,
  RevokeAccessRequest,
  AcceptDeliveryRequest,
};

const endpoints = makeApi([
  {
    method: 'get',
    path: '/v0/service-agreements',
    alias: 'listServiceAgreements',
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
        name: 'serviceId',
        type: 'Query',
        schema: z.string().optional(),
      },
    ],
    response: z
      .object({
        data: z
          .object({
            items: z.array(
              z
                .object({
                  agreementId: z.string().regex(/^agr_[0-9A-HJKMNP-TV-Z]{26}$/),
                  serviceId: z.string(),
                  consumerParticipantId: z.string(),
                  status: z.enum([
                    'proposed',
                    'active',
                    'fulfilled',
                    'disputed',
                    'cancelled',
                    'revoked',
                  ]),
                  accessPolicyRef: z.string().optional(),
                  deliveryAcceptedAt: z
                    .string()
                    .datetime({ offset: true })
                    .optional(),
                  revokedAt: z.string().datetime({ offset: true }).optional(),
                  revokeReason: z.string().optional(),
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
    path: '/v0/service-agreements',
    alias: 'createServiceAgreement',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: createServiceAgreement_Body,
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
            agreementId: z.string().regex(/^agr_[0-9A-HJKMNP-TV-Z]{26}$/),
            serviceId: z.string(),
            consumerParticipantId: z.string(),
            status: z.enum([
              'proposed',
              'active',
              'fulfilled',
              'disputed',
              'cancelled',
              'revoked',
            ]),
            accessPolicyRef: z.string().optional(),
            deliveryAcceptedAt: z
              .string()
              .datetime({ offset: true })
              .optional(),
            revokedAt: z.string().datetime({ offset: true }).optional(),
            revokeReason: z.string().optional(),
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
    path: '/v0/service-agreements/:agreementId',
    alias: 'getServiceAgreement',
    requestFormat: 'json',
    parameters: [
      {
        name: 'agreementId',
        type: 'Path',
        schema: z.string().regex(/^agr_[0-9A-HJKMNP-TV-Z]{26}$/),
      },
    ],
    response: z
      .object({
        data: z
          .object({
            agreementId: z.string().regex(/^agr_[0-9A-HJKMNP-TV-Z]{26}$/),
            serviceId: z.string(),
            consumerParticipantId: z.string(),
            status: z.enum([
              'proposed',
              'active',
              'fulfilled',
              'disputed',
              'cancelled',
              'revoked',
            ]),
            accessPolicyRef: z.string().optional(),
            deliveryAcceptedAt: z
              .string()
              .datetime({ offset: true })
              .optional(),
            revokedAt: z.string().datetime({ offset: true }).optional(),
            revokeReason: z.string().optional(),
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
    path: '/v0/service-agreements/:agreementId/accept-delivery',
    alias: 'acceptAgreementDelivery',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: z
          .object({ note: z.string().max(500) })
          .partial()
          .passthrough(),
      },
      {
        name: 'agreementId',
        type: 'Path',
        schema: z.string().regex(/^agr_[0-9A-HJKMNP-TV-Z]{26}$/),
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
            agreementId: z.string().regex(/^agr_[0-9A-HJKMNP-TV-Z]{26}$/),
            serviceId: z.string(),
            consumerParticipantId: z.string(),
            status: z.enum([
              'proposed',
              'active',
              'fulfilled',
              'disputed',
              'cancelled',
              'revoked',
            ]),
            accessPolicyRef: z.string().optional(),
            deliveryAcceptedAt: z
              .string()
              .datetime({ offset: true })
              .optional(),
            revokedAt: z.string().datetime({ offset: true }).optional(),
            revokeReason: z.string().optional(),
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
    path: '/v0/service-agreements/:agreementId/revoke-access',
    alias: 'revokeAgreementAccess',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: z
          .object({ reason: z.string().max(500) })
          .partial()
          .passthrough(),
      },
      {
        name: 'agreementId',
        type: 'Path',
        schema: z.string().regex(/^agr_[0-9A-HJKMNP-TV-Z]{26}$/),
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
            agreementId: z.string().regex(/^agr_[0-9A-HJKMNP-TV-Z]{26}$/),
            serviceId: z.string(),
            consumerParticipantId: z.string(),
            status: z.enum([
              'proposed',
              'active',
              'fulfilled',
              'disputed',
              'cancelled',
              'revoked',
            ]),
            accessPolicyRef: z.string().optional(),
            deliveryAcceptedAt: z
              .string()
              .datetime({ offset: true })
              .optional(),
            revokedAt: z.string().datetime({ offset: true }).optional(),
            revokeReason: z.string().optional(),
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
]);

export const api: any = new Zodios('https://api.veridrop.local/v1', endpoints);

export function createApiClient(baseUrl: string, options?: ZodiosOptions): any {
  return new Zodios(baseUrl, endpoints, options);
}
