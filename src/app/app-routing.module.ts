import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [  {
  path: 'main',
  loadChildren: () =>
    import('./profiles/profiles.module').then((m) => m.ProfilesModule),
},
{
  path: '',
  redirectTo: 'main',
  pathMatch: 'full',
},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
