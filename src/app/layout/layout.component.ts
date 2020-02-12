import { Component, OnInit } from '@angular/core';
import { CurriculumService} from '../curriculum.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  curricula:any = [
    {id: 'QWWEWTRTYTYTR', title: 'Mathmetics'},
    {id: 'ERWYTYURTYYeeyr', title: 'Chemstry'},
    {id: 'PWaFWERTDFGFDG', title: 'Statistics'},
    {id: 'all', title: 'All'}
  ];

  
  constructor(private curriculum_service:CurriculumService) { }

  selected_curriculum = {id: 'all', title: 'All'}

  ngOnInit() {
      this.onSelect();
      this.getCurricula()
  }

  getCurricula(){
      this.curriculum_service.getAll()
      .subscribe(x=>{
        console.log(x)
        this.curricula = x
        this.curricula = [{id: 'all', title: 'All'}, ...this.curricula]
      })
    
  }

  onSelect(){
    console.log(this.selected_curriculum)
    this.curriculum_service.setCurriculum(this.selected_curriculum)
  }

  
}
