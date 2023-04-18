import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  @Input() students:any = [];

  @Input() head1:any;
  @Input() head2:any;
  @Input() head3:any;
  @Input() head4:any;
}
