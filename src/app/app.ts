import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { navBar } from './components/navBar/navBar';
import { projectCard } from './components/project-card/project-card';
import { Section } from './components/section/section';
import { Skills } from './components/skills/skills';
import { CommonModule, NgFor } from '@angular/common';
import { Certifications } from './components/cert/cert';
import { Experence } from './components/exp/exp';
@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Header,
    navBar,
    projectCard,
    Section,
    Skills,
    NgFor,
    Certifications,
    CommonModule,
    Experence,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {

  onNavigate(section: string) {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
