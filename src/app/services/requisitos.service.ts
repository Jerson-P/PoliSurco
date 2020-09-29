import { Injectable } from '@angular/core';
import { RequisitosInterface } from '../models/requisitos.interface';
import { AngularFirestore } from '@angular/fire/firestore';
import { getAllLifecycleHooks } from '@angular/compiler/src/lifecycle_reflector';
import { AdmisionesInterface } from '../models/admisiones.interface';

@Injectable({
  providedIn: 'root'
})
export class RequisitosService {
  r: RequisitosInterface[] = [];
  admisiones: AdmisionesInterface[] = [];

  constructor( private db: AngularFirestore) { 
    this.getRequisitos();
    this.getAdmisiones();

  }
  getRequisitos(){
    this.db.collection('requisitos').valueChanges().subscribe( (resp: any[]) => {
      this.r = resp;
    });
  }
  getAdmisiones(){
    return this.db.collection('admisiones').valueChanges().subscribe( (resp: any[]) => {
      this.admisiones =  resp;
    })

  }
}
