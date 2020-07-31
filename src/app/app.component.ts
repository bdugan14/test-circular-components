import { Component } from '@angular/core';
import { SampleAppLayout } from './layout.data';
import { Section } from './types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  readonly sections: Section[] = SampleAppLayout;
}
