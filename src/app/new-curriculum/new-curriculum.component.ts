import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-curriculum',
  templateUrl: './new-curriculum.component.html',
  styleUrls: ['./new-curriculum.component.css']
})
export class NewCurriculumComponent implements OnInit {
  view = "edit";
  details: any;
  detailsForm:FormGroup;
  imageChangedEvent: any = '';
  croppedImage: any = '';
  cropping:boolean;
  cover_image: any;
  isLinear = false;
  levels = ['Form 3','Form 4','O-level','Form 5','Form 6','O-level']
  duration_units = ['Days','Weeks','Months','Years']
  constructor(private router:Router,private db:AngularFirestore, private fb:FormBuilder) { }

  ngOnInit() {
    this.detailsForm = this.fb.group({
      title:['',[Validators.required,Validators.minLength(4),Validators.maxLength(20)]],
      course_code:['',[Validators.required]],
      level:['',[Validators.required]],
      duration:['',[Validators.required,Validators.pattern('[0-9]*')]],
      duration_unit:['',[Validators.required]],
      description:['',[Validators.required,Validators.minLength(9)]]
    })
  }

  get title(){
    return this.detailsForm.get('title');
  }

  get course_code(){
    return this.detailsForm.get('course_code');
  }

  get level(){
    return this.detailsForm.get('level');
  }

  get duration(){
    return this.detailsForm.get('duration');
  }

  get description(){
    return this.detailsForm.get('description');
  }


  
fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
    this.cropping = true
}
imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
}
imageLoaded() {
    // show cropper
}
cropperReady() {
    // cropper ready
}
loadImageFailed() {
    // show message
}

closeEdit(){
  this.detailsForm.controls['title'].disable()
  this.detailsForm.controls['course_code'].disable()
  this.detailsForm.controls['level'].disable()
  this.detailsForm.controls['duration'].disable()
  this.detailsForm.controls['description'].disable()

  this.view = 'read'
}

openEdit(){
  this.detailsForm.controls['title'].enable()
  this.detailsForm.controls['course_code'].enable()
  this.detailsForm.controls['level'].enable()
  this.detailsForm.controls['duration'].enable()
  this.detailsForm.controls['description'].enable()

  this.view = 'edit'
}
save(){
  if(this.croppedImage){
    this.detailsForm.value.cover_image = this.croppedImage
    console.log(this.detailsForm.value)
   // this.db.collection(`curricula`).add(this.detailsForm.value)
  //  this.router.navigateByUrl('/library')
  }

}

}
