import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor(private db:AngularFirestore) { }

  getIntro(topic_id,curricula_id){
    let tcr_code = `I+${topic_id}+${curricula_id}`
    console.log('collecting intros')
    return this.db.collection('content', ref=>ref.where('tcr_codes','array-contains',tcr_code)).valueChanges({idField:'id'})
  }
  getLessons(topic_id,curricula_id){
    let tcr_code = `L+${topic_id}+${curricula_id}`
    console.log('collecting lessons')
    return this.db.collection('content', ref=>ref.where('tcr_codes','array-contains',tcr_code)).valueChanges({idField:'id'})
  }
  getNotes(topic_id,curricula_id){
    let tcr_code = `N+${topic_id}+${curricula_id}`
    console.log('collecting notes: '+tcr_code)
    return this.db.collection('content', ref=>ref.where('tcr_codes','array-contains',tcr_code)).valueChanges({idField:'id'})
  }

  getAll(content_type){
    console.log('collecting all '+content_type)
    return this.db.collection('content', ref=>ref.where('content_type','==',content_type)).valueChanges({idField:'id'})
  }


  getDeps(curricula_id){
    console.log('collecting dependacies')
     return this.db.collection(`curricula/${curricula_id}/topics`).valueChanges({idField:'id'})
  }

  getApplications(){
    console.log('collecting applications')
     return this.db.collection(`applications`).valueChanges({idField:'id'})
  }

  getQuiz(curricula_id,topic_id){
    console.log('collecting quiz')
    return this.db.collection(`curricula/${curricula_id}/quiz`,ref=>ref.where('topic_id','==',topic_id)).valueChanges({idField:'id'})
  }

  getQuizContext(curricula_id,context_id){
    return this.db.doc(`curricula/${curricula_id}/quiz/${context_id}`).valueChanges()
  }


  
}
