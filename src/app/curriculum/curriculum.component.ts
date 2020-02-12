import { Component, OnInit, Input, ViewChild } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.css']
})
export class CurriculumComponent implements OnInit {
  details: any;
  detailsForm:FormGroup;
  view: string = 'read'
  imageChangedEvent: any = '';
  croppedImage: any = '';
  cropping:boolean;
  cover_image: any;
  isLinear = false;
  curricula_id;

  constructor(private route:ActivatedRoute, private db:AngularFirestore, private fb:FormBuilder) {}

  ngOnInit() {
    this.route.params.subscribe(x=>{
      this.curricula_id = x.id;
    })
    this.getDetails(this.curricula_id)
    this.detailsForm = this.fb.group({
      title:['',[Validators.required]],
      course_code:[''],
      level:[''],
      duration:[''],
      description:['']
    })
  }

  getDetails(id){
    this.db.doc(`curricula/${id}`).valueChanges()
    .subscribe(x=>{
         this.details = x
         this.cover_image = this.details.cover_image
         if(x['title']){
           this.detailsForm.controls['title'].setValue(x['title'])
         }
         if(x['course_code']){
          this.detailsForm.controls['course_code'].setValue(x['course_code'])
         }
         if(x['level']){
          this.detailsForm.controls['level'].setValue(x['level'])
         }
         if(x['duration']){
          this.detailsForm.controls['duration'].setValue(x['duration'])
         }
         if(x['description']){
          this.detailsForm.controls['description'].setValue(x['description'])
         } 
         
         this.closeEdit()
    })
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

  update(){
    if(this.croppedImage){

      this.detailsForm.value.cover_image = this.croppedImage
    }
    console.log(this.detailsForm.value)
    this.db.doc(`curricula/${this.curricula_id}`).set(this.detailsForm.value,{merge:true})
  }


  edit(){
   // this.details.closeEdit()
  }
}
