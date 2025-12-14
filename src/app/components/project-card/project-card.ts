import { Component, EventEmitter, Output, signal } from '@angular/core';
import { projects } from '../staticData';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-project-card',
  imports: [NgFor],
  templateUrl: './project-card.html',
  styleUrl: './project-card.css',
})
export class projectCard {
  projectList = projects;
}
