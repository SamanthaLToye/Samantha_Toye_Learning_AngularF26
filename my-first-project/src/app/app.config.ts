import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { COLLECT_CONFIG } from './shared/CollectConfig';
import { MockServ } from './services/mock-serv';
import { CollectionServ } from './services/collection-serv';
//made changes to provide inject token from CollectConfig
export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    //swapping from the real to the mock collection this is the mock useClass
    { provide: CollectionServ, useClass: MockServ },
    // this is the real collection below to switch back to
    // { provide: CollectionServ, useClass: CollectionServ },

    { provide: COLLECT_CONFIG,
      useValue: {
        apiBaseUrl: 'https://placeholder.com/api',
        defaultCategory: 'all',
      }
    }
  ]
};
