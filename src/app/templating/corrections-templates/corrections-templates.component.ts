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

 
  updateTemplate(id,template){
    console.log(id+" : " + template)
  }

 


}
