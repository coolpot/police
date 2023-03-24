import { Component, OnInit } from '@angular/core';
import { PoliceForce } from 'src/app/models/police-force.model';
import { PoliceApiService } from 'src/app/services/police-api.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  forcesList: PoliceForce[] = [];
  filteredForcesList: PoliceForce[] = [];

  constructor(private policeApiService: PoliceApiService) {}

  ngOnInit(): void {
    this.policeApiService.getPoliceForcesList();
    this.policeApiService.policeApiData$.subscribe(data => {
      this.forcesList = data.forcesList;
      this.filteredForcesList = this.forcesList;
    });
  }

  onFilterList(filterValue: string) {
    this.filteredForcesList = this.forcesList.filter(force =>
      force.name.toLowerCase().includes(filterValue.toLowerCase())
    );
  }
}
