import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent {
  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    center: true,
    dots: true,
     autoHeight: true,
    autoWidth: true,  
    slideTransition:'ease', 
    autoplayTimeout: 5000, // Set autoplay timeout to 3 seconds (3000 milliseconds)
    autoplayHoverPause:true, 
     autoplaySpeed: 1000, // Set autoplay speed to 1 second (1000 milliseconds) per slide transition
    items: 5, // Set the number of items you want to display at once
    responsive: {
      0: {
        items: 1, // Show one item on small screens
      },
      600: {
        items: 1, // Show two items on medium screens
      },
      1000: {
        items: 1, // Show three items on large screens
      }
    }
  }

  

}

 


