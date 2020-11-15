import {Component, OnInit} from '@angular/core';
import {SocialMediaService} from '../../social-media.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  constructor(public socialMediaService: SocialMediaService) {
  }

  socialMedias: any[] = [];

  ngOnInit(): void {
    this.socialMedias = this.socialMediaService.getData();
  }

}
