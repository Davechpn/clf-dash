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


  addInitialStartComment(){
    console.log('adding'+ this.newInitialStartComment)
  }
  addInitialRetryComment()
  {
    console.log('adding'+ this.newInitialRetryComment)
  }
  addPassedat1Comment(){
    console.log('adding'+ this.newPassedat1Comment)
  }
  addPassedat2Comment(){
    console.log('adding'+ this.newPassedat2Comment)
  }
  addPassedat3Comment(){
    console.log('adding'+ this.newPassedat3Comment)
  }
  addPassedatOver3Comment(){
    console.log('adding'+ this.newPassedatOver3Comment)
  }
  addFailedat2Comment(){
    console.log('adding'+ this.newFailedat2Comment)
  }
  addFailedat3Comment(){
    console.log('adding'+ this.newFailedat3Comment)
  }
  addFailedatOver3Comment(){
    console.log('adding'+ this.newFailedatOver3Comment)
  }
 
  updateTemplate(id,template){
    console.log(id+" : " + template)
  }

 
  deleteTemplate(id){
    console.log(id+" : to be deleted" )
  }

}
