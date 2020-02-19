import { Component } from '@angular/core';
import { MapsService } from './maps.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  lat = '';
  lng = '';
  country = '';
  ip = '';
  city = '';
  postal = '';
  region = '';

  // tslint:disable-next-line: ban-types
  location: Object;

  constructor(private map: MapsService) {}

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit() {
    this.map.getData().subscribe(data => {
      console.log(data);
      this.lat = data.latitude;
      this.lng = data.longitude;
      this.country = data.country_name;
      this.ip = data.ip;
      this.city = data.city;
      this.postal = data.postal;
      this.region = data.region;
    });
  }
}
