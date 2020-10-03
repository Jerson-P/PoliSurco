import { Component, OnInit } from '@angular/core';
import * as M  from '../../../assets/materialize/js/materialize.js';
import { ContactosService } from '../../services/contactos.service';

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.component.html',
  styleUrls: ['./contactos.component.css']
})
export class ContactosComponent implements OnInit {

  constructor( public urlContactos: ContactosService) { }

  ngOnInit(): void {
    let autocomplete = M.Autocomplete.init(document.querySelectorAll('.autocomplete'), {});
    var form = document.querySelector('#formulario-contactos');
    var btn = document.querySelector('#wh-con');
    const urlDesktop = 'https://web.whatsapp.com/';
    const urlMobile = 'whatsapp://';
    const telefono = '573235747527';
    btn.addEventListener('click', (e) => {
      setTimeout(() => {
      const nombre: HTMLInputElement = document.getElementById('nombre-con') as HTMLInputElement
      const nombreVal:  String = nombre.value;
      const programa: HTMLInputElement = document.getElementById('programa-con') as HTMLInputElement
      const programaVal: string = programa.value;
      const email: HTMLInputElement = document.getElementById('email-con') as HTMLInputElement
      const emailVal: string = email.value;
      const msm: HTMLInputElement = document.getElementById('mensaje-con') as HTMLInputElement
      const msmVal: string = msm.value;
      const cel: HTMLInputElement = document.getElementById('celular-con') as HTMLInputElement
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
