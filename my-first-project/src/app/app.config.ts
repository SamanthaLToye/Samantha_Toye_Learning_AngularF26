import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { routes } from './app.routes';
import { COLLECT_CONFIG } from './shared/CollectConfig';
import { MockServ } from './services/mock-serv';
import { CollectionServ } from './services/collection-serv';
import { LoadingInter } from './services/loading-inter';
//made changes to provide inject token from CollectConfig
export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes, withComponentInputBinding()),
    provideHttpClient(withInterceptors([LoadingInter])),

    //swapping from the real to the mock collection this is the mock useClass
   // { provide: CollectionServ, useClass: MockServ },
    // this is the real collection below to switch back to
    { provide: CollectionServ, useClass: CollectionServ },

    { provide: COLLECT_CONFIG,
      useValue: {
        apiBaseUrl: 'https://jsonplaceholder.typicode.com',
        defaultCategory: 'all',
      }
    }
  ]
};
