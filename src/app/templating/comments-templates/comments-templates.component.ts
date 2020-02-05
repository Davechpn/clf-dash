import { Component, OnInit } from '@angular/core';
import { TemplatingService } from './../../templating.service';

@Component({
  selector: 'app-comments-templates',
  templateUrl: './comments-templates.component.html',
  styleUrls: ['./comments-templates.component.css']
})
export class CommentsTemplatesComponent implements OnInit {
  
  passedComments;
  failedComments;
  highToHighComments;
  highToLowComments;
  lowToHighComments;
  lowToLowComments
  min_characters = 5;
  newFailedComment: string;
  newHighToHighComment: string;
  newHighToLowComment: string;
  newLowToHighComment: string;
  newLowToLowComment: string;
  newPassedComment: string;

  constructor(private ts:TemplatingService) { }

  ngOnInit() {

    this.getFailed();
    this.getPassed();
    this.getHighToHigh();
    this.getHighToLow();
    this.getLowToHigh();
    this.getLowToLow();
  }
  //GET TEMPLATES///////////////////////////////////////////////////////////////////////
  getFailed(){
    this.failedComments  = this.ts.getFor_None_Gradient_Fail()
  }
  getPassed(){
    this.passedComments = this.ts.getFor_None_Gradient_Pass()
  }
  getHighToHigh(){
    this.highToHighComments = this.ts.getFor_High_High_Pass()
  }
  getHighToLow(){
    this.highToLowComments = this.ts.getFor_High_Low_Fail()
  }
  getLowToHigh(){
    this.lowToHighComments = this.ts.getFor_Low_High_Pass()
  }
  getLowToLow(){
    this.lowToLowComments = this.ts.getFor_Low_Low_Fail()
  }
  //END GET TEMPLATES///////////////////////////////////////////////////////////////////
  //
  //
  //SET TEMPLATES///////////////////////////////////////////////////////////////////////

  addPassedComments(){
    if(this.newPassedComment.length>this.min_characters){
      console.log('adding'+ this.newPassedComment)
      this.ts.setFor_None_Gradient_Pass(this.newPassedComment)
      this.newPassedComment = ""
    }
  }

  addFailedComments(){
 
     if(this.newFailedComment.length>this.min_characters){
      console.log('adding'+ this.newFailedComment ) 
      this.ts.setFor_None_Gradient_Fail(this.newFailedComment)
      this.newFailedComment = "" 
    }
  }

  addHighToHighComments(){

    if(this.newHighToHighComment.length>this.min_characters){
      console.log('adding'+this.newHighToHighComment ) 
      this.ts.setFor_High_High_Pass(this.newHighToHighComment)
      this.newHighToHighComment=""
    }
  }
  addHighToLowComments(){
 
    if(this.newHighToLowComment.length>this.min_characters){
      console.log('adding'+this.newHighToLowComment )
      this.ts.setFor_High_Low_Fail(this.newHighToLowComment)
      this.newHighToLowComment=""
    }
  }
  addLowToHighComments(){
 
    if(this.newLowToHighComment.length>this.min_characters){
      console.log('adding'+this.newLowToHighComment)
      this.ts.setFor_Low_High_Pass(this.newLowToHighComment)
      this.newLowToHighComment=""
    }
  }
  addLowToLowComments(){
 
    if(this.newLowToLowComment.length>this.min_characters){
      console.log('adding'+this.newLowToLowComment)
      this.ts.setFor_Low_Low_Fail(this.newLowToLowComment)
      this.newLowToLowComment=""
    }
  }
  //END SET TEMPLATES//////////////////////////////////////////////////////////////////  
  //
  //
  //

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
