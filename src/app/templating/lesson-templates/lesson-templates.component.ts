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
    console.log('addinglessontag'+ this.newLessonTag)
  }

  addNotesTag(){
    console.log('addingnotestag'+ this.newNotesTag)
  }

  addQuizPrompt(){
    console.log('addQuizPrompt'+ this.newQuizPrompt)
  }
//END SET TEMPLATES///////////////////////////////////////////////////////////////////////
//
//
  updateTemplate(id,template){
    console.log(id+" : " + template)
  }

  deleteTemplate(id){
    console.log(id+" : to be deleted" )
  }





}
