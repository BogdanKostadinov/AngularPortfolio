import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BibliographySectionComponent } from './bibliography-section-component/bibliography-section-component.component';

const routes: Routes = [
  {
    path: 'bibliography-section-component',
    component: BibliographySectionComponent,
  },
  { path: '**', component: AppComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
