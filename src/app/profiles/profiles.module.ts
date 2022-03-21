import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilesListComponent } from './profiles-list/profiles-list.component';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';
import { ProfilesRoutingModule } from './profile-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { MapModule } from '../map/map.module';


@NgModule({
  declarations: [
    ProfilesListComponent,
    ProfileDetailsComponent,
  ],
  imports: [
    CommonModule,
    ProfilesRoutingModule,
    MatIconModule,
    MapModule,
  ]
})
export class ProfilesModule { }
