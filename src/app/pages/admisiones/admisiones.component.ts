import { Component, OnInit } from '@angular/core';
import * as M  from '../../../assets/materialize/js/materialize.js';

@Component({
  selector: 'app-admisiones',
  templateUrl: './admisiones.component.html',
  styleUrls: ['./admisiones.component.css']
})
export class AdmisionesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let instances = M.Collapsible.init(document.querySelectorAll('.collapsible'), {} );
    let modal = M.Modal.init(document.querySelectorAll('.modal'), {});
  }

}
