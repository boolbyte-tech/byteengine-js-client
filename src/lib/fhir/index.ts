export interface FhirSearchParams {
  [key: string]: string | number | boolean | undefined;
}

export * as FhirR4 from './hl7-fhir-r4-core';