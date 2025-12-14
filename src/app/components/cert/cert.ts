import { Component, EventEmitter, Output, signal } from '@angular/core';
import { NgFor } from '@angular/common';
import { certifications } from '../staticData';

@Component({
  selector: 'app-cert',
  imports: [NgFor],
  templateUrl: './cert.html',
  styleUrl: './cert.css',
})
export class Certifications {
  certs = certifications;
}
