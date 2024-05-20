import { Routes } from "@angular/router";
import { MainPageComponent } from "./components/main-page/main-page.component";
import { AppointmentPageComponent } from "./components/appointment-page/appointment-page.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { AboutPageComponent } from "./components/about-page/about-page.component";

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: MainPageComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'appointment', component: AppointmentPageComponent },
  { path: '**', component: PageNotFoundComponent }
];
