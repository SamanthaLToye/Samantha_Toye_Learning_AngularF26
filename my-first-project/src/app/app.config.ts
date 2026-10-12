import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { COLLECT_CONFIG } from './shared/CollectConfig';

//made changes to provide inject token from CollectConfig
export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    { provide: COLLECT_CONFIG,
      useValue: {
        apiBaseUrl: 'https://placeholder.com/api',
        defaultCategory: 'all',
      }
    }
  ]
};
