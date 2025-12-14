import { Component, EventEmitter, Output, signal } from '@angular/core';
import { CommonModule, NgClass, NgFor } from '@angular/common';
import { certifications, experienceList } from '../staticData';

@Component({
  selector: 'app-exp',
  imports: [NgFor, CommonModule],
  templateUrl: './exp.html',
  styleUrl: './exp.css',
})
export class Experence {
  exp = experienceList;
}
