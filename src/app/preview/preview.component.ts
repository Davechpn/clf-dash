import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {
  @Output() onClose = new EventEmitter
  @Input()type
  zoom = 1;
  constructor() { }
  pdfSrc = "/../../assets/content/chemistry_full_v1.5.pdf";
  ngOnInit() {
  }

  close(){
    this.onClose.emit()
  }

  toggleZoom(){
    console.log("toogle zoom")
    if(this.zoom===1.8){
       this.zoom = 1
    }else{
       this.zoom = 1.8
    }
  }

}
