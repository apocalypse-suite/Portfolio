import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  option = 'soft';
  hardSkills = [
    {
      name: 'HTML5',
      level: 'Advanced',
      logoUrl: '../../assets/images/icons/icons8-html-5-100.png'
    },
    {
      name: 'CSS3',
      level: 'Advanced',
      logoUrl: '../../assets/images/icons/icons8-css3-100.png'
    },
    {
      name: 'Bootstrap',
      level: 'Advanced',
      logoUrl: '../../assets/images/icons/icons8-bootstrap-100.png'
    },
    {
      name: 'JS',
      level: 'Advanced',
      logoUrl: '../../assets/images/icons/icons8-javascript-100.png'
    },
    {
      name: 'Angular2+',
      level: 'Intermediate',
      logoUrl: '../../assets/images/icons/icons8-angularjs-100.png'
    },
    {
      name: 'NodeJS',
      level: 'Basic',
      logoUrl: '../../assets/images/icons/icons8-nodejs-100.png'
    },
    {
      name: 'MySQL',
      level: 'Basic',
      logoUrl: '../../assets/images/icons/icons8-mysql-logo-100.png'
    },
    {
      name: 'Git',
      level: 'Intermediate',
      logoUrl: '../../assets/images/icons/icons8-git-100.png'
    },
    {
      name: 'GitHub',
      level: 'Intermediate',
      logoUrl: '../../assets/images/icons/icons8-github-100.png'
    },
    {
      name: 'Photoshop',
      level: 'Confident',
      logoUrl: '../../assets/images/icons/icons8-adobe-photoshop-100.png'
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  toggle(value: string): void {
    this.option = value;
  }

}
