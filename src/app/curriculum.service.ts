import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore'
import {BehaviorSubject} from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class CurriculumService {

  current_curriculum:BehaviorSubject<any> = new BehaviorSubject(null)
  
  constructor(private db:AngularFirestore) { }

  public setCurriculum(curriculum){
      console.log('current curricula'+ curriculum)
      this.current_curriculum.next(curriculum)
  }

  getAll() {
    return this.db.collection('curricula').valueChanges({idField:'id'})
  }

}
