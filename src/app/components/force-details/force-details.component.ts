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
  forceId: string;
  
  constructor(private route: ActivatedRoute,
              private sanitizer: DomSanitizer,
              private policeApiService: PoliceApiService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.forceId = params.get('id');
      this.policeApiService.getPoliceForceDetails(this.forceId).subscribe((force: any) => {
        this.forceDetail = force;
        this.sanitizedDescription = this.sanitizer.bypassSecurityTrustHtml(this.forceDetail.description);
      });
    });
  }

}
