import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Location{
  latitude: string;
  longitude: string;
  country_name: string;
  ip: string;
  city: string;
  postal: string;
  region: string;
}


@Injectable({
  providedIn: 'root'
})
export class MapsService {

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get<Location>('http://api.ipapi.com/api/check?access_key=969cb57319b7afa9d96ea4302009c760');
  }
}
