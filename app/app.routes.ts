import { provideRouter, RouterConfig } from '@angular/router'
import { AppComponent } from './app.component'
import { AboutComponent } from './about.component'


export const routes: RouterConfig = [
  { path: '', component: AppComponent },
  { path: 'call', component: AppComponent },
  { path: 'about', component: AboutComponent }
]

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
]


