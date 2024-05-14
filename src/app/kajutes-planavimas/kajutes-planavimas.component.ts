import { Component } from '@angular/core';

@Component({
  selector: 'app-kajutes-planavimas',
  templateUrl: './kajutes-planavimas.component.html',
  styleUrl: './kajutes-planavimas.component.css'
})
export class KajutesPlanavimasComponent {
  images = [
    { name: 'r1.jpg', opt: 'Variantas - 1' },
    { name: 'r2.jpg', opt: 'Variantas - 2' },
    { name: 'r3.jpg', opt: 'Variantas - 3' },
    { name: 'r4.jpg', opt: 'Variantas - 4' },
    { name: 'r5.jpg', opt: 'Variantas - 5' },
    { name: 'r6.jpg', opt: 'Variantas - 6' }
  ];
}
