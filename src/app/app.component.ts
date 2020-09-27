import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { UrlsServicesService } from './services/urls-services.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public title = 'Soluciones Educativas Polisurco SAS Cartagena del Chairá Caquetá';

  cookieValue = 'UNKNOWN';
  constructor( private cookieService: CookieService, 
                public urlsService: UrlsServicesService) { }
  

  ngOnInit(): void {
    this.cookieService.set( 'Cookie', 'GDPR' );
    this.cookieValue = this.cookieService.get('Cookie');
  }

  visible: boolean = true;
 
  @Output() close: EventEmitter<any> = new EventEmitter();
 
  onGRDP() {
    this.visible = !this.visible;
      if (this.visible) {        
        this.close.emit(null);
      }
  }
}

