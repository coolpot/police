import { Component, OnInit, Inject  } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-officer-details-dialog',
  templateUrl: './officer-details-dialog.component.html',
  styleUrls: ['./officer-details-dialog.component.scss']
})
export class OfficerDetailsDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit(): void {
  }

}
