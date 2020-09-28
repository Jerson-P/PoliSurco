import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ContactosInterface } from '../models/contactos.interface';

@Injectable({
  providedIn: 'root'
})
export class ContactosService {
  urls: ContactosInterface[] = [];
  cargando: true;


  constructor( private db:AngularFirestore) {  
    this.getContactos();
  }
  
  public getContactos(){
    return this.db.collection('contactos').valueChanges().subscribe( (resp: any[]) => {
      this.urls = resp;
    })
  }
}
