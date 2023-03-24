import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { Neighbourhood } from 'src/app/models/neighbourhood.model';
import { PoliceApiService } from 'src/app/services/police-api.service';

@Component({
  selector: 'app-neighbourhoods-by-force',
  templateUrl: './neighbourhoods-by-force.component.html',
  styleUrls: ['./neighbourhoods-by-force.component.scss']
})
export class NeighbourhoodsByForceComponent implements OnInit {
  id: string;
  neighbourhoodsList: Neighbourhood[] = [];
  filteredneighbourhoodsList: Neighbourhood[] = [];

  displayedColumns: string[] = ['id', 'name'];
  dataSource = new MatTableDataSource<Neighbourhood>();
  totalItems: number = 0;
  pageSize = 5;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  constructor(private policeApiService: PoliceApiService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.policeApiService.getNeighbourhoodsByForce(this.id);
      this.policeApiService.policeApiData$.subscribe(data => {
        if (data.neighbourhoods) {
          this.dataSource.data = data.neighbourhoods;
          this.totalItems = data.neighbourhoods.length;
        }
      });
    });
  }


  onFilterList(filterValue: string) {
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }
}
