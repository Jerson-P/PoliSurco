import { Injectable } from '@angular/core';
import { RequisitosInterface } from '../models/requisitos.interface';
import { AngularFirestore } from '@angular/fire/firestore';
import { getAllLifecycleHooks } from '@angular/compiler/src/lifecycle_reflector';

@Injectable({
  providedIn: 'root'
})
export class RequisitosService {
  r: RequisitosInterface[] = [];

  constructor( private db: AngularFirestore) { 
    this.getRequisitos();

  }
  getRequisitos(){
    this.db.collection('requisitos').valueChanges().subscribe( (resp: any[]) => {
      this.r = resp;
    })
  }
}
