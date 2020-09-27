import { Component, OnInit, AfterViewInit} from '@angular/core';
import * as M  from '../../../assets/materialize/js/materialize.js';
declare var $: any;


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
    let parallax = M.Parallax.init(document.querySelectorAll('.parallax'), {});
    let autocomplete = M.Autocomplete.init(document.querySelectorAll('.autocomplete'), {
      data: { }
    });

  }

  ngOnInit(): void {
    let elems = document.querySelectorAll('.carousel');
    let instances = M.Carousel.init(elems, this.options);
    setInterval(function(){
      $('.carousel').carousel('next');
    }, 10000);
    
    
  }

}
