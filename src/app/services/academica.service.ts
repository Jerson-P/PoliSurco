import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { BachilleratoInterface } from '../models/bachillerato.interface';
import { DiplomadosInterface } from '../models/diplomados.interface';
import { CursosInterface } from '../models/cursos.interface';
import { SeminariosInterfaces } from '../models/seminarios.interfaces';
import { ConveniosInterface } from '../models/convenios.interface';
import { TecnicosInterface } from '../models/tecnicos.interface';

@Injectable({
  providedIn: 'root'
})
export class AcademicaService {
  datosB: BachilleratoInterface[] = [];
  datosD: DiplomadosInterface[] = [];
  datosC: CursosInterface[] = [];
  datosS: SeminariosInterfaces[] = [];
  datosPre: ConveniosInterface[] = [];
  datosPos: ConveniosInterface[] = [];
  datosTec: TecnicosInterface[] = [];

  constructor( private db: AngularFirestore) {
    this.getBachillerato();
    this.getDiplomados();
    this.getCursos();
    this.getSeminarios();
    this.getPregrado();
    this.getPosgrados();
    this.getTecnicos();

   }
   getBachillerato(){
     return this.db.collection('bachillerato').valueChanges()
     .subscribe(( resp: any[]) => {
       this.datosB = resp;
     });
   }
   getDiplomados(){
     return this.db.collection('diplomados').valueChanges().subscribe( ( resp: any[] ) => {
        this.datosD = resp;
     });
   }
   getCursos(){
     return this.db.collection('cursos').valueChanges().subscribe( (resp: any[]) => {
      this.datosC =  resp;
     });
   }
   getSeminarios(){
     return this.db.collection('seminarios').valueChanges().subscribe( (resp: any[]) =>{
      this.datosS = resp;
     });
   }

   getPregrado(){
     return this.db.collection('pregrados').valueChanges().subscribe( (resp: any[]) =>{
      this.datosPre =  resp;
     });
   }
   getPosgrados(){
     return this.db.collection('posgrados').valueChanges().subscribe( (resp: any[]) =>{
      this.datosPos = resp;
     });
   }
   getTecnicos(){
     return this.db.collection('tecnicos').valueChanges().subscribe( (resp: any[]) =>{
      this.datosTec = resp;
     });
   }
}
