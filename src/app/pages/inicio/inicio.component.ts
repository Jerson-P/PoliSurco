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
  p: number = 1;

  // cargando =  true;

  constructor( public urlsBanner: BannerService) { 
    
  }

  ngAfterViewInit(): void {
    let slider = M.Slider.init(document.querySelectorAll('.slider'), this.options );
    let parallax = M.Parallax.init(document.querySelectorAll('.parallax'), {});
    let autocomplete = M.Autocomplete.init(document.querySelectorAll('.autocomplete'), {
      data: { }
    });   
  }

  ngOnInit(): void {

    // this.urlsBanner.getBanner().subscribe((banner) => {
    //   this.banners = [];
    //   banner.forEach((bannerData: any) => {
    //   this.banners.push({
    //     id: bannerData.payload.doc.id,
    //     data: bannerData.payload.doc.data()
    //   });
    //   this.cargando = false;
    //   })
    // });
  }

}
