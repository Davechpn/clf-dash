import { Component, OnInit } from '@angular/core';
import { TemplatingService } from './../../templating.service';


@Component({
  selector: 'app-intro-templates',
  templateUrl: './intro-templates.component.html',
  styleUrls: ['./intro-templates.component.css']
})
export class IntroTemplatesComponent implements OnInit {
  newTag:string;
  min_characters = 5;
  introTags;
  lessonPrompts;
  notesPrompts;
  newLessonPrompt:string;
  newNotesPrompt:string;
  constructor(private ts:TemplatingService) { }

  ngOnInit() {
    this.getTags()
    this.getPromptsTolessons()
    this.getPromptsToNotes()
  }
  //GET TEMPLATES///////////////////////////////////////////////////////////////////////
    getTags(){
      this.introTags = this.ts.getTags('I')
    }

    getPromptsTolessons(){
      this.lessonPrompts = this.ts.getPrompts('I','L')
      
    }

    getPromptsToNotes(){
      this.notesPrompts = this.ts.getPrompts('I','N')
    }
  //END GET TEMPLATES///////////////////////////////////////////////////////////////////
  //
  //
  //SET TEMPLATES///////////////////////////////////////////////////////////////////////
    addTag(){
     if(this.newTag.length > this.min_characters){
        console.log('Adding tag '+ this.newTag)
        this.ts.setTag('I',this.newTag)
        this.newTag = "";
      }
    }

    addLessonPrompt(){  
      if(this.newLessonPrompt.length > this.min_characters){
        console.log('adding'+this.newLessonPrompt)
        this.ts.setPrompt('I','L',this.newLessonPrompt)
        this.newLessonPrompt = "";
      }
    }

    addNotesPrompt(){
      if(this.newNotesPrompt.length > this.min_characters){
        console.log('adding'+this.newNotesPrompt)
        this.ts.setPrompt('I','N',this.newNotesPrompt)
        this.newNotesPrompt = "";
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
