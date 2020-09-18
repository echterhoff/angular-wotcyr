import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'persohub-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent {

  viewMode: string = 'map';
}
