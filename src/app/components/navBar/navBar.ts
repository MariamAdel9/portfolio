import { Component, EventEmitter, Output, signal } from '@angular/core';

@Component({
  selector: 'app-navBar',
  imports: [],
  templateUrl: './navBar.html',
  styleUrl: './navBar.css',
})
export class navBar {
  @Output() selecteSection = new EventEmitter();

  selected = signal<string>('');

  onClick(tab: string) {
    this.selected.set(tab);
    this.selecteSection.emit(tab)
    console.log(this.selected());
  }
}
