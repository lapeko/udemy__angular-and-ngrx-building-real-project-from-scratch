import {ApplicationConfig, isDevMode} from '@angular/core'
import {provideRouter} from '@angular/router'
import {provideStore} from '@ngrx/store'

import {appRoutes} from './app.routes';
import { provideStoreDevtools } from '@ngrx/store-devtools'

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(appRoutes),
    provideStore(),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })
]
}
