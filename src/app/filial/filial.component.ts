import { Component, Input } from '@angular/core';
import { Filial } from '../types';

@Component({
  selector: 'filial',
  templateUrl: './filial.component.html',
  styleUrls: ['./filial.component.css'],
})
export class FilialComponent {
  @Input() filial: Filial;
  @Input() onClick: () => void;
}
