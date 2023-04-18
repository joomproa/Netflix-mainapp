import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-buttontwo',
  templateUrl: './buttontwo.component.html',
  styleUrls: ['./buttontwo.component.css']
})
export class ButtontwoComponent {
  @Input() route:any;
  @Input() titlename:any;

}
