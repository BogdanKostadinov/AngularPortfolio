import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AboutMePageComponent } from './about-me-page/about-me-page.component';
import { BibliographySectionComponent } from './about-me-page/bibliography-section-component/bibliography-section-component.component';
import { SkillsSectionComponent } from './about-me-page/skills-section/skills-section.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectsPageComponent } from './projects-page/projects-page.component';
import { CardComponent } from './shared/components/card-component/card-component';
import { ConfirmWindowComponent } from './shared/components/confirm-window/confirm-window.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { MaterialModule } from './shared/modules/material.module';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    BibliographySectionComponent,
    SkillsSectionComponent,
    AboutMePageComponent,
    CardComponent,
    ConfirmWindowComponent,
    ProjectsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FontAwesomeModule,
    ModalModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
