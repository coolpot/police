import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { PoliceForce } from '../models/police-force.model';
import { Neighbourhood } from '../models/neighbourhood.model';
import { SeniorOfficer } from '../models/senior-officer.model';
@Injectable({
  providedIn: 'root'
})
export class PoliceApiService {
  baseUrl: string = 'https://data.police.uk/api';
  private policeApiDataSubject = new BehaviorSubject<any>({});

  public policeApiData$ = this.policeApiDataSubject.asObservable();

  constructor(private http: HttpClient) { }

  // Get Force List Basics
  getPoliceForcesList() {
    this.http.get<PoliceForce[]>(`${this.baseUrl}/forces`).subscribe(res => {
      this.policeApiDataSubject.next({ ...this.policeApiDataSubject.getValue(), forcesList: res });
    });
  }

  // Get Details of specific Force
  getPoliceForceDetails(id: string) {
    this.http.get<PoliceForce>(`${this.baseUrl}/forces/${id}`).subscribe(res => {
      this.policeApiDataSubject.next({ ...this.policeApiDataSubject.getValue(), forceDetails: res });
    });
  }

  // Get Senior People for a specific Force
  getPoliceForceSeniorOfficerDetails(id: string) {
    this.http.get<SeniorOfficer[]>(`${this.baseUrl}/forces/${id}/people`).subscribe(res => {
      this.policeApiDataSubject.next({ ...this.policeApiDataSubject.getValue(), seniorOfficerDetails: res });
    });
  }

  // Get Neighbourhoods for a specific Force
  getNeighbourhoodsByForce(id: string) {
    this.http.get<Neighbourhood[]>(`${this.baseUrl}/${id}/neighbourhoods`).subscribe(res => {
      this.policeApiDataSubject.next({ ...this.policeApiDataSubject.getValue(), neighbourhoods: res });
    });
  }
}