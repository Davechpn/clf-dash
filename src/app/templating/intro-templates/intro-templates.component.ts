import { Component, OnInit } from '@angular/core';
import { TemplatingService } from './../../templating.service';


@Component({
  selector: 'app-intro-templates',
  templateUrl: './intro-templates.component.html',
  styleUrls: ['./intro-templates.component.css']
})
export class IntroTemplatesComponent implements OnInit {
  newTag;
  
  introTags;
  lessonPrompts;
  notesPrompts;
  constructor(private ts:TemplatingService) { }

  ngOnInit() {
    this.getTags()
    this.getPromptsTolessons()
    this.getPromptsToNotes()
  }

  getTags(){
    this.introTags = this.ts.getTags('I')
  }

  addTag(){
    console.log('Adding tag '+ this.newTag)
  }

  getPromptsTolessons(){
    this.lessonPrompts = this.ts.getPrompts('I','L')
     
  }

  getPromptsToNotes(){
    this.notesPrompts = this.ts.getPrompts('I','N')
  }

  updateTemplate(id,template){
    console.log(id+" : " + template)
  }

  

}
