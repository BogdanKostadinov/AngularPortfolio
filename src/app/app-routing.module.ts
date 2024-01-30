import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMePageComponent } from './about-me-page/about-me-page.component';
import { AppComponent } from './app.component';
import { ProjectsPageComponent } from './projects-page/projects-page.component';

const routes: Routes = [
  {
    path: 'about-me',
    component: AboutMePageComponent,
  },
  {
    path: 'projects-page',
    component: ProjectsPageComponent,
  },
  { path: '**', component: AppComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
