import {Component, Input, OnInit} from '@angular/core';
import {Section} from '../../types';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent {
  @Input() section: Section;
}
