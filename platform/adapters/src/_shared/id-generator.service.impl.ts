/**
 * ID Generator Service Implementation — starter prefixes.
 */

import type { DomainCode } from '@veridrop/core/_shared/helpers';
import { DOMAIN_PREFIX_MAP, isValidDomainId } from '@veridrop/core';
import { ulid } from 'ulid';
import type { IdGeneratorService } from '@veridrop/services/_shared';

export function generateIdWithPrefix(prefix: string): string {
  if (!prefix || prefix.length !== 3 || !/^[a-z]{3}$/.test(prefix)) {
    throw new Error(
      `Invalid domain prefix: "${prefix}". Must be exactly 3 lowercase letters.`
    );
  }
  const id = `${prefix}_${ulid().toLowerCase()}`;
  if (!isValidDomainId(id)) {
    throw new Error(`Generated ID "${id}" failed validation.`);
  }
  return id;
}

export class DefaultIdGeneratorService implements IdGeneratorService {
  tntId(): string {
    return generateIdWithPrefix(DOMAIN_PREFIX_MAP.tenant);
  }
  keyId(): string {
    return generateIdWithPrefix(DOMAIN_PREFIX_MAP.apiKey);
  }
  idnId(): string {
    return generateIdWithPrefix(DOMAIN_PREFIX_MAP.identity);
  }
  autId(): string {
    return generateIdWithPrefix(DOMAIN_PREFIX_MAP.auth);
  }
  svcId(): string {
    return generateIdWithPrefix(DOMAIN_PREFIX_MAP.services);
  }
  curId(): string {
    return generateIdWithPrefix(DOMAIN_PREFIX_MAP.curation);
  }
  agrId(): string {
    return generateIdWithPrefix(DOMAIN_PREFIX_MAP.agreements);
  }
  prfId(): string {
    return generateIdWithPrefix(DOMAIN_PREFIX_MAP.proofs);
  }
  rwdId(): string {
    return generateIdWithPrefix(DOMAIN_PREFIX_MAP.rewards);
  }
  arbId(): string {
    return generateIdWithPrefix(DOMAIN_PREFIX_MAP.arbitration);
  }
  ptcId(): string {
    return generateIdWithPrefix(DOMAIN_PREFIX_MAP.participants);
  }
  prvId(): string {
    return generateIdWithPrefix(DOMAIN_PREFIX_MAP.provenance);
  }
  govId(): string {
    return generateIdWithPrefix(DOMAIN_PREFIX_MAP.governance);
  }
  generateIdForDomain(domainCode: DomainCode): string {
    return generateIdWithPrefix(DOMAIN_PREFIX_MAP[domainCode]);
  }
}

let idGeneratorService: DefaultIdGeneratorService | null = null;

export function getIdGeneratorService(): DefaultIdGeneratorService {
  if (!idGeneratorService) {
    idGeneratorService = new DefaultIdGeneratorService();
  }
  return idGeneratorService;
}
