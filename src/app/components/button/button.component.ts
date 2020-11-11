import {AfterViewChecked, Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit, AfterViewChecked{
  @Input('text') text: string;
  @Input('route') route: string;
  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewChecked(): void {
    this.scrollToBottom();
  }
  scrollToBottom(): void{
    window.scrollTo(0, document.body.scrollHeight);
  }

}
