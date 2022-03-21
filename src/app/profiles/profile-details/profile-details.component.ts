import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from '../../core/search-service/services/search.service';
import { MapComponent } from '../../map/map.component';
import { Map } from 'leaflet';
import { User } from 'src/app/core/search-service/models/user.model';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.scss']
})
export class ProfileDetailsComponent implements OnInit {
  id: string | null;
  user: User;
  @ViewChild('mainMap') mapComponent: MapComponent;
  private map: Map;
  private zoom: number;
  loaded = false;
  constructor(private activatedRoute: ActivatedRoute, private searchService: SearchService) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.id)
    this.searchService.getUserDetails(this.id).subscribe(resp => {
      this.user = resp;
      this.loaded = true;
      setTimeout(() => {
        this.mapComponent.addPoint(this.user);
      }, 500);
    })
  }
  receiveMap(map: Map): void {
    this.map = map;
  }

  receiveZoom(zoom: number): void {
    this.zoom = zoom;
  }


}
