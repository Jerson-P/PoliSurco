import { Component, OnInit, AfterViewInit} from '@angular/core';
import * as M  from '../../../assets/materialize/js/materialize.js';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit, AfterViewInit {
  options = {
    fullWidth: true,
    indicators: true,
    duration: 1000,
    
  };
  

  constructor() { 
    
  }

  ngAfterViewInit(): void {
    let slider = M.Slider.init(document.querySelectorAll('.slider'), {} );
  }

  ngOnInit(): void {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, this.options);
    // var instance = M.Carousel.getInstance(elems);
    

    // autoPlay();
    
    // function autoPlay() {
    //   instances.next();
    //   setTimeout(autoPlay, 4500);
      
    // }
    
  }

}
