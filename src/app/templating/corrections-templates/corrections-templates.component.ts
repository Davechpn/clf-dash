import { Component, OnInit } from '@angular/core';
import { TemplatingService } from './../../templating.service';


@Component({
  selector: 'app-corrections-templates',
  templateUrl: './corrections-templates.component.html',
  styleUrls: ['./corrections-templates.component.css']
})
export class CorrectionsTemplatesComponent implements OnInit {
  initialStartComments;
  initialRetryComments;

  passedat1Comments;
  passedat2Comments;
  passedat3Comments;
  passedatOver3Comments;

  failedat1Comments;
  failedat2Comments;
  failedat3Comments
  failedatOver3Comments
  min_characters = 5;
  newFailedatOver3Comment: string;
  newFailedat3Comment: string;
  newFailedat2Comment: string;
  newPassedatOver3Comment: string;
  newPassedat3Comment: string;
  newPassedat2Comment: string;
  newPassedat1Comment: string;
  newInitialRetryComment: string;
  newInitialStartComment: string;


  constructor(private ts:TemplatingService) { }

  ngOnInit() {
    this.getInitialCABStart()
    this.getInitialRetryToNextComments()

    this.getFinalyPassedat1Comments()
    this.getFinalyPassedat2Comments() 
    this.getFinalyPassedat3Comments() 
    this.getFinalyPassedatOver3Comments() 
 
    this.getFailedat2Comments()
    this.getFailedat3Comments()
    this.getFailedatOver3Comments()
     
  }
  //Initial CAB Start ----------------------------------------------------------------
    getInitialCABStart(){
      this.initialStartComments = this.ts.getFor_Initial_CabStart()
    }
  //First attempt --------------------------------------------------------------------
    getInitialRetryToNextComments(){
      this.initialRetryComments = this.ts.getFor_Initial_Retry_ToNext_After_Pass()
    }

    getFinalyPassedat1Comments(){
      this.passedat1Comments = this.ts.getFor_Initial_Retry_ToExit_After_Pass()
    }


 //Second Attempt --------------------------------------------------------------------
  getFailedat2Comments(){
    this.failedat2Comments = this.ts.getFor_Second_Retry_After_Fail()
  }

  getFinalyPassedat2Comments(){
    this.passedat2Comments = this.ts.getFor_Second_Retry_ToExit_After_Pass()
  }

 //Third Attempt ----------------------------------------------------------------------
  getFailedat3Comments(){
    this.failedat3Comments = this.ts.getFor_Third_Retry_After_Fail()
  }
  getFinalyPassedat3Comments(){
    this.passedat3Comments = this.ts.getFor_Third_Retry_ToExit_After_Pass() 
  }


 

//Over 3 Attempts --------------------------------------------------------------------
  getFailedatOver3Comments(){
      this.failedatOver3Comments = this.ts.getFor_FourthOrAbove_Retry_After_Fail()
  }
  getFinalyPassedatOver3Comments(){
    this.passedatOver3Comments = this.ts.getFor_FourthOrAbove_Retry_ToExit_After_Pass() 
  }

//END GET TEMPLATES///////////////////////////////////////////////////////////////////
  //
  //
//SET TEMPLATES///////////////////////////////////////////////////////////////////////
  addInitialStartComment(){
    if(this.newInitialStartComment.length>this.min_characters){
      console.log('adding'+ this.newInitialStartComment)
      this.ts.setFor_Initial_CabStart(this.newInitialStartComment)
      this.newInitialStartComment=""
    }
 
  }
  addInitialRetryComment()
  {
    if(this.newInitialRetryComment.length>this.min_characters){
      console.log('adding'+ this.newInitialRetryComment)
      this.ts.setFor_Initial_Retry_ToNext_After_Pass(this.newInitialRetryComment)
      this.newInitialRetryComment=""
    }
  }
  addPassedat1Comment(){
    if(this.newPassedat1Comment.length>this.min_characters){
      console.log('adding'+ this.newPassedat1Comment)
      this.ts.setFor_Initial_Retry_ToExit_After_Pass(this.newPassedat1Comment)
      this.newPassedat1Comment=""
    }
  }
  addPassedat2Comment(){
  
    if(this.newPassedat2Comment.length> this.min_characters){
      console.log('adding'+ this.newPassedat2Comment)
      this.ts.setFor_Second_Retry_ToExit_After_Pass(this.newPassedat2Comment)
      this.newPassedat2Comment = ""
    }
  }
  addPassedat3Comment(){  
    if(this.newPassedat3Comment.length> this.min_characters){
      console.log('adding'+ this.newPassedat3Comment)
      this.ts.setFor_Third_Retry_ToExit_After_Pass(this.newPassedat3Comment)
      this.newPassedat3Comment=""
    }
  }
  addPassedatOver3Comment(){ 
    if(this.newPassedatOver3Comment.length> this.min_characters){
      console.log('adding'+ this.newPassedatOver3Comment)
      this.ts.setFor_FourthOrAbove_Retry_ToExit_After_Pass(this.newPassedatOver3Comment) 
      this.newPassedatOver3Comment=""
    }
  }
  addFailedat2Comment(){   
    if(this.newFailedat2Comment.length> this.min_characters){
      console.log('adding'+ this.newFailedat2Comment)
      this.ts.setFor_Second_Retry_After_Fail(this.newFailedat2Comment)
  
      this.newFailedat2Comment=""
    }
  }
  addFailedat3Comment(){
    if(this.newFailedat3Comment.length> this.min_characters){
      console.log('adding'+ this.newFailedat3Comment)
      this.ts.setFor_Third_Retry_After_Fail(this.newFailedat3Comment)
      this.newFailedat3Comment=""
    }
  }
  addFailedatOver3Comment(){   
    if(this.newFailedatOver3Comment.length> this.min_characters){
      console.log('adding'+ this.newFailedatOver3Comment)
      this.ts.setFor_FourthOrAbove_Retry_After_Fail(this.newFailedatOver3Comment)
      this.newFailedatOver3Comment=""
    }
  }
 
  updateTemplate(template,text){
    template.template = text  
    console.log(template)
    this.ts.updateTemplate(template) 
  }
  deleteTemplate(id){
    console.log(id+" : to be deleted" )
    this.ts.deleteTemplate(id)
  }
  

}
