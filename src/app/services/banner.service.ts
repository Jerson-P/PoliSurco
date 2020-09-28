import { Injectable } from '@angular/core';
import { BannerInterface } from '../models/banner.interface';
import { AngularFirestore } from '@angular/fire/firestore';
import { NoticiasInterface } from '../models/noticias.interface';


@Injectable({
  providedIn: 'root'
})
export class BannerService {

  urls: BannerInterface[] = [];
  noticias: NoticiasInterface[] = [];
  cargando =  true;
  

  

  constructor( private db:AngularFirestore) {  
    this.getBanner();
    this.getNoticias();

  }

  public getBanner(){
    // return this.db.collection('banner').snapshotChanges();
    this.db.collection('banner').valueChanges().subscribe( (resp: any[]) => {
      console.log(resp)
      this.urls = resp;
      this.cargando = false;
    });
  }
  getNoticias(){
    return this.db.collection('noticias-testimonios').valueChanges().subscribe( (resp: any[]) =>{
      this.noticias = resp;
    })
  }
}
