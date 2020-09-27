import { Component, OnInit } from '@angular/core';
import { UrlsInterface } from '../../models/urls.interface';
import { UrlsServicesService } from '../../services/urls-services.service';



@Component({
  selector: 'app-emisora',
  templateUrl: './emisora.component.html',
  styleUrls: ['./emisora.component.css']
})
export class EmisoraComponent implements OnInit {

 

  constructor( public urlsServicesService: UrlsServicesService) { }

  ngOnInit(): void {

  }
  
  
}
