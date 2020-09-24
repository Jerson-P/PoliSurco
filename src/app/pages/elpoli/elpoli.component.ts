import { Component, OnInit } from '@angular/core';
import * as M  from '../../../assets/materialize/js/materialize.js';

@Component({
  selector: 'app-elpoli',
  templateUrl: './elpoli.component.html',
  styleUrls: ['./elpoli.component.css']
})
export class ElpoliComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let instances = M.Collapsible.init(document.querySelectorAll('.collapsible'), {} );
  }

}
