import { Component, OnInit, AfterViewInit, Input} from '@angular/core';
import * as M  from '../../../assets/materialize/js/materialize.js';
import { BannerService } from '../../services/banner.service';
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
  page: number = 1;
  public banners = [];
 

  constructor( public urlsBanner: BannerService) { 
  }

  slideConfig = {"slidesToShow": 1, "slidesToScroll": 1, autoplay:true, "autoplaySpeed":3000};

  ngAfterViewInit(): void {
    let slider = M.Slider.init(document.querySelectorAll('.slider'), this.options );
    let parallax = M.Parallax.init(document.querySelectorAll('.parallax'), {});
    let autocomplete = M.Autocomplete.init(document.querySelectorAll('.autocomplete'), {
      data: { }
    });   
  }

  ngOnInit(): void {
    let prev = document.querySelector('slick-prev');
    prev.textContent = "Atrás";


  }

}
