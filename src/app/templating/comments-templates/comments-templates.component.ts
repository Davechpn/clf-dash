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

  addPassedComments(){
    console.log('added'+ this.newPassedComment )
  }

  getFailedComments(){
     console.log('added'+ this.newFailedComment )
  }

  getHighToHighComments(){
    console.log('added'+this.newHighToHighComment )
  }
  getHighToLowComments(){
    console.log('added'+this.newHighToLowComment )
  }
  getLowToHighComments(){
    console.log('added'+this.newLowToHighComment )
  }
  getLowToLowComments(){
    console.log('added'+this.newLowToLowComment )
  }

  updateTemplate(id,template){
    console.log(id+" : " + template)
  }

  deleteTemplate(id){
    console.log(id+" : to be deleted" )
  }

}
