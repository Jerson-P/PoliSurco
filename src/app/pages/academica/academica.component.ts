import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as M from '../../../assets/materialize/js/materialize.js';
import { AcademicaService } from '../../services/academica.service';

@Component({
  selector: 'app-academica',
  templateUrl: './academica.component.html',
  styleUrls: ['./academica.component.css']
})
export class AcademicaComponent implements OnInit, AfterViewInit {

  constructor( public academico: AcademicaService ) { }
  ngAfterViewInit(): void {
    let instances = M.Collapsible.init(document.querySelectorAll('.collapsible'), {});
    var instance = M.Tabs.init(document.querySelectorAll('.tabs'), {});
  }
  
  ngOnInit(): void {
    let instances = M.Collapsible.init(document.querySelectorAll('.collapsible'), {});
    var instance = M.Tabs.init(document.querySelectorAll('.tabs'), {});
  }

}
