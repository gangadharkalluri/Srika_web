import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { interval } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
      ]),
      transition(':leave', [
        animate('0.5s ease-in-out', style({ transform: 'translateX(100%)' }))
      ])
    ])
  ]
})
export class HomeComponent {
  // firstSlider:boolean = true;
  // secondSlider:boolean = false;
  // thirdSlider :boolean = false;
  currentSlider = 1;

  constructor(){}

  ngOnInit(){
    interval(5000).subscribe(() => {
      this.currentSlider = this.currentSlider % 3 + 1;
    });
  }

  // onarrow(){
  //   this.firstSlider = false;
  //   this.secondSlider = true;
  //   this.thirdSlider = false;
  // }
  // onarrowSec(){
  //   this.firstSlider = false;
  //   this.secondSlider = false;
  //   this.thirdSlider = true;
  // }
}
