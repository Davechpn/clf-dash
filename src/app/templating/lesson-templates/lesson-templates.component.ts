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
  constructor(private ts:TemplatingService) { }

  ngOnInit() {
    this.getVideosTags();
    this.getPromptsToQuiz()
  }

  getVideosTags(){
    this.lessonTags = this.ts.getTags('L')
  }

  getNotesTags(){
    this.notesTags = this.ts.getTags('N')
  }

  getPromptsToQuiz(){
    this.quizPrompts = this.ts.getPrompts('L','Q')  
  }

  updateTemplate(id,template){
    console.log(id+" : " + template)
  }



}
