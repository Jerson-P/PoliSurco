import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { UrlsInterface } from '../models/urls.interface';



@Injectable({
  providedIn: 'root'
})
export class UrlsServicesService {
  urls: UrlsInterface[] = [];
  
  constructor( private firestore: AngularFirestore) {
    this.getUrls();
    
  }


  getUrls(){
    // return this.firestore.collection('urls').valueChanges()
    // .subscribe(val => console.log(val));
    return this.firestore.collection('urls').valueChanges()
            .subscribe( (resp: any[]) => {
              this.urls =  resp;
            });
  }
}

