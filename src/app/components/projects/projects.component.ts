import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects: any [] = [
    {
      name: 'Final HTML/CSS',
      pictureUrl: '../../assets/images/HTML-CSS-final.jpg',
      projectUrl: 'https://github.com/apocalypse-suite/HTML-CSS',
      description: 'Responsive landing page'
    },
    {
      name: 'Future Project 1',
      pictureUrl: '../../assets/images/Weather-app.png',
      projectUrl: '',
      description: 'Lorem ipsum dolor.'
    },
    {
      name: 'Future Project 2',
      pictureUrl: '../../assets/images/Dashboard.png',
      projectUrl: '',
      description: 'Lorem ipsum dolor.'
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
