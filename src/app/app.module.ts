import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { AboutSectionComponent } from './components/main-page/components/about-section/about-section.component';
import { ServicesSectionComponent } from './components/main-page/components/services-section/services-section.component';
import { ContactSectionComponent } from './components/main-page/components/contact-section/contact-section.component';
import { HomeSectionComponent } from './components/main-page/components/home-section/home-section.component';
import { MenuComponent } from './components/header/components/menu/menu.component';
import { AppointmentPageComponent } from './components/appointment-page/appointment-page.component';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ContactFormComponent } from './components/appointment-page/components/contact-form/contact-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainPageComponent,
    AboutSectionComponent,
    ServicesSectionComponent,
    ContactSectionComponent,
    HomeSectionComponent,
    MenuComponent,
    AppointmentPageComponent,
    PageNotFoundComponent,
    ContactFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    RouterModule.forRoot(routes, { anchorScrolling: 'enabled'}),
    SharedModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
