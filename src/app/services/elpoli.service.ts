import { Injectable } from '@angular/core';
import { Elpoli } from '../models/elpoli.interface';
import { AngularFirestore } from '@angular/fire/firestore';
import { JuridicoInterface } from '../models/juridico.interface';

@Injectable({
  providedIn: 'root'
})
export class ElpoliService {
  elPoli: Elpoli[] = [];
  juridico: JuridicoInterface[] = [];
  cargando = true;


  constructor( private db: AngularFirestore) { this.getPoli(); this.getJuridico(); }


  getPoli(){
    return this.db.collection('elpolisurco').valueChanges().subscribe((resp: any[]) => {
      this.elPoli =  resp;
    });
  }

  getJuridico(){
    return this.db.collection('juridico').valueChanges().subscribe(( resp: any[] ) => {
      this.juridico = resp;
      this.cargando = false;
    });
  }
}
