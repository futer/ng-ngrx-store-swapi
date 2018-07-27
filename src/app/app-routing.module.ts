import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowCharactersComponent } from '../app/components/show-characters/show-characters.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/characters',
    pathMatch: 'full'
  },
  {
    path: 'characters',
    component: ShowCharactersComponent
  },
  {
    path: '**',
    component: ShowCharactersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
