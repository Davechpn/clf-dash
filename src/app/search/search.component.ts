import { Component, OnInit,EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }
  @Output() filtered = new EventEmitter<boolean>();
  ngOnInit() {
  }

    //Start Search Section///////////////////////////////
    search_mode;
    filter(value){
      //console.log(value)
      //filter the provided dataset
      this.filtered.emit(value);
    }
    closeSearch(){
      this.search_mode = false;
    }
    openSearch(){
      this.search_mode = true;
    }
  //End Search Section///////////////////////////////

}
