import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input('text') text: string;
  @Input('route') route: string;
  scrollToBottom(): void{
    window.scrollTo(0, document.body.scrollHeight);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
