import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms'

@Component({
  selector: 'app-quiz-context',
  templateUrl: './quiz-context.component.html',
  styleUrls: ['./quiz-context.component.css']
})
export class QuizContextComponent implements OnInit {

  @Input()context
  @Output()onClose = new EventEmitter()
  quizContextForm:FormGroup;
  quizVariantForm:FormGroup;
  view = 'detail'
  quiz_types=['text','image','sticker']
  constructor(private fb:FormBuilder) { 
    
  }

  ngOnInit() {
    if(this.context==='new'){
      this.view = 'new'
    }
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
    this.initializeForm()
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
      this.onClose.emit()
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
