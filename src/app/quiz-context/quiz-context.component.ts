import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { ContentService } from '../content.service';
import { ActivatedRoute } from '@angular/router';
import { CurriculumService} from '../curriculum.service';
import { Router } from '@angular/router';
import { Location} from '@angular/common';

@Component({
  selector: 'app-quiz-context',
  templateUrl: './quiz-context.component.html',
  styleUrls: ['./quiz-context.component.css']
})
export class QuizContextComponent implements OnInit {

  context;
  quizContextForm:FormGroup;
  quizVariantForm:FormGroup;
  curricula_id;
  context_id;
  view = 'detail'
  quiz_types=['text','image','sticker']
  
  constructor(private _location: Location,private _router: Router,private curriculum_service:CurriculumService,private fb:FormBuilder, private cs:ContentService, private route:ActivatedRoute) { 
    this.route.params.subscribe(x=>{
      console.log(x)
      this.context_id = x.context_id
    })
  }

  ngOnInit() {
    this.curriculum_service.current_curriculum
    .subscribe(x=>{
      if(x.id !== "all"){
        this.curricula_id = x.id
        console.log(this.curricula_id)

      }else{
        this.curricula_id = this._router.url.split('/')[2]
        console.log(this.curricula_id)
      }

      
      this.getQuizContext(this.curricula_id,this.context_id)
    })


    // if(this.context==='new'){
    //   this.view = 'new'
    // }
    this.quizContextForm = this.fb.group(
      {
        context:['',[Validators.required]],
        multiplechoice:[''],
        number:[''],//automatically generated
        topic_id:[''],
        quiz_variants:['']
      }
    )

    this.quizVariantForm = this.fb.group({
      quiz:[''],
      alternate_ans:[''],
      content_type:[''],
      semblences:['']

    })
   // this.initializeForm()

  
  }

  getQuizContext(curricula_id, context_id){
     this.cs.getQuizContext(curricula_id,context_id)
     .subscribe(x=>{
       console.log(x)
       this.context = x
       this.initializeForm()
     })
     
  }

  initializeForm(){
    if(this.context){
      this.quizContextForm.controls['context'].setValue(this.context.context);
      this.quizContextForm.controls['multiplechoice'].setValue(this.context.multiplechoice);  
      this.quizContextForm.controls['number'].setValue(this.context.number);   
    }
  }


  close(){
    if(this.view==='detail'||this.view==='new'){
      this._location.back();
    }else{
      this.view = 'detail'
    }

  }

  openEdit(){
    this.view = 'edit'
  }

  closeEdit(){
    this.view = 'detail'
  }

}
