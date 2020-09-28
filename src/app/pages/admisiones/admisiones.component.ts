import { Component, OnInit } from '@angular/core';
import * as M  from '../../../assets/materialize/js/materialize.js';
import { RequisitosService } from '../../services/requisitos.service';

@Component({
  selector: 'app-admisiones',
  templateUrl: './admisiones.component.html',
  styleUrls: ['./admisiones.component.css']
})
export class AdmisionesComponent implements OnInit {

  constructor( public requisitos: RequisitosService) { }

  ngOnInit(): void {
    let instances = M.Collapsible.init(document.querySelectorAll('.collapsible'), {} );
    let modal = M.Modal.init(document.querySelectorAll('.modal'), {});
  }

}
