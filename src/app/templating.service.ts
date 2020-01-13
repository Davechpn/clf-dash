import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore'

@Injectable({
  providedIn: 'root'
})
export class TemplatingService {

  constructor(private db:AngularFirestore) {}
  //TAGGING///////////////////////////////////////////////////////////////
    //For Intros Lessona and Notes-----------------------------------
      getTags(schema_stage:string){
        return this.db.collection('templates',ref=>ref.where('current_stage','==',schema_stage)
                                                      .where('type','==','tag'))
                                                      .valueChanges({ idField: 'id' })
      }
      setTag(){
      }

   //END TAGGING//////////////////////////////////////////////////////////
    
  //PROMPTING ////////////////////////////////////////////////////////////
    //from Intro from Lesson and From Notes to the next stage---------------------------
      getPrompts(from:string,to:string){
        return this.db.collection('templates',ref=>ref.where('current_stage','==',from)
                                                      .where('next_stage','==',to)
                                                      .where('type','==','prompt'))
                                                      .valueChanges({ idField: 'id' })
      }

      setPrompt(){
      }


   //END PROMPTING///////////////////////////////////////////////////////

  //COMMENTING///////////////////////////////////////////////////////////
    //high-high--------------------------------------
      getFor_High_High_Pass(){
        return this.db.collection('templates',ref=>ref.where('gradient','==','high-high')
                                                      .where('status','==','pass')
                                                      .where('type','==','comment'))
                                                      .valueChanges({ idField: 'id' })
      }
      setFor_High_High_Pass(){

      }
    //high-low---------------------------------------
      getFor_High_Low_Fail(){
        return this.db.collection('templates',ref=>ref.where('gradient','==','high-low')
                                                      .where('status','==','fail')
                                                      .where('type','==','comment'))
                                                      .valueChanges({ idField: 'id' })
      }
      setFor_High_High_Fail(){
      }
    //low-high---------------------------------------
      getFor_Low_High_Pass(){
        return this.db.collection('templates',ref=>ref.where('gradient','==','low-high')
                                                      .where('status','==','pass')
                                                      .where('type','==','comment'))
                                                      .valueChanges({ idField: 'id' })

      }
      setFor_Low_High_Pass(){

      }
    //low_low----------------------------------------
      getFor_Low_Low_Fail(){
        return this.db.collection('templates',ref=>ref.where('gradient','==','low-low')
                                                      .where('status','==','fail')
                                                      .where('type','==','comment'))
                                                      .valueChanges({ idField: 'id' })
      }
      setFor_Low_Low_Fail(){   
      }
    //none_gradient_pass-----------------------------
      getFor_None_Gradient_Pass(){
        return this.db.collection('templates',ref=>ref.where('gradient','==','none')
                                                      .where('status','==','pass')
                                                      .where('type','==','comment'))
                                                      .valueChanges({ idField: 'id' })
      }
      setFor_None_Gradient_Pass(){   
      }

    //none_gradient_fail-----------------------------
      getFor_None_Gradient_Fail(){
        return this.db.collection('templates',ref=>ref.where('gradient','==','none')
                                                      .where('status','==','fail')
                                                      .where('type','==','comment'))
                                                      .valueChanges({ idField: 'id' })
      }
      setFor_None_Gradient_Fail(){   
      }
   //END COMMENTING//////////////////////////////////////////////////////

  //CAB-COMMENTING///////////////////////////////////////////////////////
     
      //Initial At CabStart//////////////////////////////////////////
          getFor_Initial_CabStart(){
            return this.db.collection('templates',ref=>ref.where('is_initial_retry','==',true)
                                                          .where('type','==','cab_comment'))
                                                          .valueChanges({ idField: 'id' })
          }
          setFor_Initial_CabStart(){

          }


      //First Retry/////////////////////////////////////////////////        
           //All First retries are after pass
       
