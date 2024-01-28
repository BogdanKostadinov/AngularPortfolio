import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutMePageComponent } from './about-me-page/about-me-page.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BibliographySectionComponent } from './bibliography-section-component/bibliography-section-component.component';
import { CardComponent } from './shared/components/card-component/card-component';
import { MaterialModule } from './shared/material.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SkillsSectionComponent } from './skills-section/skills-section.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    BibliographySectionComponent,
    SkillsSectionComponent,
    AboutMePageComponent,
    CardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
