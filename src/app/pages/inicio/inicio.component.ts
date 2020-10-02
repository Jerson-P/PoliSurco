import { DOCUMENT } from '@angular/common';
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
    var form = document.querySelector('#formulario-inicio');
    var btn = document.querySelector('#wh-inicio');
    const urlDesktop = 'https://web.whatsapp.com/';
    const urlMobile = 'whatsapp://';
    const telefono = '573123885467';
    btn.addEventListener('click', (e) => {
      console.log("Hola");
      
      // console.log(nombreVal);
      setTimeout(() => {
      const nombre: HTMLInputElement = document.getElementById('nombre-inicio') as HTMLInputElement
      const nombreVal:  String = nombre.value;
      const programa: HTMLInputElement = document.getElementById('programa-inicio') as HTMLInputElement
      const programaVal: string = programa.value;
      const email: HTMLInputElement = document.getElementById('email-inicio') as HTMLInputElement
      const emailVal: string = email.value;
      const msm: HTMLInputElement = document.getElementById('mensaje-inicio') as HTMLInputElement
      const msmVal: string = msm.value;
      const cel: HTMLInputElement = document.getElementById('celular-inicio') as HTMLInputElement
      const celVal: string = cel.value;
      let mensaje = 'send?phone=' + telefono + '&text=*Quiero estudiar en el POLISURCOS:*%0A*¿Cual es tu nombre?*%0A'
                     + nombreVal + '%0A*¿Programa de interes?*%0A' + programaVal 
                     + '%0A*¿Tú email?*%0A' + emailVal + '%0A*¿TúAMensaje?*%0A' + msmVal 
                     + '*%0A*¿Tú Celular?*%0A' + celVal +'';
      if (this.isMobile()) {
        window.open(urlMobile + mensaje, '_blank');
      }else{
        window.open(urlDesktop + mensaje, '_blank');
      }


      }, 2000);

    });
    
    

  }
  isMobile() {
    if (sessionStorage.desktop)
        return false;
    else if (localStorage.mobile)
        return true;
    var mobile = ['iphone', 'ipad', 'android', 'blackberry', 'nokia', 'opera mini', 'windows mobile', 'windows phone', 'iemobile'];
    for (var i in mobile)
        if (navigator.userAgent.toLowerCase().indexOf(mobile[i].toLowerCase()) > 0) return true;
    return false;
}

}