        //After Pass-------------------------------------//
          //to_next-------------------------------
            getFor_Initial_Retry_ToNext_After_Pass(){
              return this.db.collection('templates',ref=>ref.where('retries','==',0) //retries are always 0 since we reset retries at new index
                                                            .where('type','==','cab_comment')
                                                            .where('last_retry_success','==',true)
                                                            .where('has_next_retry','==',true))
                                                            .valueChanges({ idField: 'id' })
            }
            setFor_Initial_Retry_ToNext_After_Pass(){

            }
          //to_exit-------------------------------
            getFor_Initial_Retry_ToExit_After_Pass(){
              return this.db.collection('templates',ref=>ref.where('retries','==',0) 
                                                            .where('type','==','cab_comment')
                                                            .where('last_retry_success','==',true)
                                                            .where('has_next_retry','==',false))
                                                            .valueChanges({ idField: 'id' })
            }
            setFor_Initial_Retry_ToExit_After_Pass(){

            }


      //Second Retry//////////////////////////////////////////////
        //After Fail-------------------------------------//
            //after failing 
            getFor_Second_Retry_After_Fail(){
              return this.db.collection('templates',ref=>ref.where('retries','==',1)
                                                            .where('type','==','cab_comment')
                                                            .where('last_retry_success','==',false))
                                                            .valueChanges({ idField: 'id' })                            
      
            }
            setFor_Second_Retry_After_Fail(){

            }
        //After Pass-------------------------------------//
            //to_exit-------------------------------
            getFor_Second_Retry_ToExit_After_Pass(){
              return this.db.collection('templates',ref=>ref.where('retries','==',1) 
                                                            .where('type','==','cab_comment')
                                                            .where('last_retry_success','==',true)
                                                            .where('has_next_retry','==',false))
                                                            .valueChanges({ idField: 'id' })
            }
            setFor_Second_Retry_ToExit_After_Pass(){

            }
      //Third Retry//////////////////////////////////////////////
        //After Fail-------------------------------------//
            //after failing 
            getFor_Third_Retry_After_Fail(){
              return this.db.collection('templates',ref=>ref.where('retries','==',2)
                                                            .where('type','==','cab_comment')
                                                            .where('last_retry_success','==',false)) 
                                                            .valueChanges({ idField: 'id' })
            }
            setFor_Third_Retry_After_Fail(){

            }
        //After Pass-------------------------------------//
            //to_exit-------------------------------
            getFor_Third_Retry_ToExit_After_Pass(){
              return this.db.collection('templates',ref=>ref.where('retries','==',2) 
                                                            .where('type','==','cab_comment')
                                                            .where('last_retry_success','==',true)
                                                            .where('has_next_retry','==',false))
                                                            .valueChanges({ idField: 'id' })
            }
            setFor_Third_Retry_ToExit_After_Pass(){

            }
      //FourthOrAbove Retry//////////////////////////////////////////////
        //After Fail-------------------------------------//
            //after failing 
            getFor_FourthOrAbove_Retry_After_Fail(){
              return this.db.collection('templates',ref=>ref.where('retries','>',2)
                                                            .where('type','==','cab_comment')
                                                            .where('last_retry_success','==',false))
                                                            .valueChanges({ idField: 'id' })
         
            }
            setFor_FourthOrAbove_Retry_After_Fail(){

            }
        //After Pass-------------------------------------//
            //to_exit-------------------------------
            getFor_FourthOrAbove_Retry_ToExit_After_Pass(){
              return this.db.collection('templates',ref=>ref.where('retries','>',2)
                                                            .where('type','==','cab_comment')
                                                            .where('last_retry_success','==',true)
                                                            .where('has_next_retry','==',false))
                                                            .valueChanges({ idField: 'id' })
            }
            setFor_FourthOrAbove_Retry_ToExit_After_Pass(){

            }
   //END CAB-COMMENTING//////////////////////////////////////////////////


  //CAREER GUIDING///////////////////////////////////////////////////////
      //Applications--------------------------------------//
      getFor_Cg_Applications(){
        return this.db.collection('templates',ref=>ref.where('type','==','applications'))
      }
      setFor_Cg_Applications(){
        
      }
      //Professions--------------------------------------//
      getFor_Cg_Professions(){
        return this.db.collection('templates',ref=>ref.where('type','==','professions'))
      }
      setFor_Cg_Professions(){
        
      }
    //END CAREER GUIDING/////////////////////////////////////////////////

}
