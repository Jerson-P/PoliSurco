import { Component, OnInit } from '@angular/core';
import { UrlsServicesService } from '../../services/urls-services.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  year: number = new Date().getFullYear();
  
  constructor( public url: UrlsServicesService) { }

  ngOnInit(): void {
  }

}
