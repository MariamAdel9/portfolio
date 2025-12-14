import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section ',
  imports: [],
  templateUrl: './section.html',
  styleUrl: './Section.css',
})
export class Section {
  @Input() sectionName = '';
  @Input() sectionDesc = '';
}
