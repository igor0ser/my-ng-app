import { Component, Input } from '@angular/core';
import { Filial } from '../types';

@Component({
  selector: 'filial-button',
  templateUrl: './filial-button.component.html',
  styleUrls: ['./filial-button.component.css'],
})
export class FilialButtonComponent {
  @Input() filial: Filial;
  @Input() onFilialClick: (filial: Filial) => void;
}
