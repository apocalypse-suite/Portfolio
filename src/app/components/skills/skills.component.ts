import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  option = 'soft';

  constructor() {
  }

  ngOnInit(): void {
  }
  toggle(value: string): void{
    this.option = value;
  }

}
