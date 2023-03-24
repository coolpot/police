import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PoliceApiService {
  baseUrl: string = 'https://data.police.uk/api';

  constructor(private http: HttpClient) { }

  // Get Force List Basics
  getPoliceForcesList() {
    return this.http.get(`${this.baseUrl}/forces`);
  }

  // Get Details of specific Force
  getPoliceForceDetails(id: string) {
    return this.http.get(`${this.baseUrl}/forces/${id}`);
  }

  // Get Senior People for a specific Force
  getPoliceForceSeniorOfficerDetails(id: string) {
    return this.http.get(`${this.baseUrl}/forces/${id}/people`);
  }

  // Get Neighbourhoods for a specific Force
  getNeighbourhoodsByForce(id: string) {
    return this.http.get(`${this.baseUrl}/${id}/neighbourhoods`);
  }
}
