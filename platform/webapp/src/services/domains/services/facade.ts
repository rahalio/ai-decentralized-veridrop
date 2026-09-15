/**
 * Services Domain Facade
 */

import { servicesService } from "./services.service";

export const servicesFacade = {
  listServices: (...args: Parameters<typeof servicesService.listServices>) =>
    servicesService.listServices(...args),
  registerService: (...args: Parameters<typeof servicesService.registerService>) =>
    servicesService.registerService(...args),
  getService: (...args: Parameters<typeof servicesService.getService>) =>
    servicesService.getService(...args),
  setProofPolicy: (...args: Parameters<typeof servicesService.setProofPolicy>) =>
    servicesService.setProofPolicy(...args),
  suspendService: (...args: Parameters<typeof servicesService.suspendService>) =>
    servicesService.suspendService(...args),
};
