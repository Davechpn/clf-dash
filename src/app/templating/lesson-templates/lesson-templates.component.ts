import { Component, OnInit } from '@angular/core';
import { TemplatingService } from './../../templating.service';

@Component({
  selector: 'app-lesson-templates',
  templateUrl: './lesson-templates.component.html',
  styleUrls: ['./lesson-templates.component.css']
})
export class LessonTemplatesComponent implements OnInit {
  lessonTags;
  quizPrompts;
  notesTags;
  min_characters = 5;
  newQuizPrompt: string;
  newNotesTag: string;
  newLessonTag: string;
  constructor(private ts:TemplatingService) { }

  ngOnInit() {
    this.getVideosTags();
    this.getPromptsToQuiz()
  }
//GET TEMPLATES///////////////////////////////////////////////////////////////////////
  getVideosTags(){
    this.lessonTags = this.ts.getTags('L')
  }

  getNotesTags(){
    this.notesTags = this.ts.getTags('N')
  }

  getPromptsToQuiz(){
    this.quizPrompts = this.ts.getPrompts('L','Q')  
  }
//END GET TEMPLATES//////////////////////////////////////////////////////////////////
//
//
//
//SET TEMPLATES///////////////////////////////////////////////////////////////////////
  addLessonTag(){
    if(this.newLessonTag.length>this.min_characters){
      console.log('addinglessontag'+ this.newLessonTag)
      this.ts.setTag('L',this.newLessonTag)
      this.newLessonTag = ""
    }  
  }

  addNotesTag(){
    if(this.newNotesTag.length>this.min_characters){
      console.log('addingnotestag'+ this.newNotesTag)
      this.ts.setTag('N',this.newNotesTag)
      this.newNotesTag = ""
    } 
  }

  addQuizPrompt(){
    if(this.newQuizPrompt.length>this.min_characters){
      console.log('addQuizPrompt'+ this.newQuizPrompt)
      this.ts.setPrompt('L','Q',this.newQuizPrompt)
      this.newQuizPrompt = ""
    }

  }
//END SET TEMPLATES///////////////////////////////////////////////////////////////////////
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
