import { provideHttpClient } from "@angular/common/http";
import { ApplicationConfig, importProvidersFrom, LOCALE_ID } from "@angular/core";
import { provideRouter } from "@angular/router";

import { routes } from './app.routes'

import { registerLocaleData } from "@angular/common";
import localePt from '@angular/common/locales/pt'
import { provideAnimations } from "@angular/platform-browser/animations";
import { MatDatepickerModule } from "@angular/material/datepicker";

registerLocaleData(localePt);

export const appConfig: ApplicationConfig = {
    providers: [
        provideRouter(routes),
        provideHttpClient(),
        provideAnimations(),
        MatDatepickerModule,
        { provide: LOCALE_ID, useValue: 'pt-BR' }
    ]
}