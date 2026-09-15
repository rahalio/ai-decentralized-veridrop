/**
 * IdGeneratorService Port — starter prefixes (extend in consumer repos).
 */

import type { DomainCode } from '@veridrop/core/_shared/helpers';

export interface IdGeneratorService {
  tntId(): string;
  keyId(): string;
  idnId(): string;
  autId(): string;
  svcId(): string;
  curId(): string;
  agrId(): string;
  prfId(): string;
  rwdId(): string;
  arbId(): string;
  ptcId(): string;
  prvId(): string;
  govId(): string;
  generateIdForDomain(domainCode: DomainCode): string;
}
