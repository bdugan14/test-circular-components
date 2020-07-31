import {Component, Input} from '@angular/core';
import {Tabs} from '../../types';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent {
  @Input() tabsConfig: Tabs;
}
