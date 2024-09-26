import { HTTP_INTERCEPTORS, HttpClientModule, provideHttpClient } from "@angular/common/http";
import { ApplicationConfig, importProvidersFrom, Provider } from "@angular/core";
import { provideRouter } from "@angular/router";

import { routes } from './app.routes';

import { registerLocaleData } from "@angular/common";
import localePt from '@angular/common/locales/pt';
import { provideAnimations } from "@angular/platform-browser/animations";
import { XhrInterceptor } from "./interceptors/app.request.interceptor";
import { AuthActivateRouteGuard } from "./routeguards/auth.routeguard";

registerLocaleData(localePt);

export const noopInterceptorProvider: Provider =
  { provide: HTTP_INTERCEPTORS, useClass: XhrInterceptor, multi: true };

export const appConfig: ApplicationConfig = {
    providers: [
        provideRouter(routes),
        provideHttpClient(),
        provideAnimations(),
        importProvidersFrom(HttpClientModule),
        noopInterceptorProvider,
        AuthActivateRouteGuard
    ]
}