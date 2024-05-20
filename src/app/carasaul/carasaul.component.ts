import { Component } from '@angular/core';

@Component({
  selector: 'app-carasaul',
  templateUrl: './carasaul.component.html',
  styleUrls: ['./carasaul.component.css']
})
export class CarasaulComponent {

  images = [
    {
      src: '../../assets/top_pic1.png',
      caption: 'Unlock The Potential of  Scrap Recycling',
      description:'we are dedicated to empowering businesses to unlock their full potential through strategic insights, expert guidance, and customized solutions.',
      alt: 'Description of Image 2'
    },
    {
      src: '../../assets/top_pic13.png',
      caption: 'Give your E-waste a New Life',
      description:'Transform your e-waste into a new beginning. We are committed to revitalizing businesses by offering strategic insights, expert guidance, and tailored solutions.',
      alt: 'Description of Image 1'
    },
    {
      src: '../../assets/top_pic12.png',
      caption: 'Reduce, Reuse and Recycle',
      description:'Embrace the mantra of Reduce, Reuse, and Recycle. We are committed to helping businesses maximize their potential by offering strategic insights, expert guidance, and personalized solutions',
      alt: 'Description of Image 2'
    },

    
    // Add more images as needed
  ];

  currentImageIndex = 0;
  intervalId: any;
  mobile: any = "7544803884"
  whatsApp: any = "https://wa.me/7544803884"

  constructor() {}

  ngOnInit() {
    this.startCarousel();
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

  startCarousel() {
    this.intervalId = setInterval(() => {
      this.nextImage();
    }, 5000); // Change image every 5 seconds
  }

  nextImage() {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
  }

  previousImage() {
    this.currentImageIndex = (this.currentImageIndex - 1 + this.images.length) % this.images.length;
  }
  goToImage(index: number) {
    this.currentImageIndex = index;
  }

  refreshPage(){
    window.location.reload();
  }


}
