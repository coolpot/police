import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { PoliceForceDetail } from 'src/app/models/police-force-detail.model';
import { PoliceApiService } from 'src/app/services/police-api.service';

@Component({
  selector: 'app-force-details',
  templateUrl: './force-details.component.html',
  styleUrls: ['./force-details.component.scss']
})
export class ForceDetailsComponent implements OnInit {
  forceDetail: PoliceForceDetail;
  sanitizedDescription: any;
  id: string;
  
  constructor(private route: ActivatedRoute,
              private sanitizer: DomSanitizer,
              private policeApiService: PoliceApiService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.policeApiService.getPoliceForceDetails(this.id);
      this.policeApiService.policeApiData$.subscribe(data => {
        if (data.forceDetails) {
          this.forceDetail = data.forceDetails;
          this.sanitizedDescription = this.sanitizer.bypassSecurityTrustHtml(this.forceDetail.description);
        }
      });
    });
  }

}
