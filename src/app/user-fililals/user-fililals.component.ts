import { Component } from '@angular/core';
import { Filial } from '../types';

@Component({
  selector: 'user-fililals',
  templateUrl: './user-fililals.component.html',
  styleUrls: ['./user-fililals.component.css'],
})
export class UserFililalsComponent {
  filials: Array<Filial> = [
    {
      id: 1,
      name: 'Kyiv',
    },
    {
      id: 2,
      name: 'San-Francisco',
    },
    {
      id: 3,
      name: 'London',
    },
    {
      id: 4,
      name: 'Horishni Plavni',
    },
    {
      id: 5,
      name: 'Lisboa',
    },
  ];

  selectedFilials: Array<Filial> = [this.filials[3], this.filials[4]];

  onFilialClick = (filial: Filial) => {
    if (this.selectedFilials.includes(filial)) {
      this.selectedFilials = this.selectedFilials.filter(
        (item) => item !== filial
      );
    } else {
      this.selectedFilials = [...this.selectedFilials, filial];
    }
  };
}
