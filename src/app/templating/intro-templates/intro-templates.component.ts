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
  newLessonPrompt: string;
  newNotesPrompt: string;
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
      console.log('Adding tag '+ this.newTag)
    }

    addLessonPrompt(){
      console.log('adding'+this.newLessonPrompt)
    }

    addNotesPrompt(){
      console.log('adding'+this.newNotesPrompt)
    }

  //END SET TEMPLATES//////////////////////////////////////////////////////////////////  
  //
  //
  //
    updateTemplate(id,template){
      console.log(id+" : " + template)
    }
    deleteTemplate(id){
      console.log(id+" : to be deleted" )
    }
    

}
