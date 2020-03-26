import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ContentService} from '../content.service';
import { MatTableDataSource } from '@angular/material/table';
import { HostListener } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { CurriculumService} from '../curriculum.service';
import { Location} from '@angular/common';
import { Router } from '@angular/router';



@Component({
  selector: 'app-select-content',
  templateUrl: './select-content.component.html',
  styleUrls: ['./select-content.component.css']
})
export class SelectContentComponent implements OnInit {

  
  content_type
  curricula_id
  topic_id
  displayedColumns: string[] = ['name'];
  dataSource;// = ELEMENT_DATA;
  view ='detail';
  constructor(private _location: Location,private _router: Router,private curriculum_service:CurriculumService,private route:ActivatedRoute, private cs:ContentService) {
    this.route.params.subscribe(x=>{
      console.log(x)
      this.topic_id = x.topic_id,
      this.content_type = x.type
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
        switch (this.content_type) {
          case 'intro':
            this.getIntros()
            break;
          case 'lesson':
            this.getLessons()
            break;    
          case 'notes':
            this.getNotes()
            break
          case 'dependencies':
            this.getDeps()
            break;
          
          case 'applications':
            this.getApplications()
            break;
        
          default:
            break;
        }
  
    })

    
  }

  getIntros(){
     this.cs.getIntro(this.topic_id, this.curricula_id)
     .subscribe(x=>{
       
       this.dataSource = new MatTableDataSource<any>(x);
     })
  }
  getLessons(){
    console.log(this.topic_id + ':'+this.curricula_id)
    this.cs.getLessons(this.topic_id, this.curricula_id)
    .subscribe(x=>{
      this.dataSource = new MatTableDataSource<any>(x);
    })
  }

  getNotes(){
    this.cs.getNotes(this.topic_id, this.curricula_id)
    .subscribe(x=>{
      this.dataSource = new MatTableDataSource<any>(x);
    })
  }

  getDeps(){
     this.cs.getDeps(this.curricula_id)
     .subscribe(x=>{
       this.dataSource = new MatTableDataSource<any>(x);
     })
  }

  getApplications(){
     this.cs.getApplications()
     .subscribe(x=>{
       this.dataSource = new MatTableDataSource<any>(x);
     })
  }

  getAll(){
    this.cs.getAll(this.content_type)
    .subscribe(x=>{
      this.dataSource = new MatTableDataSource<any>(x);
    })
  }

  toggleEdit(){
    if(this.view==='edit'){
      //save changes
      console.log('saving changes')
      this.view = 'detail'
    }
    else{
      this.view = 'edit'
    }
    
  }

  close(){
    if(this.view==='detail'){
      this._location.back();
    }else{
      this.view ='detail'
    }
   
  }

  openPreview(){
    if(this.content_type==='intro'||
       this.content_type==='lesson'||
       this.content_type==='notes')
    this.view = 'preview'
  }

  closePreview(){
    this.view = 'detail'
  }

  filter(filterValue){
     console.log(filterValue)
     this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
