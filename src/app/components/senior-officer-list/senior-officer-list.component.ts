import { AfterViewInit, ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SeniorOfficer } from 'src/app/models/senior-officer.model';
import { PoliceApiService } from 'src/app/services/police-api.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { OfficerDetailsDialogComponent } from '../officer-details-dialog/officer-details-dialog.component';

@Component({
  selector: 'app-senior-officer-list',
  templateUrl: './senior-officer-list.component.html',
  styleUrls: ['./senior-officer-list.component.scss']
})
export class SeniorOfficerListComponent implements OnInit, AfterViewInit {
  id: string;
  displayedColumns: string[] = ['name', 'rank', 'details'];
  dataSource = new MatTableDataSource<SeniorOfficer>();
  totalItems: number = 0;
  pageSize = 5;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
    
  constructor(private policeApiService: PoliceApiService,
              private route: ActivatedRoute,
              private dialog: MatDialog) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.policeApiService.getPoliceForceSeniorOfficerDetails(this.id);
      this.policeApiService.policeApiData$.subscribe(data => {
        if (data.seniorOfficerDetails) {
          this.dataSource.data = data.seniorOfficerDetails;
          this.totalItems = data.seniorOfficerDetails.length;
        }
      });
    });
  }

  openDetailsDialog(rowData: any) {
    const dialogRef = this.dialog.open(OfficerDetailsDialogComponent, {
      data: rowData,
      width: '800px',
      height: '600px'
    });
  
    dialogRef.afterClosed().subscribe(result => {
      // Handle dialog close
    });
  }
}
