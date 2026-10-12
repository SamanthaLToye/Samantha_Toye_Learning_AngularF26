import { InjectionToken } from '@angular/core';

export interface CollectConfig {
    apiBaseUrl: string;
    defaultCategory: string;
  }
export const COLLECT_CONFIG = new InjectionToken<CollectConfig>('collect.config');
