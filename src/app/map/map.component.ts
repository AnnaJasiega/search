import {
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import * as L from 'leaflet';
import { featureGroup } from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent {
  @Output() map$: EventEmitter<L.Map> = new EventEmitter();
  @Output() zoom$: EventEmitter<number> = new EventEmitter();
  @Input() options: L.MapOptions = {
    layers: [
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        opacity: 0.7,
        maxZoom: 19,
        detectRetina: true,
      }),
    ],
    zoom: 9,
    center: L.latLng(20, 20),
  };
  public map: L.Map;
  public zoom: number;
  marker: L.Marker;
  markers = [];

  constructor() {}

  onMapReady(map: L.Map): void {
    this.map = map;
    this.map$.emit(map);
    this.zoom = map.getZoom();
    this.zoom$.emit(this.zoom);

  }
  onMapZoomEnd(e: L.LeafletEvent): void {
    this.zoom = e.target.getZoom();
    this.zoom$.emit(this.zoom);
  }
  addPoint(item: any): void {
    const property = 'geo';
    const lat = item.address[property].lat;
    const lng = item.address[property].lng;
    const iconUrl = '../../../assets/icon/pin.svg';
    this.addMarker(iconUrl, lat, lng);
  }
  addMarker(iconUrl: string, lat: number, lng: number) {
    const myIcon = L.icon({
      iconUrl,
      iconSize: [30, 40],
      iconAnchor: [15, 20],
    });
    this.marker = new L.Marker(
      {
        lat,
        lng,
      },
      {
        icon: myIcon,
      }
    );
    this.marker.addTo(this.map)
    setTimeout(() => {
      this.map.invalidateSize();
      this.fitBounds();
    }, 100);
  }
  fitBounds() : void {
    var featureGroup = L.featureGroup([this.marker]);
    this.map.fitBounds(featureGroup.getBounds());
  }
 
}
