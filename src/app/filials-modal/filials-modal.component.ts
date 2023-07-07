import { Component, Input } from '@angular/core';
import { Filial } from '../types';

@Component({
  selector: 'filials-modal',
  templateUrl: './filials-modal.component.html',
  styleUrls: ['./filials-modal.component.css'],
})
export class FilialsModalComponent {
  @Input() bankName: string;
  @Input() filials: Array<Filial>;
  @Input() selectedFilials: Array<Filial>;
  @Input() onFilialClick: (filial: Filial) => void;
}
