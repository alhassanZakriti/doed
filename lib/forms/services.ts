export const getStartedServices = [
  "ai-project",
  "pipeline-audit",
  "cloud-migration",
  "general-inquiry",
] as const;

export type GetStartedService = (typeof getStartedServices)[number];

export function isGetStartedService(value: string | null): value is GetStartedService {
  return getStartedServices.includes(value as GetStartedService);
}

export function resolveGetStartedService(value: string | null): GetStartedService {
  return isGetStartedService(value) ? value : "general-inquiry";
}
