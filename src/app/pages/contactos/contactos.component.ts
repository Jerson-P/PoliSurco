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
  }

}
