import { Component, OnInit } from '@angular/core';
import * as M  from '../../../assets/materialize/js/materialize.js';
import { ElpoliService } from '../../services/elpoli.service';

@Component({
  selector: 'app-elpoli',
  templateUrl: './elpoli.component.html',
  styleUrls: ['./elpoli.component.css']
})
export class ElpoliComponent implements OnInit {

  constructor( public elpoli: ElpoliService ) { }

  ngOnInit(): void {
    let instances = M.Collapsible.init(document.querySelectorAll('.collapsible'), {} );
  }

}
