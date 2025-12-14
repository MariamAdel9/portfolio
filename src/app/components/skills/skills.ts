import { Component, EventEmitter, Output, signal } from '@angular/core';
import { listSkill } from '../staticData';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-skills',
  imports: [NgFor],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills {
  skills = listSkill;
}
