import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ContentService} from '../content.service';
import { MatTableDataSource } from '@angular/material/table';
import { HostListener } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { CurriculumService} from '../curriculum.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-select-content',
  templateUrl: './select-content.component.html',
  styleUrls: ['./select-content.component.css']
})
export class SelectContentComponent implements OnInit {

@HostListener('window:popstate', ['$event'])
  onPopState(event) {
    console.log('Back button pressed');
    //Here you can handle your modal
  }
  
  @Input()content_type
  @Input()curricula_id
  @Input()topic_id
  @Output()onClose = new EventEmitter()
  displayedColumns: string[] = ['name'];
  dataSource;// = ELEMENT_DATA;
  view ='detail';
  constructor(private curriculum_service:CurriculumService,private route:ActivatedRoute, private cs:ContentService) {
    this.route.params.subscribe(x=>{
      console.log(x)
      this.topic_id = x.id,
      this.content_type = x.type
    })
   }

  ngOnInit() {
    this.curriculum_service.current_curriculum
    .subscribe(x=>{
      if(x){
        this.curricula_id = x.id
        console.log(this.curricula_id)
      }   
    })
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
    
  }

  getIntros(){
     this.cs.getIntro(this.topic_id, this.curricula_id)
     .subscribe(x=>{
       
       this.dataSource = new MatTableDataSource<any>(x);
     })
  }
  getLessons(){
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
      this.onClose.emit()
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
