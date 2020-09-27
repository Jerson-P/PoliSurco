import { Injectable } from '@angular/core';
import { BannerInterface } from '../models/banner.interface';
import { AngularFirestore } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class BannerService {

  urls: BannerInterface[] = [];
  cargando =  true;

  constructor( private db:AngularFirestore) {  
    this.getBanner();

  }

  public getBanner(){
    return this.db.collection('banner').snapshotChanges();
    
  //   return this.db.collection('banner').valueChanges()
  //           .subscribe( (resp: any[]) => {
  //             // console.log(resp);
  //             this.urls =  resp;
  //             console.log(this.urls[0]);
  //           });
  // }
  }
}
