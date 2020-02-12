import { Component, OnInit } from '@angular/core';
import { CurriculumService} from '../curriculum.service';
import { Router} from '@angular/router'

@Component({
  selector: 'app-studio',
  templateUrl: './studio.component.html',
  styleUrls: ['./studio.component.css']
})
export class StudioComponent implements OnInit {
  current_curriculum
  curricula;
  constructor(private router:Router, private curriculum_service:CurriculumService) { }
  
  
  ngOnInit() {
    this.curriculum_service.current_curriculum
    .subscribe(x=>{
      if(x){
        this.current_curriculum = x
      }   
    })
    this.getCurricula()
  }


  getCurricula(){
    this.curriculum_service.getAll()
    .subscribe(x=>{
      console.log(x)
      this.curricula = x
    }) 
  }
  onSelect(curriculum){
    console.log(curriculum)
    this.curriculum_service.setCurriculum(curriculum)
    this.router.navigateByUrl(`curriculum/${curriculum.id}/topics`)
  }

  selectSpecial(type){
    console.log('selecting ' + type)
  }

}
