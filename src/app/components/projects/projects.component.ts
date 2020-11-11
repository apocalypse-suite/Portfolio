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
      projectUrl: '',
      description: ''
    },
    {
      name: 'Future Project 1',
      projectUrl: '',
      description: ''
    },
    {
      name: 'Future Project 2',
      projectUrl: '',
      description: ''
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
