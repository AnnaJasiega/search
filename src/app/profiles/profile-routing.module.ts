import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfilesListComponent } from './profiles-list/profiles-list.component';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';

const routes: Routes = [
	{
		path: '',
		component: ProfilesListComponent,
	},
	{
		path: ':id',
		component: ProfileDetailsComponent,
	},


];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class ProfilesRoutingModule {}
